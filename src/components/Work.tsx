import { useFadeUp } from '../hooks/useFadeUp'

interface WorkProps {
  onShowCaseStudy: () => void
  onShowNTTData: () => void
  onShowPG: () => void
  onShowCC: () => void
  onShowAIPortfolio: () => void
}

export function Work({ onShowCaseStudy, onShowNTTData, onShowPG, onShowCC, onShowAIPortfolio }: WorkProps) {
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
          <div style={{ gridColumn: '1 / -1', marginBottom: '-8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-2)' }}>Featured Project</span>
          </div>
          <a href="#" className="project-card featured" onClick={(e) => { e.preventDefault(); onShowCaseStudy() }} aria-label="View Takeoff.ai case study">
            <div className="card-image">
              <img src="/assets/takeoff/thumbnail.webp" loading="lazy" width="3200" height="1800" alt="Takeoff.ai" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Takeoff.ai</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">AI-powered construction estimator — conceived, designed, and shipped solo in 4 weeks. Live product built end-to-end with Cursor, Claude, Supabase, and Vercel.</p>
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
              <img src="/assets/ntt-data/thumbnail.webp" loading="lazy" width="3200" height="1800" alt="Healio — NTT Data" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Healio — NTT Data</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">Replaced 5 fragmented healthcare portals with one AI conversation. Led 50+ screens of agentic UX for onboarding, symptom triage, insurance verification, and booking at NTT Data.</p>
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
              <img src="/assets/pg/thumbnail.webp" loading="lazy" width="3200" height="1800" alt="Procter &amp; Gamble" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Procter &amp; Gamble</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">Led UX strategy for digital commerce at P&G — delivered a 7.6% checkout conversion lift and $100K+/month in measurable revenue contribution.</p>
              <div className="card-tags">
                <span className="tag">Enterprise</span>
                <span className="tag">UX Research</span>
              </div>
            </div>
          </a>

          {/* 4. Credit Connection */}
          <a href="#" className="project-card" onClick={(e) => { e.preventDefault(); onShowCC() }} aria-label="View Credit Connection case study">
            <div className="card-image">
              <img src="/assets/credit-connection/thumbnail.webp" loading="lazy" width="3200" height="1800" alt="Credit Connection" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Credit Connection</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">Designed a fintech mobile app for credit building and financial access in underserved communities — from 0 to shipped.</p>
              <div className="card-tags">
                <span className="tag">Fintech</span>
                <span className="tag">Mobile</span>
              </div>
            </div>
          </a>

          {/* 5. AI Portfolio Build — Meta */}
          <a href="#" className="project-card" onClick={(e) => { e.preventDefault(); onShowAIPortfolio() }} aria-label="View AI Portfolio Build case study">
            <div className="card-image" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.15) 50%, rgba(15,15,25,0.95) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '3rem' }}>🦾</span>
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">AI Agent Build Process</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">How I built this portfolio using an AI agent team — Rex, Dev Agent, and Content Agent running 24/7. Design intent to production code with zero human handoffs.</p>
              <div className="card-tags">
                <span className="tag accent">AI Agents</span>
                <span className="tag accent">OpenClaw</span>
                <span className="tag">Meta</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
