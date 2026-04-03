import { Suspense, lazy, useState, useEffect } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

/**
 * Deferred Spline 3D background  -  loads only after the main page paint
 * to avoid competing with hero entrance animations on the main thread.
 */
export function SplineBackground() {
  const [ready, setReady] = useState(false)

  // Defer Spline mount until after initial paint + entrance animations
  useEffect(() => {
    const hasIdleCallback = typeof requestIdleCallback === 'function'
    if (hasIdleCallback) {
      const id = requestIdleCallback(() => setReady(true), { timeout: 1500 })
      return () => cancelIdleCallback(id)
    } else {
      const id = window.setTimeout(() => setReady(true), 1200)
      return () => clearTimeout(id)
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0,
        willChange: 'transform',
        contain: 'strict',
      }}
    >
      {ready && (
        <Suspense fallback={
          <div style={{
            width: '100%',
            height: '100%',
            background: '#0d0d0f',
          }} />
        }>
          <Spline
            style={{
              width: '100%',
              height: '100%',
            }}
            scene="https://prod.spline.design/dJqTIQ-tE3ULUPMi/scene.splinecode"
          />
        </Suspense>
      )}
      {/* Dark gradient overlay  -  left side for text readability */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />
      {/* Bottom fade into page background */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '150px',
          background: 'linear-gradient(to top, #0d0d0f, transparent)',
          pointerEvents: 'none',
        }}
      />
      {/* Cover the Spline watermark (canvas-rendered, not a DOM element) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '200px',
          height: '48px',
          background: '#0d0d0f',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}
