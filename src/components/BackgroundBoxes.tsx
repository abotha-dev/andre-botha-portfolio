import React, { useState, useCallback, memo } from 'react'
import { motion } from 'framer-motion'

const ROWS = 30
const COLS = 20

const colors = [
  'rgba(99,102,241,0.3)',   // indigo
  'rgba(129,140,248,0.25)', // indigo-lighter
  'rgba(124,58,237,0.25)',  // violet
  'rgba(99,102,241,0.2)',   // indigo-dim
  'rgba(165,180,252,0.2)',  // indigo-light
  'rgba(79,70,229,0.3)',    // indigo-deep
]

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}

const BoxesCore = memo(function BoxesCore() {
  const [hoveredBox, setHoveredBox] = useState<string | null>(null)

  const handleHover = useCallback((key: string) => {
    setHoveredBox(key)
  }, [])

  return (
    <div
      style={{
        transform: 'translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)',
        position: 'absolute',
        left: '25%',
        top: '-25%',
        padding: '16px',
        display: 'flex',
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    >
      {Array.from({ length: ROWS }).map((_, i) => (
        <div
          key={`row-${i}`}
          style={{
            width: '64px',
            height: '32px',
            borderLeft: '1px solid rgba(99,102,241,0.08)',
            position: 'relative',
          }}
        >
          {Array.from({ length: COLS }).map((_, j) => {
            const key = `${i}-${j}`
            return (
              <motion.div
                key={key}
                onMouseEnter={() => handleHover(key)}
                onMouseLeave={() => setHoveredBox(null)}
                animate={{
                  backgroundColor: hoveredBox === key ? getRandomColor() : 'transparent',
                }}
                transition={{ duration: hoveredBox === key ? 0 : 1.5 }}
                style={{
                  width: '64px',
                  height: '32px',
                  borderRight: '1px solid rgba(99,102,241,0.08)',
                  borderTop: '1px solid rgba(99,102,241,0.08)',
                  position: 'relative',
                }}
              >
                {j % 2 === 0 && i % 2 === 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    style={{
                      position: 'absolute',
                      height: '24px',
                      width: '40px',
                      top: '-14px',
                      left: '-22px',
                      color: 'rgba(99,102,241,0.08)',
                      strokeWidth: '1px',
                      pointerEvents: 'none',
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                )}
              </motion.div>
            )
          })}
        </div>
      ))}
    </div>
  )
})

export function BackgroundBoxes() {
  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
      {/* Radial mask to fade boxes at edges */}
      <div style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(ellipse at 50% 50%, transparent 20%, #0d0d0f 70%)',
        zIndex: 20,
        pointerEvents: 'none',
      }} />
      <BoxesCore />
    </div>
  )
}
