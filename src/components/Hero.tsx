import { useTextScramble } from '../hooks/useTextScramble'
import { motion } from 'framer-motion'

export function Hero() {
  const line1 = useTextScramble('AI-Native Product Designer')
  const line2 = useTextScramble('& Builder')

  return (
    <section id="hero" aria-label="Hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="status-badge">
            <span className="status-dot"></span>
            Open to new roles · Lead Product Designer
          </div>
        </motion.div>

        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {line1}<br />
          {/* No purple — weight and size carry this */}
          <span className="line2">{line2}</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Built and launched AI products solo. Led enterprise UX at NTT Data and P&G.
        </motion.p>

        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {/* Primary CTA — only purple element on homepage */}
          <a
            href="#work"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View My Work
          </a>
          {/* Secondary — plain text link */}
          <a
            href="#contact"
            className="btn-ghost-hero"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
