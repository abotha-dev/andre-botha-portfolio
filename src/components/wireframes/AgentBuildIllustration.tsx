import { useEffect, useRef, type RefObject } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'framer-motion'

// ─── GEOMETRY CONSTANTS ─────────────────────────────────────────────────────
// Tweak proportions by editing the numbers in this block; every coordinate
// downstream is derived from these.

const ISO_COS = Math.cos(Math.PI / 6) // 0.866 — true 30° iso projection
const ISO_SIN = Math.sin(Math.PI / 6) // 0.5

const SUB_EDGE = 36                   // sub-cube edge (SVG units)
const GAP = 0                         // assembled gap between sub-cubes (px in world)

const FILL = '#111113'                // matches var(--surface) — edges occlude naturally
const STROKE = '#62666D'

const VIEWBOX_W = 400
const VIEWBOX_H = 220
const CX = 200
const CY = 110

// ─── INTERACTION CONSTANTS ──────────────────────────────────────────────────

const MAX_EXTRACT = 24                // px max extraction at zero distance
const FALLOFF_RADIUS = 70             // px — distance at which falloff ≈ e^-1
const RESTING_OFFSET = 7              // hint offset for the front sub-cube
const TILT_MAX_DEG = 6
const SPRING = { stiffness: 180, damping: 20 }

// ─── DERIVED GEOMETRY ───────────────────────────────────────────────────────

const CELL = SUB_EDGE + GAP            // distance between adjacent sub-cube origins

// World axes: +x toward back-right, +y toward back-left, +z up.
function project(x: number, y: number, z: number): [number, number] {
  return [(x - y) * ISO_COS, (x + y) * ISO_SIN - z]
}

// Structure spans world (0,0,0)→(2*CELL,2*CELL,2*CELL). Center at (CELL,CELL,CELL).
const [SCX, SCY] = project(CELL, CELL, CELL)
const OFFSET_X = CX - SCX
const OFFSET_Y = CY - SCY

const screen = (wx: number, wy: number, wz: number): [number, number] => {
  const [px, py] = project(wx, wy, wz)
  return [px + OFFSET_X, py + OFFSET_Y]
}

const polyStr = (...pts: Array<[number, number]>): string =>
  pts.map(([x, y]) => `${x.toFixed(3)},${y.toFixed(3)}`).join(' ')

type SubCubeData = {
  i: number
  j: number
  k: number
  top: string
  right: string
  left: string
  centerScreen: [number, number]
  radialUnit: [number, number] // unit vector in screen coords from structure center to sub-cube center
}

function buildSubCube(i: number, j: number, k: number): SubCubeData {
  const x0 = i * CELL
  const y0 = j * CELL
  const z0 = k * CELL
  const x1 = x0 + SUB_EDGE
  const y1 = y0 + SUB_EDGE
  const z1 = z0 + SUB_EDGE

  // Three iso-visible faces of a unit cube
  const top = polyStr(
    screen(x0, y0, z1),
    screen(x1, y0, z1),
    screen(x1, y1, z1),
    screen(x0, y1, z1),
  )
  const right = polyStr(
    screen(x1, y0, z0),
    screen(x1, y1, z0),
    screen(x1, y1, z1),
    screen(x1, y0, z1),
  )
  const left = polyStr(
    screen(x1, y1, z0),
    screen(x0, y1, z0),
    screen(x0, y1, z1),
    screen(x1, y1, z1),
  )

  const centerScreen = screen(x0 + SUB_EDGE / 2, y0 + SUB_EDGE / 2, z0 + SUB_EDGE / 2)
  const dx = centerScreen[0] - CX
  const dy = centerScreen[1] - CY
  const mag = Math.hypot(dx, dy)
  // (0,0,0) and (1,1,1) project to the structure center in iso — radialUnit = (0,0).
  const radialUnit: [number, number] = mag > 0.001 ? [dx / mag, dy / mag] : [0, 0]

  return { i, j, k, top, right, left, centerScreen, radialUnit }
}

// All 8 sub-cubes, painter's order: ascending i+j+k (back to front)
const SUB_CUBES: SubCubeData[] = []
for (let i = 0; i <= 1; i++) {
  for (let j = 0; j <= 1; j++) {
    for (let k = 0; k <= 1; k++) {
      SUB_CUBES.push(buildSubCube(i, j, k))
    }
  }
}
SUB_CUBES.sort((a, b) => a.i + a.j + a.k - (b.i + b.j + b.k))

// Hint cube: front-bottom (i=1, j=1, k=0) — visually closest to viewer in iso projection.
const isHintCube = (s: SubCubeData) => s.i === 1 && s.j === 1 && s.k === 0

// ────────────────────────────────────────────────────────────────────────────

type Props = {
  cardRef: RefObject<HTMLElement | null>
  className?: string
}

export function AgentBuildIllustration({ cardRef, className }: Props) {
  const reduced = useReducedMotion()
  const svgRef = useRef<SVGSVGElement>(null)

  // Cursor in SVG viewBox coordinates. Default "neutral far" puts cursor far
  // outside the structure so all falloffs read ~0 at rest.
  const NEUTRAL_FAR = -1000
  const cursorXSvg = useMotionValue(NEUTRAL_FAR)
  const cursorYSvg = useMotionValue(NEUTRAL_FAR)

  // Cursor normalized within card (0..1) — drives tilt only.
  const cursorXNorm = useMotionValue(0.5)
  const cursorYNorm = useMotionValue(0.5)

  const tiltXRaw = useTransform(cursorYNorm, [0, 1], [-TILT_MAX_DEG, TILT_MAX_DEG])
  const tiltYRaw = useTransform(cursorXNorm, [0, 1], [TILT_MAX_DEG, -TILT_MAX_DEG])
  const tiltX = useSpring(tiltXRaw, SPRING)
  const tiltY = useSpring(tiltYRaw, SPRING)

  // Per-sub-cube extraction springs. Hooks called in fixed order over an array
  // of length 8 — stable across renders.
  const extractions = SUB_CUBES.map((sc) => {
    const restX = isHintCube(sc) ? sc.radialUnit[0] * RESTING_OFFSET : 0
    const restY = isHintCube(sc) ? sc.radialUnit[1] * RESTING_OFFSET : 0

    const tx = useTransform<number, number>(
      [cursorXSvg, cursorYSvg],
      ([cx, cy]) => {
        const dx = cx - sc.centerScreen[0]
        const dy = cy - sc.centerScreen[1]
        const falloff = Math.exp(-(dx * dx + dy * dy) / (FALLOFF_RADIUS * FALLOFF_RADIUS))
        return restX + sc.radialUnit[0] * MAX_EXTRACT * falloff
      },
    )
    const ty = useTransform<number, number>(
      [cursorXSvg, cursorYSvg],
      ([cx, cy]) => {
        const dx = cx - sc.centerScreen[0]
        const dy = cy - sc.centerScreen[1]
        const falloff = Math.exp(-(dx * dx + dy * dy) / (FALLOFF_RADIUS * FALLOFF_RADIUS))
        return restY + sc.radialUnit[1] * MAX_EXTRACT * falloff
      },
    )
    return {
      tx: useSpring(tx, SPRING) as MotionValue<number>,
      ty: useSpring(ty, SPRING) as MotionValue<number>,
    }
  })

  useEffect(() => {
    if (reduced) return
    const card = cardRef.current
    const svg = svgRef.current
    if (!card || !svg) return

    const handleMove = (e: MouseEvent) => {
      const cardRect = card.getBoundingClientRect()
      cursorXNorm.set((e.clientX - cardRect.left) / cardRect.width)
      cursorYNorm.set((e.clientY - cardRect.top) / cardRect.height)

      // Convert client coords → viewBox coords, accounting for
      // preserveAspectRatio="xMidYMid meet" letterboxing.
      const r = svg.getBoundingClientRect()
      const containerAspect = r.width / r.height
      const viewBoxAspect = VIEWBOX_W / VIEWBOX_H
      let scale: number
      let offsetX = 0
      let offsetY = 0
      if (containerAspect > viewBoxAspect) {
        scale = r.height / VIEWBOX_H
        offsetX = (r.width - VIEWBOX_W * scale) / 2
      } else {
        scale = r.width / VIEWBOX_W
        offsetY = (r.height - VIEWBOX_H * scale) / 2
      }
      cursorXSvg.set((e.clientX - r.left - offsetX) / scale)
      cursorYSvg.set((e.clientY - r.top - offsetY) / scale)
    }
    const handleLeave = () => {
      cursorXNorm.set(0.5)
      cursorYNorm.set(0.5)
      cursorXSvg.set(NEUTRAL_FAR)
      cursorYSvg.set(NEUTRAL_FAR)
    }

    card.addEventListener('mousemove', handleMove)
    card.addEventListener('mouseleave', handleLeave)
    return () => {
      card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [cardRef, cursorXNorm, cursorYNorm, cursorXSvg, cursorYSvg, reduced])

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
          ref={svgRef}
          viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
          preserveAspectRatio="xMidYMid meet"
          width="100%"
          height="100%"
          aria-hidden="true"
        >
          {SUB_CUBES.map((sc, idx) => {
            const { tx, ty } = extractions[idx]
            const reducedRest = reduced
              ? {
                  x: isHintCube(sc) ? sc.radialUnit[0] * RESTING_OFFSET : 0,
                  y: isHintCube(sc) ? sc.radialUnit[1] * RESTING_OFFSET : 0,
                }
              : undefined
            return (
              <motion.g
                key={`${sc.i}${sc.j}${sc.k}`}
                style={reduced ? reducedRest : { x: tx, y: ty }}
              >
                <polygon points={sc.left} {...polygonProps} />
                <polygon points={sc.right} {...polygonProps} />
                <polygon points={sc.top} {...polygonProps} />
              </motion.g>
            )
          })}
        </svg>
      </motion.div>
    </div>
  )
}
