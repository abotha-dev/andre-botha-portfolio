import { useTextScramble } from '../hooks/useTextScramble'
import { motion } from 'framer-motion'
import { SplineBackground } from './SplineBackground'

export function Hero() {
  const line1 = useTextScramble('AI-Native Product Designer')
  const line2 = useTextScramble('& Builder')

  return (
    <section
      id="hero"
      aria-label="Hero"
    >
      {/* 3D Spline background — deferred mount to avoid main-thread competition */}
      <SplineBackground />

      <div className="hero-content" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="status-badge">
            <span className="status-dot"></span>
            Open to new roles · Senior Product Designer
          </div>
        </motion.div>

        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {line1}<br />
          <span className="line2">{line2}</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          I design and build AI products end-to-end — from concept to shipped SaaS.
          Currently focused on AI tooling, fintech, and enterprise software.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a href="#work" className="btn-primary" style={{ pointerEvents: 'auto' }} onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}>View My Work</a>
          <a href="#contact" className="btn-ghost-hero" style={{ pointerEvents: 'auto' }} onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>Get in Touch</a>
        </motion.div>
      </div>
      <div className="scroll-indicator" aria-hidden="true">
        <div className="chevron"></div>
      </div>
    </section>
  )
}
