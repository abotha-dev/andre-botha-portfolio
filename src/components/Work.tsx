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
              <img src="/assets/takeoff/thumbnail.png" alt="Takeoff.ai" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
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

          {/* 2. AI Fitness App */}
          <div className="project-card" aria-label="AI Fitness App — case study coming soon">
            <div className="card-image placeholder-fitness">
              <div className="placeholder-grid"></div>
              <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.2}} viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice">
                <circle cx="200" cy="100" r="60" fill="none" stroke="rgba(34,197,94,0.6)" strokeWidth="1"/>
                <circle cx="200" cy="100" r="48" fill="none" stroke="rgba(34,197,94,0.4)" strokeWidth="0.5"/>
                <path d="M200 60 L200 100 L230 100" fill="none" stroke="rgba(34,197,94,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">AI Fitness App</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">AI-powered personal training platform with adaptive programming and real-time feedback loops.</p>
              <div className="card-tags">
                <span className="tag accent">AI</span>
                <span className="tag">Product</span>
                <span className="tag">Mobile</span>
              </div>
            </div>
            <div className="coming-soon-overlay">
              <span className="coming-soon-label">CASE STUDY COMING SOON</span>
            </div>
          </div>

          {/* 3. NTT Data */}
          <a href="#" className="project-card" onClick={(e) => { e.preventDefault(); onShowNTTData() }} aria-label="View NTT Data case study">
            <div className="card-image">
              <img src="/assets/ntt-data/thumbnail.png" alt="Healio — NTT Data" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
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

          {/* 4. P&G */}
          <a href="#" className="project-card" onClick={(e) => { e.preventDefault(); onShowPG() }} aria-label="View P&G Olay case study">
            <div className="card-image">
              <img src="/assets/pg/thumbnail.png" alt="Procter &amp; Gamble" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
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

          {/* 5. Credit Connection */}
          <a href="#" className="project-card" onClick={(e) => { e.preventDefault(); onShowCC() }} aria-label="View Credit Connection case study">
            <div className="card-image">
              <img src="/assets/credit-connection/thumbnail.png" alt="Credit Connection" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
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
