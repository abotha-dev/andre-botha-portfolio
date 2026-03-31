import { useFadeUp } from '../hooks/useFadeUp'

interface WorkProps {
  onShowCaseStudy: () => void
  onShowNTTData: () => void
  onShowPG: () => void
  onShowCC: () => void
}

export function Work({ onShowCaseStudy, onShowNTTData, onShowPG, onShowCC }: WorkProps) {
  const label = useFadeUp()
  const heading = useFadeUp()
  const grid = useFadeUp()

  return (
    <section id="work" aria-label="Selected work">
      <div className="container">
        <span ref={label.ref} className={`section-label fade-up${label.visible ? ' visible' : ''}`}>Projects</span>
        <h2 ref={heading.ref} className={`section-heading fade-up${heading.visible ? ' visible' : ''}`}>Selected Work</h2>

        <div ref={grid.ref} className={`projects-grid stagger${grid.visible ? ' visible' : ''}`}>

          {/* 1. Takeoff.ai — FEATURED */}
          <a href="#" className="project-card featured" onClick={(e) => { e.preventDefault(); onShowCaseStudy() }} aria-label="View Takeoff.ai case study">
            <div className="card-image">
              <img src="/assets/takeoff/thumbnail.webp" alt="Takeoff.ai" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Takeoff.ai</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">AI-powered construction estimating SaaS — conceived, designed, and shipped solo in 4 weeks. Live product, pre-revenue validation.</p>
              <div className="card-tags">
                <span className="tag accent">AI</span>
                <span className="tag accent">Founder</span>
                <span className="tag">Full-Stack</span>
                <span className="tag">SaaS</span>
              </div>
            </div>
          </a>

          {/* 2. NTT Data */}
          <a href="#" className="project-card" onClick={(e) => { e.preventDefault(); onShowNTTData() }} aria-label="View NTT Data case study">
            <div className="card-image">
              <img src="/assets/ntt-data/thumbnail.webp" alt="Healio — NTT Data" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Healio — NTT Data</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">Conversational AI agent replacing 5 fragmented healthcare portals. Onboarding, symptom triage, provider matching, insurance verification, and booking — one conversation.</p>
              <div className="card-tags">
                <span className="tag accent">AI Agent</span>
                <span className="tag accent">Healthcare</span>
                <span className="tag">Enterprise</span>
              </div>
            </div>
          </a>

          {/* 3. P&G */}
          <a href="#" className="project-card" onClick={(e) => { e.preventDefault(); onShowPG() }} aria-label="View P&G Olay case study">
            <div className="card-image">
              <img src="/assets/pg/thumbnail.webp" alt="Procter &amp; Gamble" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Procter &amp; Gamble</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">Enterprise UX strategy and research for Fortune 500 consumer goods operations at global scale.</p>
              <div className="card-tags">
                <span className="tag">Enterprise</span>
                <span className="tag">UX Research</span>
              </div>
            </div>
          </a>

          {/* 4. Credit Connection */}
          <a href="#" className="project-card" onClick={(e) => { e.preventDefault(); onShowCC() }} aria-label="View Credit Connection case study">
            <div className="card-image">
              <img src="/assets/credit-connection/thumbnail.webp" alt="Credit Connection" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Credit Connection</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">Fintech mobile app for credit building and financial access for underserved communities.</p>
              <div className="card-tags">
                <span className="tag">Fintech</span>
                <span className="tag">Mobile</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
