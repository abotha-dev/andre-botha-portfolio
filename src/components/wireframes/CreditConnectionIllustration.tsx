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

const RING_R = 50                    // ring radius (centerline) in SVG units
const TUBE_THICKNESS = 0.28          // total tube width as a fraction of RING_R
const RING_B_OFFSET_Z = RING_R / 3   // shift Ring B up so the rings interlink
                                     // properly instead of sharing a center
const SAMPLES = 80                   // path samples per ring half — higher = smoother

const ISO_COS = Math.cos(Math.PI / 6) // 0.866 — true 30° iso projection
const ISO_SIN = Math.sin(Math.PI / 6) // 0.5

const STROKE = '#62666D'
const FILL = '#111113'                // matches var(--surface) — annular bg occludes underneath

const VIEWBOX_W = 400
const VIEWBOX_H = 220
const CX = 200
// Ring A is at origin and Ring B is offset upward by RING_B_OFFSET_Z; CY is
// shifted down by half the offset so the visual midpoint of the two rings
// sits at the vertical center of the viewBox.
const CY = 110 + RING_B_OFFSET_Z / 2

// ─── INTERACTION CONSTANTS ──────────────────────────────────────────────────

const RING_TILT_FORWARD = 48 * Math.PI / 180  // ring leans toward viewer
const RING_TILT_BACK = -18 * Math.PI / 180    // counter-tilt of the other ring

const TILT_MAX_DEG = 6
const SPRING = { stiffness: 180, damping: 20 }

// ─── DERIVED ────────────────────────────────────────────────────────────────

// Half-width of the tube in screen units. Used as a perpendicular offset
// from the centerline at each sampled point — keeps the tube's visual width
// constant regardless of how the ring is tilted in 3D.
const TUBE_HALF_WIDTH = (RING_R * TUBE_THICKNESS) / 2

// ─── 3D MATH ────────────────────────────────────────────────────────────────

// Ring A lies in the YZ plane (x = 0). Its tilt rotates around the Y axis,
// which preserves the y-component — so the front/back split (y > 0 vs y < 0)
// is invariant under tilt and chain-link painter order stays correct.
function ringAPoint(theta: number, tilt: number): [number, number, number] {
  const cosA = Math.cos(tilt)
  const sinA = Math.sin(tilt)
  const y = RING_R * Math.cos(theta)
  const z = RING_R * Math.sin(theta)
  return [z * sinA, y, z * cosA]
}

// Ring B lies in the XZ plane (y = 0), but its center is offset to
// (0, 0, RING_B_OFFSET_Z) so the two rings are properly interlinked rather
// than sharing a center. The tilt rotates around the X axis through Ring B's
// own center.
function ringBPoint(phi: number, tilt: number): [number, number, number] {
  const cosB = Math.cos(tilt)
  const sinB = Math.sin(tilt)
  const x = RING_R * Math.cos(phi)
  const zLocal = RING_R * Math.sin(phi)
  // Tilt around X axis through local origin, then translate by the z offset.
  return [x, -zLocal * sinB, RING_B_OFFSET_Z + zLocal * cosB]
}

// World axes: +x toward back-right, +y toward back-left, +z up.
function project(p: [number, number, number]): [number, number] {
  const [x, y, z] = p
  return [
    CX + (x - y) * ISO_COS,
    CY + (x + y) * ISO_SIN - z,
  ]
}

// Compute the outer + inner edge points of a tube along a centerline arc.
// The edges are offset perpendicular to the projected tangent at each sample,
// so the tube's screen-space width stays constant under any 3D rotation.
function tubeEdges(
  pointFn: (t: number) => [number, number, number],
  tStart: number,
  tEnd: number,
): { outer: [number, number][]; inner: [number, number][] } {
  const centerline: [number, number][] = []
  for (let i = 0; i <= SAMPLES; i++) {
    const t = tStart + (tEnd - tStart) * (i / SAMPLES)
    centerline.push(project(pointFn(t)))
  }
  const outer: [number, number][] = []
  const inner: [number, number][] = []
  for (let i = 0; i <= SAMPLES; i++) {
    const prev = centerline[Math.max(0, i - 1)]
    const next = centerline[Math.min(SAMPLES, i + 1)]
    const tx = next[0] - prev[0]
    const ty = next[1] - prev[1]
    const len = Math.hypot(tx, ty) || 1
    // Perpendicular to tangent (rotated 90°)
    const nx = -ty / len
    const ny = tx / len
    const c = centerline[i]
    outer.push([c[0] + TUBE_HALF_WIDTH * nx, c[1] + TUBE_HALF_WIDTH * ny])
    inner.push([c[0] - TUBE_HALF_WIDTH * nx, c[1] - TUBE_HALF_WIDTH * ny])
  }
  return { outer, inner }
}

// Build a CLOSED filled half-tube path: outer arc forward + tube end cap +
// inner arc reversed + close. The bg fill of this path is what occludes other
// rings' strokes where this tube passes over them.
function halfTubeFillPath(
  pointFn: (t: number) => [number, number, number],
  tStart: number,
  tEnd: number,
): string {
  const { outer, inner } = tubeEdges(pointFn, tStart, tEnd)
  const parts: string[] = []
  parts.push(`M${outer[0][0].toFixed(2)},${outer[0][1].toFixed(2)}`)
  for (let i = 1; i <= SAMPLES; i++) {
    parts.push(`L${outer[i][0].toFixed(2)},${outer[i][1].toFixed(2)}`)
  }
  parts.push(`L${inner[SAMPLES][0].toFixed(2)},${inner[SAMPLES][1].toFixed(2)}`)
  for (let i = SAMPLES - 1; i >= 0; i--) {
    parts.push(`L${inner[i][0].toFixed(2)},${inner[i][1].toFixed(2)}`)
  }
  parts.push('Z')
  return parts.join(' ')
}

// Build the visible tube edges as two subpaths (outer arc + inner arc).
// Drawn separately from the fill so the tube end caps remain unstroked
// (the rings read as continuous tubes, not capped sausages).
function halfTubeStrokePath(
  pointFn: (t: number) => [number, number, number],
  tStart: number,
  tEnd: number,
): string {
  const { outer, inner } = tubeEdges(pointFn, tStart, tEnd)
  const parts: string[] = []
  parts.push(`M${outer[0][0].toFixed(2)},${outer[0][1].toFixed(2)}`)
  for (let i = 1; i <= SAMPLES; i++) {
    parts.push(`L${outer[i][0].toFixed(2)},${outer[i][1].toFixed(2)}`)
  }
  parts.push(`M${inner[0][0].toFixed(2)},${inner[0][1].toFixed(2)}`)
  for (let i = 1; i <= SAMPLES; i++) {
    parts.push(`L${inner[i][0].toFixed(2)},${inner[i][1].toFixed(2)}`)
  }
  return parts.join(' ')
}

// ─── DYNAMIC ARC RANGES ─────────────────────────────────────────────────────
// Each ring is split into a "front" arc (camera-side of the OTHER ring's
// tilted plane) and a "back" arc. Because Ring B is offset along z, the split
// arc length is no longer exactly π — it depends on both tilts AND the offset.
//
// For a centerline point P on a ring, the signed distance to the other ring's
// tilted plane is:
//   SD(t) = A·cos(t) + B·sin(t) − C
// where A, B come from the projection of the centerline onto the other plane's
// normal, and C is the constant from the offset between the two ring planes.
// Front arc: SD > 0. Center at atan2(B, A). Half-width acos(C / √(A²+B²)).

type ArcRange = { center: number; halfWidth: number }

function ringAFrontArc(tiltA: number, tiltB: number): ArcRange {
  // Ring B's plane normal (after tilt β around X through its own center):
  //   (0, cos β, sin β), passing through (0, 0, OFFSET_Z).
  // Plane equation:  cos β · y + sin β · z  =  sin β · OFFSET_Z
  // Plug Ring A's point (after tilt α):
  //   A point: (R sinθ sinα, R cosθ, R sinθ cosα)
  //   ⇒ cos β · cosθ + sin β · cosα · sinθ  =  sin β · OFFSET_Z / R
  const A = Math.cos(tiltB)
  const B = Math.sin(tiltB) * Math.cos(tiltA)
  const C = Math.sin(tiltB) * RING_B_OFFSET_Z / RING_R
  const norm = Math.hypot(A, B) || 1
  const ratio = Math.max(-1, Math.min(1, C / norm))
  return { center: Math.atan2(B, A), halfWidth: Math.acos(ratio) }
}

function ringBFrontArc(tiltA: number, tiltB: number): ArcRange {
  // Ring A's plane normal (after tilt α around Y through origin):
  //   (cos α, 0, −sin α), passing through origin.
  // Plane equation:  cos α · x − sin α · z  =  0
  // Plug Ring B's point (after tilt β and offset):
  //   B point: (R cosφ, −R sinφ sinβ, OFFSET_Z + R sinφ cosβ)
  //   ⇒ cos α · cosφ − sin α · cos β · sinφ  =  sin α · OFFSET_Z / R
  const A = Math.cos(tiltA)
  const B = -Math.sin(tiltA) * Math.cos(tiltB)
  const C = Math.sin(tiltA) * RING_B_OFFSET_Z / RING_R
  const norm = Math.hypot(A, B) || 1
  const ratio = Math.max(-1, Math.min(1, C / norm))
  return { center: Math.atan2(B, A), halfWidth: Math.acos(ratio) }
}

// ────────────────────────────────────────────────────────────────────────────

type Props = {
  cardRef: RefObject<HTMLElement | null>
  className?: string
}

export function CreditConnectionIllustration({ cardRef, className }: Props) {
  const reduced = useReducedMotion()

  const cursorXNorm = useMotionValue(0.5)
  const cursorYNorm = useMotionValue(0.5)

  // Per-ring tilt: oscillates between forward and back depending on cursor Y.
  // cursor 0 (top)    → A forward, B back
  // cursor 0.5 (mid)  → both at 0° (resting)
  // cursor 1 (bottom) → A back, B forward
  const tiltARaw = useTransform(
    cursorYNorm,
    [0, 0.5, 1],
    [RING_TILT_FORWARD, 0, RING_TILT_BACK],
  )
  const tiltBRaw = useTransform(
    cursorYNorm,
    [0, 0.5, 1],
    [RING_TILT_BACK, 0, RING_TILT_FORWARD],
  )
  const tiltA = useSpring(tiltARaw, SPRING)
  const tiltB = useSpring(tiltBRaw, SPRING)

  // Card-level tilt: same convention as the other illustrations.
  const cardTiltXRaw = useTransform(cursorYNorm, [0, 1], [-TILT_MAX_DEG, TILT_MAX_DEG])
  const cardTiltYRaw = useTransform(cursorXNorm, [0, 1], [TILT_MAX_DEG, -TILT_MAX_DEG])
  const cardTiltX = useSpring(cardTiltXRaw, SPRING)
  const cardTiltY = useSpring(cardTiltYRaw, SPRING)

  // Per-half path strings (fill + stroke), recomputed each frame. Each path
  // depends on BOTH tilts because the front/back split for one ring is defined
  // by the OTHER ring's tilted (and offset) plane.
  const aBackFill = useTransform([tiltA, tiltB], ([a, b]: number[]) => {
    const { center, halfWidth } = ringAFrontArc(a, b)
    return halfTubeFillPath((θ) => ringAPoint(θ, a), center + halfWidth, center + 2 * Math.PI - halfWidth)
  })
  const aBackStroke = useTransform([tiltA, tiltB], ([a, b]: number[]) => {
    const { center, halfWidth } = ringAFrontArc(a, b)
    return halfTubeStrokePath((θ) => ringAPoint(θ, a), center + halfWidth, center + 2 * Math.PI - halfWidth)
  })
  const aFrontFill = useTransform([tiltA, tiltB], ([a, b]: number[]) => {
    const { center, halfWidth } = ringAFrontArc(a, b)
    return halfTubeFillPath((θ) => ringAPoint(θ, a), center - halfWidth, center + halfWidth)
  })
  const aFrontStroke = useTransform([tiltA, tiltB], ([a, b]: number[]) => {
    const { center, halfWidth } = ringAFrontArc(a, b)
    return halfTubeStrokePath((θ) => ringAPoint(θ, a), center - halfWidth, center + halfWidth)
  })
  const bBackFill = useTransform([tiltA, tiltB], ([a, b]: number[]) => {
    const { center, halfWidth } = ringBFrontArc(a, b)
    return halfTubeFillPath((φ) => ringBPoint(φ, b), center + halfWidth, center + 2 * Math.PI - halfWidth)
  })
  const bBackStroke = useTransform([tiltA, tiltB], ([a, b]: number[]) => {
    const { center, halfWidth } = ringBFrontArc(a, b)
    return halfTubeStrokePath((φ) => ringBPoint(φ, b), center + halfWidth, center + 2 * Math.PI - halfWidth)
  })
  const bFrontFill = useTransform([tiltA, tiltB], ([a, b]: number[]) => {
    const { center, halfWidth } = ringBFrontArc(a, b)
    return halfTubeFillPath((φ) => ringBPoint(φ, b), center - halfWidth, center + halfWidth)
  })
  const bFrontStroke = useTransform([tiltA, tiltB], ([a, b]: number[]) => {
    const { center, halfWidth } = ringBFrontArc(a, b)
    return halfTubeStrokePath((φ) => ringBPoint(φ, b), center - halfWidth, center + halfWidth)
  })

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
      cursorYNorm.set(0.5) // resting tilt = neutral
    }

    card.addEventListener('mousemove', handleMove)
    card.addEventListener('mouseleave', handleLeave)
    return () => {
      card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [cardRef, cursorXNorm, cursorYNorm, reduced])

  // Static (reduced motion) paths at neutral tilt — both rings untilted, so the
  // front/back centers are at θ=0 / φ=0 and the ranges collapse to the simple
  // [-π/2, π/2] front, [π/2, 3π/2] back used at rest.
  const sABackFill = halfTubeFillPath((θ) => ringAPoint(θ, 0), Math.PI / 2, Math.PI * 1.5)
  const sABackStroke = halfTubeStrokePath((θ) => ringAPoint(θ, 0), Math.PI / 2, Math.PI * 1.5)
  const sAFrontFill = halfTubeFillPath((θ) => ringAPoint(θ, 0), -Math.PI / 2, Math.PI / 2)
  const sAFrontStroke = halfTubeStrokePath((θ) => ringAPoint(θ, 0), -Math.PI / 2, Math.PI / 2)
  const sBBackFill = halfTubeFillPath((φ) => ringBPoint(φ, 0), Math.PI / 2, Math.PI * 1.5)
  const sBBackStroke = halfTubeStrokePath((φ) => ringBPoint(φ, 0), Math.PI / 2, Math.PI * 1.5)
  const sBFrontFill = halfTubeFillPath((φ) => ringBPoint(φ, 0), -Math.PI / 2, Math.PI / 2)
  const sBFrontStroke = halfTubeStrokePath((φ) => ringBPoint(φ, 0), -Math.PI / 2, Math.PI / 2)

  const fillProps = {
    fill: FILL,
    stroke: 'none' as const,
  }
  const strokeProps = {
    fill: 'none' as const,
    stroke: STROKE,
    strokeWidth: 1,
    strokeLinecap: 'round' as const,
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
          rotateX: reduced ? 0 : cardTiltX,
          rotateY: reduced ? 0 : cardTiltY,
        }}
      >
        <svg
          viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
          aria-hidden="true"
        >
          {/* Painter's order, back to front. Each half = filled tube body
              (occluder) + outer + inner arc strokes (visible tube edges). */}
          <motion.path d={reduced ? sABackFill : aBackFill} {...fillProps} />
          <motion.path d={reduced ? sABackStroke : aBackStroke} {...strokeProps} />

          <motion.path d={reduced ? sBBackFill : bBackFill} {...fillProps} />
          <motion.path d={reduced ? sBBackStroke : bBackStroke} {...strokeProps} />

          <motion.path d={reduced ? sAFrontFill : aFrontFill} {...fillProps} />
          <motion.path d={reduced ? sAFrontStroke : aFrontStroke} {...strokeProps} />

          <motion.path d={reduced ? sBFrontFill : bFrontFill} {...fillProps} />
          <motion.path d={reduced ? sBFrontStroke : bFrontStroke} {...strokeProps} />
        </svg>
      </motion.div>
    </div>
  )
}
