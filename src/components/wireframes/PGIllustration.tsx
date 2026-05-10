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

const SPHERE_R = 48                  // sphere radius (SVG units)
const TOP_CAP_FRAC = 0.25            // top cap is 25% of sphere height
const BOT_CAP_FRAC = 0.25            // bottom cap is 25% of sphere height (middle = 50%)
const PLATFORM_R_RATIO = 1.15        // platform radius / sphere radius
const PLATFORM_H_FRAC = 0.30         // platform height = 30% of sphere diameter
const PERSPECTIVE_RATIO = 0.25       // ellipse ry/rx — flatter caps with smaller values

const FILL = '#111113'               // matches var(--surface) — edges occlude naturally
const STROKE = '#62666D'

const VIEWBOX_W = 400
const VIEWBOX_H = 220
const CX = 200
const CY = 100                       // sphere center vertical position

// ─── INTERACTION CONSTANTS ──────────────────────────────────────────────────

const TOP_CAP_LIFT_MAX = 32          // px upward at full separation
const MIDDLE_LIFT_MAX = 16
const BOTTOM_CAP_LIFT_MAX = 6        // bottom cap floats above platform with a clear gap
const TILT_MAX_DEG = 6
const SPRING = { stiffness: 180, damping: 20 }

// ─── DERIVED GEOMETRY ───────────────────────────────────────────────────────

const R = SPHERE_R

// Top section line: TOP_CAP_FRAC of total height (2R) below the top of the sphere.
// In y coords (sphere center at CY), top of sphere is at CY-R, so:
const TOP_CUT_Y = CY - R + TOP_CAP_FRAC * 2 * R
const BOT_CUT_Y = CY + R - BOT_CAP_FRAC * 2 * R

// Half-widths of the section circles (sphere intersection with horizontal plane)
const TOP_DIST = Math.abs(TOP_CUT_Y - CY)
const BOT_DIST = Math.abs(BOT_CUT_Y - CY)
const TOP_RX = Math.sqrt(R * R - TOP_DIST * TOP_DIST)
const BOT_RX = Math.sqrt(R * R - BOT_DIST * BOT_DIST)
const TOP_RY = TOP_RX * PERSPECTIVE_RATIO
const BOT_RY = BOT_RX * PERSPECTIVE_RATIO

// Platform geometry
const PLATFORM_R = R * PLATFORM_R_RATIO
const PLATFORM_H = 2 * R * PLATFORM_H_FRAC
const PLATFORM_TOP_Y = CY + R           // sphere bottom = platform top
const PLATFORM_BOT_Y = PLATFORM_TOP_Y + PLATFORM_H
const PLATFORM_RY = PLATFORM_R * PERSPECTIVE_RATIO

// SVG paths.
// SVG arc sweep-flag: 0 = CCW visually, 1 = CW visually (in screen coords with +y down).

// Top cap dome arc: from left section endpoint, over the top of the sphere, to right section endpoint.
// Going from 9-o'clock-ish via 12-o'clock to 3-o'clock-ish = CW visually = sweep-flag 1.
const TOP_CAP_PATH =
  `M ${(CX - TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)} ` +
  `A ${R},${R} 0 0 1 ${(CX + TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)}`

// Middle band side arcs.
// Left: upper-left section endpoint via leftmost-point to lower-left. CCW visually = sweep-flag 0.
const MIDDLE_LEFT_PATH =
  `M ${(CX - TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)} ` +
  `A ${R},${R} 0 0 0 ${(CX - BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)}`
// Right: upper-right via rightmost to lower-right. CW = sweep-flag 1.
const MIDDLE_RIGHT_PATH =
  `M ${(CX + TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)} ` +
  `A ${R},${R} 0 0 1 ${(CX + BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)}`

// Bottom cap bowl arc: from left section endpoint via bottom of sphere to right section endpoint.
// CCW visually = sweep-flag 0.
const BOTTOM_CAP_PATH =
  `M ${(CX - BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)} ` +
  `A ${R},${R} 0 0 0 ${(CX + BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)}`

// Platform front-bottom arc (the back is hidden behind the cylinder body).
// From left bottom to right bottom via the front (downward bulge in screen coords).
// CCW visually = sweep-flag 0.
const PLATFORM_FRONT_BOTTOM =
  `M ${(CX - PLATFORM_R).toFixed(3)},${PLATFORM_BOT_Y.toFixed(3)} ` +
  `A ${PLATFORM_R},${PLATFORM_RY} 0 0 0 ${(CX + PLATFORM_R).toFixed(3)},${PLATFORM_BOT_Y.toFixed(3)}`

// Section line front halves — lower arc (bulging downward), CCW = sweep-flag 0.
const TOP_SECTION_FRONT =
  `M ${(CX - TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)} ` +
  `A ${TOP_RX},${TOP_RY} 0 0 0 ${(CX + TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)}`
const BOT_SECTION_FRONT =
  `M ${(CX - BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)} ` +
  `A ${BOT_RX},${BOT_RY} 0 0 0 ${(CX + BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)}`

// Section line back halves — upper arc (bulging upward), CW = sweep-flag 1.
// These are drawn for the middle band's top rim and the bottom cap's top rim.
// When collapsed, the piece above (top cap or middle band) has a bg-filled body
// that sits in this back-half's region and occludes the stroke. When the piece
// above lifts, the back half emerges and the lower piece reads as 3D.
const TOP_SECTION_BACK =
  `M ${(CX - TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)} ` +
  `A ${TOP_RX},${TOP_RY} 0 0 1 ${(CX + TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)}`
const BOT_SECTION_BACK =
  `M ${(CX - BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)} ` +
  `A ${BOT_RX},${BOT_RY} 0 0 1 ${(CX + BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)}`

// Closed filled silhouette bodies — drawn before the strokes with fill = card bg
// and stroke="none" so each segment's body occludes anything behind it
// (e.g. the platform top through the bottom cap's bowl interior).
const TOP_CAP_BODY =
  `M ${(CX - TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)} ` +
  `A ${R},${R} 0 0 1 ${(CX + TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)} Z`
const BOTTOM_CAP_BODY =
  `M ${(CX - BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)} ` +
  `A ${R},${R} 0 0 0 ${(CX + BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)} Z`
const MIDDLE_BODY =
  `M ${(CX - TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)} ` +
  `A ${R},${R} 0 0 0 ${(CX - BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)} ` +
  `L ${(CX + BOT_RX).toFixed(3)},${BOT_CUT_Y.toFixed(3)} ` +
  `A ${R},${R} 0 0 1 ${(CX + TOP_RX).toFixed(3)},${TOP_CUT_Y.toFixed(3)} Z`

// ────────────────────────────────────────────────────────────────────────────

type Props = {
  cardRef: RefObject<HTMLElement | null>
  className?: string
}

export function PGIllustration({ cardRef, className }: Props) {
  const reduced = useReducedMotion()

  const cursorXNorm = useMotionValue(0.5)
  const cursorYNorm = useMotionValue(1)   // rest = 1 (collapsed)

  // Cursor Y = 1 (bottom of card) → collapsed (lift 0)
  // Cursor Y = 0 (top of card) → fully separated (max lift)
  const topCapLiftRaw = useTransform(cursorYNorm, [0, 1], [-TOP_CAP_LIFT_MAX, 0])
  const middleLiftRaw = useTransform(cursorYNorm, [0, 1], [-MIDDLE_LIFT_MAX, 0])
  const bottomCapLiftRaw = useTransform(cursorYNorm, [0, 1], [-BOTTOM_CAP_LIFT_MAX, 0])

  const topCapLift = useSpring(topCapLiftRaw, SPRING)
  const middleLift = useSpring(middleLiftRaw, SPRING)
  const bottomCapLift = useSpring(bottomCapLiftRaw, SPRING)

  // Tilt: cursor at top-left → top-left tilts toward viewer.
  const tiltXRaw = useTransform(cursorYNorm, [0, 1], [-TILT_MAX_DEG, TILT_MAX_DEG])
  const tiltYRaw = useTransform(cursorXNorm, [0, 1], [TILT_MAX_DEG, -TILT_MAX_DEG])
  const tiltX = useSpring(tiltXRaw, SPRING)
  const tiltY = useSpring(tiltYRaw, SPRING)

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
      cursorYNorm.set(1) // back to collapsed
    }

    card.addEventListener('mousemove', handleMove)
    card.addEventListener('mouseleave', handleLeave)
    return () => {
      card.removeEventListener('mousemove', handleMove)
      card.removeEventListener('mouseleave', handleLeave)
    }
  }, [cardRef, cursorXNorm, cursorYNorm, reduced])

  const strokeProps = {
    fill: 'none',
    stroke: STROKE,
    strokeWidth: 1,
    vectorEffect: 'non-scaling-stroke' as const,
  }
  // The platform top is a full ellipse (it's a solid disk top, both halves
  // visible). It uses FILL so its back half occludes anything drawn behind.
  const platformTopProps = {
    fill: FILL,
    stroke: STROKE,
    strokeWidth: 1,
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
          {/* Platform — translateY locked at 0; tilts with the wrapper but does not lift. */}
          <g>
            <ellipse
              cx={CX}
              cy={PLATFORM_BOT_Y}
              rx={PLATFORM_R}
              ry={PLATFORM_RY}
              fill={FILL}
              stroke="none"
            />
            <path d={PLATFORM_FRONT_BOTTOM} {...strokeProps} />
            <line
              x1={CX - PLATFORM_R}
              y1={PLATFORM_TOP_Y}
              x2={CX - PLATFORM_R}
              y2={PLATFORM_BOT_Y}
              {...strokeProps}
            />
            <line
              x1={CX + PLATFORM_R}
              y1={PLATFORM_TOP_Y}
              x2={CX + PLATFORM_R}
              y2={PLATFORM_BOT_Y}
              {...strokeProps}
            />
            <ellipse
              cx={CX}
              cy={PLATFORM_TOP_Y}
              rx={PLATFORM_R}
              ry={PLATFORM_RY}
              {...platformTopProps}
            />
          </g>

          {/* Bottom cap (bowl): solid body + bowl arc + front half of top rim. */}
          <motion.g style={reduced ? undefined : { y: bottomCapLift }}>
            <path d={BOTTOM_CAP_BODY} fill={FILL} stroke="none" />
            <path d={BOTTOM_CAP_PATH} {...strokeProps} />
            <path d={BOT_SECTION_FRONT} {...strokeProps} />
          </motion.g>

          {/* Middle band: solid body + two side arcs + front halves of top + bottom rims. */}
          <motion.g style={reduced ? undefined : { y: middleLift }}>
            <path d={MIDDLE_BODY} fill={FILL} stroke="none" />
            <path d={MIDDLE_LEFT_PATH} {...strokeProps} />
            <path d={MIDDLE_RIGHT_PATH} {...strokeProps} />
            <path d={BOT_SECTION_FRONT} {...strokeProps} />
            <path d={TOP_SECTION_FRONT} {...strokeProps} />
          </motion.g>

          {/* Top cap (dome): solid body + dome arc + front half of bottom rim. */}
          <motion.g style={reduced ? undefined : { y: topCapLift }}>
            <path d={TOP_CAP_BODY} fill={FILL} stroke="none" />
            <path d={TOP_CAP_PATH} {...strokeProps} />
            <path d={TOP_SECTION_FRONT} {...strokeProps} />
          </motion.g>
        </svg>
      </motion.div>
    </div>
  )
}
