import { useEffect, type RefObject } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'

// ─── GEOMETRY CONSTANTS ─────────────────────────────────────────────────────
// Tweak proportions by editing the numbers in this block; every coordinate
// downstream is derived from these.

const ISO_COS = Math.cos(Math.PI / 6) // 0.866 — true 30° iso projection
const ISO_SIN = Math.sin(Math.PI / 6) // 0.5

const CUBE_EDGE = 50                  // walls cube edge (SVG units)
const FOUNDATION_WIDTH_RATIO = 1.4    // foundation footprint vs walls
const FOUNDATION_HEIGHT_RATIO = 0.32  // foundation height as fraction of edge
const ROOF_HEIGHT_RATIO = 0.78        // roof apex above wall top

const FILL = '#111113'                // matches var(--surface) — edges occlude naturally
const STROKE = '#62666D'

const VIEWBOX_W = 400
const VIEWBOX_H = 220
const CX = 200
const CY = 104                        // visually centers the building in the viewBox

// ─── INTERACTION CONSTANTS ──────────────────────────────────────────────────

const ROOF_LIFT_MAX = 44              // px upward at cursor Y = 1
const WALLS_LIFT_MAX = 26
const FOUNDATION_LIFT_MAX = 12        // foundation lifts too, less than walls so cascade reads
const TILT_MAX_DEG = 6
const SPRING = { stiffness: 180, damping: 20 }

// ─── DERIVED GEOMETRY ───────────────────────────────────────────────────────

const E = CUBE_EDGE
const FH = E * FOUNDATION_HEIGHT_RATIO            // foundation height
const FW_DELTA = (E * (FOUNDATION_WIDTH_RATIO - 1)) / 2 // foundation overhang per side
const RH = E * ROOF_HEIGHT_RATIO                  // roof apex height above wall top

// Project a 3D world point to screen coords.
// World axes: +x toward back-right, +y toward back-left, +z up.
function project(x: number, y: number, z: number): [number, number] {
  return [
    CX + (x - y) * ISO_COS,
    CY + (x + y) * ISO_SIN - z,
  ]
}

const p = (x: number, y: number, z: number): string => {
  const [sx, sy] = project(x, y, z)
  return `${sx.toFixed(3)},${sy.toFixed(3)}`
}

// Foundation extents in world space
const F_MIN = -FW_DELTA
const F_MAX = E + FW_DELTA
const F_BOT = -FH

// Foundation polygons — three visible faces
const FOUNDATION_TOP = [
  p(F_MIN, F_MIN, 0),
  p(F_MAX, F_MIN, 0),
  p(F_MAX, F_MAX, 0),
  p(F_MIN, F_MAX, 0),
].join(' ')

const FOUNDATION_RIGHT = [
  p(F_MAX, F_MIN, F_BOT),
  p(F_MAX, F_MAX, F_BOT),
  p(F_MAX, F_MAX, 0),
  p(F_MAX, F_MIN, 0),
].join(' ')

const FOUNDATION_LEFT = [
  p(F_MAX, F_MAX, F_BOT),
  p(F_MIN, F_MAX, F_BOT),
  p(F_MIN, F_MAX, 0),
  p(F_MAX, F_MAX, 0),
].join(' ')

// Walls polygons — three visible faces of a unit cube spanning (0,0,0)→(E,E,E)
const WALLS_TOP = [
  p(0, 0, E),
  p(E, 0, E),
  p(E, E, E),
  p(0, E, E),
].join(' ')

const WALLS_RIGHT = [
  p(E, 0, 0),
  p(E, E, 0),
  p(E, E, E),
  p(E, 0, E),
].join(' ')

const WALLS_LEFT = [
  p(E, E, 0),
  p(0, E, 0),
  p(0, E, E),
  p(E, E, E),
].join(' ')

// Roof — pyramid with two visible triangular faces meeting at the front ridge
const ROOF_RIGHT = [
  p(E, 0, E),
  p(E, E, E),
  p(E / 2, E / 2, E + RH),
].join(' ')

const ROOF_LEFT = [
  p(E, E, E),
  p(0, E, E),
  p(E / 2, E / 2, E + RH),
].join(' ')

// ────────────────────────────────────────────────────────────────────────────

type Props = {
  cardRef: RefObject<HTMLElement | null>
  className?: string
}

export function TakeoffIllustration({ cardRef, className }: Props) {
  const reduced = useReducedMotion()

  const cursorX = useMotionValue(0.5)
  const cursorY = useMotionValue(0)

  const roofLiftRaw = useTransform(cursorY, [0, 1], [0, -ROOF_LIFT_MAX])
  const wallsLiftRaw = useTransform(cursorY, [0, 1], [0, -WALLS_LIFT_MAX])
  const foundationLiftRaw = useTransform(cursorY, [0, 1], [0, -FOUNDATION_LIFT_MAX])

  // Counter-translate the whole building by the average lift so the visual
  // center stays put as the pieces separate.
  const centerCompensateRaw = useTransform(
    cursorY,
    [0, 1],
    [0, (ROOF_LIFT_MAX + WALLS_LIFT_MAX + FOUNDATION_LIFT_MAX) / 3],
  )

  const roofLift = useSpring(roofLiftRaw, SPRING)
  const wallsLift = useSpring(wallsLiftRaw, SPRING)
  const foundationLift = useSpring(foundationLiftRaw, SPRING)
  const centerCompensate = useSpring(centerCompensateRaw, SPRING)

  // Tilt: cursor at top-left → top-left tilts toward viewer.
  const tiltXRaw = useTransform(cursorY, [0, 1], [-TILT_MAX_DEG, TILT_MAX_DEG])
  const tiltYRaw = useTransform(cursorX, [0, 1], [TILT_MAX_DEG, -TILT_MAX_DEG])
  const tiltX = useSpring(tiltXRaw, SPRING)
  const tiltY = useSpring(tiltYRaw, SPRING)

  useEffect(() => {
    if (reduced) return
    const card = cardRef.current
    if (!card) return

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect()
      cursorX.set((e.clientX - rect.left) / rect.width)
      cursorY.set((e.clientY - rect.top) / rect.height)
    }
    const handleLeave = () => {
      cursorX.set(0.5)
      cursorY.set(0)
    }

    card.addEventListener('mousemove', handleMove)
    card.addEventListener('mouseleave', handleLeave)
    return () => {
      card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [cardRef, cursorX, cursorY, reduced])

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
          <motion.g style={reduced ? undefined : { y: centerCompensate }}>
            <motion.g style={reduced ? undefined : { y: foundationLift }}>
              <polygon points={FOUNDATION_TOP} {...polygonProps} />
              <polygon points={FOUNDATION_LEFT} {...polygonProps} />
              <polygon points={FOUNDATION_RIGHT} {...polygonProps} />
            </motion.g>
            <motion.g style={reduced ? undefined : { y: wallsLift }}>
              <polygon points={WALLS_LEFT} {...polygonProps} />
              <polygon points={WALLS_RIGHT} {...polygonProps} />
              <polygon points={WALLS_TOP} {...polygonProps} />
            </motion.g>
            <motion.g style={reduced ? undefined : { y: roofLift }}>
              <polygon points={ROOF_LEFT} {...polygonProps} />
              <polygon points={ROOF_RIGHT} {...polygonProps} />
            </motion.g>
          </motion.g>
        </svg>
      </motion.div>
    </div>
  )
}
