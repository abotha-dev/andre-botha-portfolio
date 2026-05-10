import { useEffect, type RefObject } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'

// ─── GEOMETRY CONSTANTS ─────────────────────────────────────────────────────
// Tweak proportions by editing the numbers in this block.

const ISO_COS = Math.cos(Math.PI / 6) // 0.866 — true 30° iso projection
const ISO_SIN = Math.sin(Math.PI / 6) // 0.5

const PLANE_W = 90                    // plane width along world +x
const PLANE_D = 60                    // plane depth along world +y
const PLANE_T = 4                     // plane thickness along world +z
const SLOT_GAP = 14                   // gap between adjacent planes in the stack
const PLANE3_OFFSET = 7               // forward offset for the middle plane in slotted state

const FILL = '#111113'                // matches var(--surface) — edges occlude naturally
const STROKE = '#62666D'

const VIEWBOX_W = 400
const VIEWBOX_H = 220
const CX = 200
const CY = 110

const TILT_MAX_DEG = 6
const SPRING = { stiffness: 180, damping: 20 }
// Morph spring: tuned so the time to settle (~600ms) roughly matches the time
// a user would take to drag their cursor from the top of the card to where
// they actually entered. Critically damped so no overshoot. This makes entry
// from any direction feel like the "from top" entry: scatter→slot smoothly.
const MORPH_SPRING = { stiffness: 90, damping: 22 }

// ─── PLANE STATES ───────────────────────────────────────────────────────────

const D2R = Math.PI / 180

type PlaneState = {
  tx: number
  ty: number
  tz: number
  rx: number // radians
  ry: number
  rz: number
}

// Slotted: stacked vertically by tz. Plane 2 is the middle and the only one
// with a deliberate forward offset along +x. Other planes carry small jitter.
const SLOT_STEP = PLANE_T + SLOT_GAP
const SLOTTED: PlaneState[] = [
  { tx: +1.5, ty: 0, tz: -2 * SLOT_STEP, rx: 0, ry: 0, rz: 0 },
  { tx: -1.2, ty: 0, tz: -1 * SLOT_STEP, rx: 0, ry: 0, rz: 0 },
  { tx: PLANE3_OFFSET, ty: 0, tz: 0, rx: 0, ry: 0, rz: 0 }, // middle plane: forward offset
  { tx: -1.8, ty: 0, tz: +1 * SLOT_STEP, rx: 0, ry: 0, rz: 0 },
  { tx: +1.0, ty: 0, tz: +2 * SLOT_STEP, rx: 0, ry: 0, rz: 0 },
]

// Scattered: each plane assigned to a distinct screen quadrant so they don't
// crowd or occlude each other. Tighter than full-card spread — keeps the
// scatter↔slot delta modest enough that the morph reads as a smooth settle
// rather than a long animated journey.
const SCATTERED: PlaneState[] = [
  // top-left
  { tx: -22, ty: +12, tz: +24, rx: -10 * D2R, ry: +12 * D2R, rz:  -8 * D2R },
  // top-right
  { tx: +12, ty: -22, tz: +24, rx: +14 * D2R, ry: -15 * D2R, rz: +10 * D2R },
  // center
  { tx:   0, ty:   0, tz:   0, rx: -18 * D2R, ry: +22 * D2R, rz: +14 * D2R },
  // bottom-left
  { tx: -18, ty: +24, tz: -20, rx: +12 * D2R, ry: -10 * D2R, rz: -15 * D2R },
  // bottom-right
  { tx: +24, ty: -12, tz: -24, rx: -15 * D2R, ry:  +8 * D2R, rz: +12 * D2R },
]

// ─── ROTATION + PROJECTION ──────────────────────────────────────────────────

function rotateXYZ(
  x: number, y: number, z: number,
  rx: number, ry: number, rz: number,
): [number, number, number] {
  const cA = Math.cos(rx), sA = Math.sin(rx)
  const y1 = y * cA - z * sA
  const z1 = y * sA + z * cA
  const cB = Math.cos(ry), sB = Math.sin(ry)
  const x2 = x * cB + z1 * sB
  const z2 = -x * sB + z1 * cB
  const cC = Math.cos(rz), sC = Math.sin(rz)
  const x3 = x2 * cC - y1 * sC
  const y3 = x2 * sC + y1 * cC
  return [x3, y3, z2]
}

function project(x: number, y: number, z: number): [number, number] {
  return [(x - y) * ISO_COS, (x + y) * ISO_SIN - z]
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

function lerpState(a: PlaneState, b: PlaneState, t: number): PlaneState {
  return {
    tx: lerp(a.tx, b.tx, t),
    ty: lerp(a.ty, b.ty, t),
    tz: lerp(a.tz, b.tz, t),
    rx: lerp(a.rx, b.rx, t),
    ry: lerp(a.ry, b.ry, t),
    rz: lerp(a.rz, b.rz, t),
  }
}

const W2 = PLANE_W / 2
const D2 = PLANE_D / 2
const T2 = PLANE_T / 2

const LOCAL_CORNERS: ReadonlyArray<readonly [number, number, number]> = [
  [-W2, -D2, -T2], // 0
  [+W2, -D2, -T2], // 1
  [+W2, +D2, -T2], // 2
  [-W2, +D2, -T2], // 3
  [-W2, -D2, +T2], // 4
  [+W2, -D2, +T2], // 5
  [+W2, +D2, +T2], // 6
  [-W2, +D2, +T2], // 7
]

type FaceDef = {
  idxs: readonly [number, number, number, number]
  normal: readonly [number, number, number]
}

// All 6 faces; back-face culled per-frame against the iso camera direction (1,1,1).
const FACES: ReadonlyArray<FaceDef> = [
  { idxs: [4, 5, 6, 7], normal: [0, 0,  1] }, // +z (top)
  { idxs: [0, 3, 2, 1], normal: [0, 0, -1] }, // -z (bottom)
  { idxs: [1, 2, 6, 5], normal: [ 1, 0, 0] }, // +x (right)
  { idxs: [0, 4, 7, 3], normal: [-1, 0, 0] }, // -x
  { idxs: [2, 3, 7, 6], normal: [0,  1, 0] }, // +y (left)
  { idxs: [0, 1, 5, 4], normal: [0, -1, 0] }, // -y
]

function buildFacePoints(state: PlaneState, face: FaceDef): string {
  // Back-face cull: rotate the face normal and check against camera (1,1,1).
  const [nx, ny, nz] = rotateXYZ(face.normal[0], face.normal[1], face.normal[2],
    state.rx, state.ry, state.rz)
  if (nx + ny + nz <= 0) return ''
  // Compute screen positions of the 4 corners.
  const pts = face.idxs.map((i) => {
    const [lx, ly, lz] = LOCAL_CORNERS[i]
    const [rx, ry, rz] = rotateXYZ(lx, ly, lz, state.rx, state.ry, state.rz)
    const [px, py] = project(rx + state.tx, ry + state.ty, rz + state.tz)
    return [CX + px, CY + py] as [number, number]
  })
  return pts.map(([x, y]) => `${x.toFixed(3)},${y.toFixed(3)}`).join(' ')
}

const clamp01 = (v: number) => Math.min(1, Math.max(0, v))

// ────────────────────────────────────────────────────────────────────────────

type Props = {
  cardRef: RefObject<HTMLElement | null>
  className?: string
}

export function HealioIllustration({ cardRef, className }: Props) {
  const reduced = useReducedMotion()

  const cursorXNorm = useMotionValue(0.5)
  const cursorYNorm = useMotionValue(0)

  // tiltX is clamped to the same [0, 0.5] range as the morph so it doesn't keep
  // swinging through zero past the middle of the card — without the clamp the
  // tilt's continued rotation reads as the planes reversing direction even
  // though the morph itself is monotonic and complete.
  const tiltXRaw = useTransform(cursorYNorm, [0, 0.5], [-TILT_MAX_DEG, TILT_MAX_DEG], { clamp: true })
  const tiltYRaw = useTransform(cursorXNorm, [0, 1], [TILT_MAX_DEG, -TILT_MAX_DEG])
  const tiltX = useSpring(tiltXRaw, SPRING)
  const tiltY = useSpring(tiltYRaw, SPRING)

  // 0 = scattered, 1 = slotted. Slotted is fully reached at the middle of the
  // card (cursorY = 0.5) — gives the user the second half of the card as
  // runway to settle into the slotted state.
  // The spring on t makes entry from any direction feel like entry from the
  // top: it always animates from scattered (rest) toward the cursor's target
  // over ~600ms, matching the time a user would take to drag from the top.
  const tRaw = useTransform(cursorYNorm, [0, 0.5], [0, 1], { clamp: true })
  const t = useSpring(tRaw, MORPH_SPRING)

  // Fixed-length nested loop: 5 planes × 6 faces = 30 useTransform calls in
  // stable order, identical per render — safe under React's hook rules.
  const planeFacePoints = SCATTERED.map((_, planeIdx) =>
    FACES.map((face) =>
      useTransform(t, (tVal) => {
        const state = lerpState(SCATTERED[planeIdx], SLOTTED[planeIdx], clamp01(tVal))
        return buildFacePoints(state, face)
      }),
    ),
  )

  // Static face points for reduced-motion fallback (scattered state).
  const staticPoints = SCATTERED.map((state) =>
    FACES.map((face) => buildFacePoints(state, face)),
  )

  useEffect(() => {
    if (reduced) return
    const card = cardRef.current
    if (!card) return

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      cursorXNorm.set((e.clientX - rect.left) / rect.width)
      cursorYNorm.set((e.clientY - rect.top) / rect.height)
    }
    const handleLeave = () => {
      cursorXNorm.set(0.5)
      cursorYNorm.set(0)
    }

    card.addEventListener('mousemove', handleMove)
    card.addEventListener('mouseleave', handleLeave)
    return () => {
      card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [cardRef, cursorXNorm, cursorYNorm, reduced])

  const polygonProps = {
    fill: FILL,
    stroke: STROKE,
    strokeWidth: 1,
    strokeLinejoin: 'round' as const,
    vectorEffect: 'non-scaling-stroke' as const,
  }

  return (
    <div
      className={className}
      style={{ perspective: '1000px', width: '100%', height: '100%' }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          rotateX: reduced ? 0 : tiltX,
          rotateY: reduced ? 0 : tiltY,
        }}
      >
        <svg
          viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
          aria-hidden="true"
        >
          {SCATTERED.map((_, planeIdx) => (
            <g key={planeIdx}>
              {FACES.map((_face, faceIdx) => (
                <motion.polygon
                  key={faceIdx}
                  points={reduced
                    ? staticPoints[planeIdx][faceIdx]
                    : planeFacePoints[planeIdx][faceIdx]}
                  {...polygonProps}
                />
              ))}
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  )
}
