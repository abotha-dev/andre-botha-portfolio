import { motion } from 'framer-motion'
import { WireframeAgentBuild } from './wireframes/WireframeAgentBuild'

// ─── Word-by-word blur + fade reveal (Linear-style) ──────────────────────────
// Each word materialises from a blurred/offset state with a staggered delay.
// Transition is computed per-word inline to avoid Framer TS strict-typing issues.

function BlurWords({
  text,
  startIndex = 0,
  className,
}: {
  text: string
  startIndex?: number
  className?: string
}) {
  const words = text.split(' ')

  return (
    <span className={className} style={{ display: 'inline' }}>
      {words.map((word, i) => {
        const delay = (startIndex + i) * 0.08 + 0.3
        return (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, filter: 'blur(10px)', y: 14 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{
              duration: 0.6,
              delay,
              ease: 'easeOut',
            }}
            style={{ display: 'inline-block', marginRight: '0.26em' }}
          >
            {word}
          </motion.span>
        )
      })}
    </span>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

const LINE1 = 'AI-Native Product Designer'  // 4 words
const LINE2 = '& Builder'                    // 2 words
const LINE1_WORD_COUNT = LINE1.split(' ').length
const TOTAL_WORDS = LINE1_WORD_COUNT + LINE2.split(' ').length

// Delay after last word: (TOTAL_WORDS - 1) * 0.08 + 0.3 + 0.6
const POST_HEADLINE_DELAY = (TOTAL_WORDS - 1) * 0.08 + 0.3 + 0.6

export function Hero() {
  return (
    <section id="hero" aria-label="Hero">
      <div className="hero-content">

        {/* Name byline — arrives first */}
        <motion.div
          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.4, delay: 0.0, ease: 'easeOut' }}
          className="hero-byline"
        >
          Andre Botha
        </motion.div>

        {/* Status badge — arrives next */}
        <motion.div
          initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="status-badge">
            <span className="status-dot"></span>
            Open to new roles · Lead Product Designer
          </div>
        </motion.div>

        {/* Headline — word-by-word blur reveal */}
        <h1 className="hero-headline">
          <BlurWords text={LINE1} startIndex={0} />
          <br />
          <BlurWords text={LINE2} startIndex={LINE1_WORD_COUNT} className="line2" />
        </h1>

        {/* Subtext — appears after headline crystallises */}
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.55, delay: POST_HEADLINE_DELAY + 0.05, ease: 'easeOut' }}
        >
          Built and launched AI products solo. Led enterprise UX at NTT Data and P&G.
        </motion.p>

        {/* CTAs — settle in last */}
        <motion.div
          className="hero-ctas"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: POST_HEADLINE_DELAY + 0.3, ease: 'easeOut' }}
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

        {/* Right-side wireframe accent */}
        <motion.div
          className="hero-wireframe"
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.0, delay: 0.8, ease: 'easeOut' }}
          aria-hidden="true"
        >
          <div className="hero-wireframe-bg" />
          <div className="hero-wireframe-svg">
            <WireframeAgentBuild />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
