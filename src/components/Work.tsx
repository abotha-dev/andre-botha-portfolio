import { useFadeUp } from '../hooks/useFadeUp'

interface WorkProps {
  onShowCaseStudy: () => void
  onShowNTTData: () => void
  onShowPG: () => void
  onShowCC: () => void
  onShowAIPortfolio: () => void
}

// ─── SVG WIREFRAME COMPONENTS ───────────────────────────────────────────────
// Each hints at the product type without being representational.
// Lines are driven by currentColor so hover transition works via CSS.

function WireframeDashboard() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="wf-lines" aria-hidden="true">
      {/* KPI tiles row */}
      <rect x="16" y="16" width="82" height="48" rx="4" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="110" y="16" width="82" height="48" rx="4" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="204" y="16" width="82" height="48" rx="4" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="298" y="16" width="86" height="48" rx="4" stroke="currentColor" strokeWidth="1.2"/>
      {/* Metric line inside KPI tiles */}
      <line x1="26" y1="40" x2="68" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="120" y1="40" x2="148" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="214" y1="40" x2="258" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="308" y1="40" x2="344" y2="40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Chart area */}
      <rect x="16" y="80" width="232" height="124" rx="4" stroke="currentColor" strokeWidth="1.2"/>
      {/* Chart bars */}
      <rect x="36" y="148" width="18" height="40" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="62" y="130" width="18" height="58" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="88" y="116" width="18" height="72" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="114" y="124" width="18" height="64" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="140" y="100" width="18" height="88" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="166" y="108" width="18" height="80" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="192" y="92" width="18" height="96" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      {/* Baseline */}
      <line x1="26" y1="188" x2="238" y2="188" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.5"/>
      {/* Side panel */}
      <rect x="264" y="80" width="120" height="56" rx="4" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="264" y="148" width="120" height="56" rx="4" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="278" y1="100" x2="320" y2="100" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="278" y1="114" x2="346" y2="114" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      <line x1="278" y1="168" x2="330" y2="168" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="278" y1="182" x2="358" y2="182" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
    </svg>
  )
}

function WireframeHealthcareAgent() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="wf-lines" aria-hidden="true">
      {/* Top nav bar */}
      <rect x="0" y="0" width="400" height="36" stroke="currentColor" strokeWidth="0" fill="currentColor" fillOpacity="0.04"/>
      <line x1="0" y1="36" x2="400" y2="36" stroke="currentColor" strokeWidth="0.8"/>
      <circle cx="20" cy="18" r="8" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="40" y1="18" x2="100" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Chat bubbles — user */}
      <rect x="180" y="52" width="180" height="32" rx="8" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="196" y1="64" x2="280" y2="64" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="196" y1="74" x2="248" y2="74" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      {/* Agent bubble */}
      <rect x="20" y="100" width="220" height="48" rx="8" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="36" y1="114" x2="190" y2="114" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="36" y1="126" x2="160" y2="126" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      <line x1="36" y1="138" x2="130" y2="138" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      {/* Card result */}
      <rect x="20" y="164" width="140" height="42" rx="6" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="34" y1="178" x2="110" y2="178" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="34" y1="190" x2="90" y2="190" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      {/* Input bar */}
      <rect x="20" y="196" width="320" height="20" rx="10" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    </svg>
  )
}

function WireframeEcommerce() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="wf-lines" aria-hidden="true">
      {/* Browser chrome */}
      <rect x="8" y="8" width="384" height="204" rx="6" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="8" y1="32" x2="392" y2="32" stroke="currentColor" strokeWidth="0.8"/>
      <circle cx="24" cy="20" r="4" stroke="currentColor" strokeWidth="1"/>
      <circle cx="38" cy="20" r="4" stroke="currentColor" strokeWidth="1"/>
      <circle cx="52" cy="20" r="4" stroke="currentColor" strokeWidth="1"/>
      <rect x="80" y="13" width="240" height="14" rx="7" stroke="currentColor" strokeWidth="0.8"/>
      {/* Product grid */}
      <rect x="24" y="46" width="108" height="80" rx="4" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="146" y="46" width="108" height="80" rx="4" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="268" y="46" width="108" height="80" rx="4" stroke="currentColor" strokeWidth="1.2"/>
      {/* Product labels */}
      <line x1="32" y1="138" x2="96" y2="138" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="32" y1="148" x2="76" y2="148" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      <line x1="154" y1="138" x2="218" y2="138" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="154" y1="148" x2="200" y2="148" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      <line x1="276" y1="138" x2="340" y2="138" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="276" y1="148" x2="322" y2="148" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      {/* Cart / CTA bar */}
      <rect x="24" y="166" width="352" height="28" rx="5" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="40" y1="180" x2="120" y2="180" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function WireframeMobileApp() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="wf-lines" aria-hidden="true">
      {/* Phone outline */}
      <rect x="130" y="10" width="140" height="200" rx="16" stroke="currentColor" strokeWidth="1.5"/>
      {/* Status bar */}
      <line x1="146" y1="30" x2="254" y2="30" stroke="currentColor" strokeWidth="0.8" opacity="0.5"/>
      {/* Notch */}
      <rect x="168" y="14" width="64" height="10" rx="5" stroke="currentColor" strokeWidth="0.8"/>
      {/* Content cards */}
      <rect x="146" y="46" width="108" height="52" rx="6" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="158" y1="60" x2="222" y2="60" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="158" y1="70" x2="200" y2="70" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      <line x1="158" y1="80" x2="240" y2="80" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
      {/* Second card */}
      <rect x="146" y="108" width="108" height="52" rx="6" stroke="currentColor" strokeWidth="1.2"/>
      <line x1="158" y1="122" x2="234" y2="122" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="158" y1="132" x2="208" y2="132" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.6"/>
      <line x1="158" y1="142" x2="220" y2="142" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
      {/* Bottom nav */}
      <line x1="146" y1="182" x2="254" y2="182" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
      <circle cx="170" cy="196" r="5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="200" cy="196" r="5" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="230" cy="196" r="5" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}

function WireframeAgentBuild() {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="wf-lines" aria-hidden="true">
      {/* Node graph / agent topology */}
      {/* Central node */}
      <circle cx="200" cy="110" r="20" stroke="currentColor" strokeWidth="1.5"/>
      {/* Satellite nodes */}
      <circle cx="80" cy="60" r="12" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="320" cy="60" r="12" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="60" cy="160" r="12" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="340" cy="160" r="12" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="200" cy="196" r="10" stroke="currentColor" strokeWidth="1.2"/>
      {/* Connections */}
      <line x1="92" y1="66" x2="183" y2="97" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 3"/>
      <line x1="308" y1="66" x2="217" y2="97" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 3"/>
      <line x1="71" y1="152" x2="183" y2="123" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 3"/>
      <line x1="329" y1="152" x2="217" y2="123" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 3"/>
      <line x1="200" y1="130" x2="200" y2="186" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 3"/>
      {/* Labels under nodes */}
      <line x1="56" y1="78" x2="104" y2="78" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      <line x1="296" y1="78" x2="344" y2="78" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
    </svg>
  )
}

// ────────────────────────────────────────────────────────────────────────────

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
          <a
            href="#"
            className="project-card featured"
            onClick={(e) => { e.preventDefault(); onShowCaseStudy() }}
            aria-label="View Takeoff.ai case study"
          >
            <div className="card-wireframe">
              <WireframeDashboard />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Takeoff.ai</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">AI-powered construction estimator — conceived, designed, and shipped solo in 4 weeks.</p>
              <div className="card-tags">
                <span className="tag">AI</span>
                <span className="tag">Founder</span>
                <span className="tag">Full-Stack</span>
                <span className="tag">SaaS</span>
              </div>
            </div>
          </a>

          {/* 2. NTT Data */}
          <a
            href="#"
            className="project-card"
            onClick={(e) => { e.preventDefault(); onShowNTTData() }}
            aria-label="View NTT Data case study"
          >
            <div className="card-wireframe">
              <WireframeHealthcareAgent />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Healio — NTT Data</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">Replaced 5 fragmented healthcare portals with one AI conversation. 50+ screens of agentic UX.</p>
              <div className="card-tags">
                <span className="tag">AI Agent</span>
                <span className="tag">Healthcare</span>
                <span className="tag">Enterprise</span>
              </div>
            </div>
          </a>

          {/* 3. P&G */}
          <a
            href="#"
            className="project-card"
            onClick={(e) => { e.preventDefault(); onShowPG() }}
            aria-label="View P&G Olay case study"
          >
            <div className="card-wireframe">
              <WireframeEcommerce />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Procter &amp; Gamble</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">7.6% checkout conversion lift and $100K+/month revenue contribution at P&G digital commerce.</p>
              <div className="card-tags">
                <span className="tag">Enterprise</span>
                <span className="tag">UX Research</span>
              </div>
            </div>
          </a>

          {/* 4. Credit Connection */}
          <a
            href="#"
            className="project-card"
            onClick={(e) => { e.preventDefault(); onShowCC() }}
            aria-label="View Credit Connection case study"
          >
            <div className="card-wireframe">
              <WireframeMobileApp />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">Credit Connection</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">Fintech mobile app for credit building and financial access in underserved communities — 0 to shipped.</p>
              <div className="card-tags">
                <span className="tag">Fintech</span>
                <span className="tag">Mobile</span>
              </div>
            </div>
          </a>

          {/* 5. AI Portfolio Build — Meta */}
          <a
            href="#"
            className="project-card"
            onClick={(e) => { e.preventDefault(); onShowAIPortfolio() }}
            aria-label="View AI Portfolio Build case study"
          >
            <div className="card-wireframe">
              <WireframeAgentBuild />
            </div>
            <div className="card-body">
              <div className="card-header">
                <h3 className="card-title">AI Agent Build Process</h3>
                <span className="card-arrow">→</span>
              </div>
              <p className="card-desc">How I built this portfolio using an AI agent team — design intent to production with zero human handoffs.</p>
              <div className="card-tags">
                <span className="tag">AI Agents</span>
                <span className="tag">Meta</span>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  )
}
