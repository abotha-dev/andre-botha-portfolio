interface NTTDataCaseStudyProps {
  onBack: () => void
}

export function NTTDataCaseStudy({ onBack }: NTTDataCaseStudyProps) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '80px' }}>
      <div className="container">
        <button className="back-btn" onClick={onBack} aria-label="Back to portfolio">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2 L4 7 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Work
        </button>
      </div>

      {/* Hero */}
      <div className="cs-hero">
        <div className="container">
          <span className="cs-label">Case Study · Healthcare · Enterprise Platforms</span>
          <h1 className="cs-title">Rebuilding a Fragmented Healthcare<br/>Experience into a Unified Member Platform</h1>
          <p className="cs-subtitle">Led the design of a unified mobile healthcare platform that consolidated fragmented services into a single product vision NTT Data used to pitch enterprise healthcare clients.</p>

          <div className="metadata-table">
            <div className="meta-cell">
              <span className="meta-label">Company</span>
              <div className="meta-value">NTT Data</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Role</span>
              <div className="meta-value">Lead Product Designer</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Tags</span>
              <div className="meta-value" style={{fontSize:'13px'}}>Healthcare<br/>Enterprise Platforms<br/>Mobile · AI-enabled UX</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Status</span>
              <div className="meta-value" style={{display:'flex',alignItems:'center',gap:'8px'}}>
                <span style={{width:'7px',height:'7px',borderRadius:'50%',background:'var(--accent)',flexShrink:0,display:'inline-block'}}></span>
                Strategic Engagement
              </div>
            </div>
          </div>

          {/* Hero placeholder visual */}
          <div style={{marginTop:'48px',borderRadius:'12px',overflow:'hidden',border:'1px solid var(--border)',background:'var(--surface)',aspectRatio:'16/7',position:'relative'}}>
            <div className="placeholder-ntt" style={{position:'absolute',inset:0}}>
              <div className="placeholder-grid"></div>
              {/* Mobile healthcare platform illustration */}
              <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.22}} viewBox="0 0 900 394" preserveAspectRatio="xMidYMid meet">
                {/* Left — nav sidebar */}
                <rect x="80" y="60" width="140" height="280" rx="8" fill="none" stroke="#6366f1" strokeWidth="0.8"/>
                <rect x="92" y="80" width="60" height="6" rx="3" fill="rgba(99,102,241,0.5)"/>
                <rect x="92" y="100" width="100" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
                <rect x="92" y="116" width="80" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
                <rect x="92" y="132" width="90" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
                <rect x="92" y="148" width="70" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
                {/* Divider */}
                <line x1="220" y1="60" x2="220" y2="340" stroke="#6366f1" strokeWidth="0.4"/>
                {/* Center — dashboard */}
                <rect x="240" y="60" width="420" height="280" rx="8" fill="none" stroke="#6366f1" strokeWidth="0.8"/>
                {/* Dashboard header */}
                <rect x="260" y="80" width="140" height="8" rx="4" fill="rgba(99,102,241,0.4)"/>
                <rect x="260" y="100" width="200" height="4" rx="2" fill="rgba(255,255,255,0.1)"/>
                {/* Stats row */}
                <rect x="260" y="124" width="115" height="60" rx="6" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.25)" strokeWidth="0.8"/>
                <rect x="390" y="124" width="115" height="60" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" strokeWidth="0.8"/>
                <rect x="520" y="124" width="115" height="60" rx="6" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.2)" strokeWidth="0.8"/>
                <rect x="272" y="138" width="50" height="8" rx="4" fill="rgba(99,102,241,0.5)"/>
                <rect x="272" y="154" width="80" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
                {/* Chart area */}
                <rect x="260" y="200" width="370" height="100" rx="6" fill="rgba(99,102,241,0.04)" stroke="rgba(99,102,241,0.15)" strokeWidth="0.8"/>
                <polyline points="280,280 320,250 370,260 420,230 470,240 520,210 570,220 610,200" fill="none" stroke="rgba(99,102,241,0.6)" strokeWidth="1.5"/>
                <polyline points="280,280 320,250 370,260 420,230 470,240 520,210 570,220 610,200 610,300 280,300" fill="rgba(99,102,241,0.06)"/>
                {/* Right — mobile frame */}
                <rect x="690" y="50" width="130" height="290" rx="14" fill="none" stroke="#6366f1" strokeWidth="1"/>
                <rect x="700" y="70" width="110" height="250" rx="6" fill="rgba(99,102,241,0.05)"/>
                <rect x="712" y="84" width="60" height="6" rx="3" fill="rgba(99,102,241,0.4)"/>
                <rect x="712" y="100" width="86" height="4" rx="2" fill="rgba(255,255,255,0.08)"/>
                <rect x="712" y="118" width="86" height="36" rx="5" fill="rgba(99,102,241,0.1)" stroke="rgba(99,102,241,0.2)" strokeWidth="0.7"/>
                <rect x="712" y="164" width="86" height="36" rx="5" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.15)" strokeWidth="0.7"/>
                <rect x="712" y="210" width="86" height="36" rx="5" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.15)" strokeWidth="0.7"/>
                <rect x="712" y="260" width="40" height="6" rx="3" fill="rgba(99,102,241,0.3)"/>
                <rect x="762" y="260" width="36" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: The Problem */}
      <div className="cs-section">
        <div className="container">
          <div className="cs-two-col">
            <div>
              <span className="cs-section-number">01</span>
              <h2 className="cs-section-title">The Problem</h2>
              <div className="cs-body">
                <p>Large healthcare systems rarely operate as a single product. They grow through acquisitions, legacy platforms, and disconnected services. The result is a fragmented experience where members must navigate multiple portals, tools, and workflows to accomplish basic tasks such as checking benefits, managing appointments, or understanding their health data.</p>
                <p>The platform NTT Data was working with had exactly this problem. Core services — scheduling, messaging, health tracking, benefits, and care coordination — existed, but they lived across disconnected systems and inconsistent interfaces.</p>
                <p>Members struggled to understand where to go, what actions to take, and how their health information connected across services. From a business perspective, this fragmentation suppressed engagement and limited the platform's ability to deliver proactive care experiences.</p>
                <p>The challenge was to unify these services into a single coherent mobile product without rewriting the entire backend ecosystem that powered them.</p>
              </div>
            </div>
            <div>
              {/* Fragmentation diagram */}
              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'10px',padding:'28px',boxShadow:'inset 0 1px 0 rgba(255,255,255,0.05)'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'11px',color:'var(--text-2)',letterSpacing:'0.1em',marginBottom:'20px',textTransform:'uppercase'}}>Fragmented Platform State</div>
                <div style={{display:'flex',flexDirection:'column',gap:'8px'}}>
                  {[
                    { label: 'Scheduling', status: 'Separate portal', color: '#ef4444' },
                    { label: 'Benefits', status: 'Separate portal', color: '#ef4444' },
                    { label: 'Messaging', status: 'Separate portal', color: '#ef4444' },
                    { label: 'Health Tracking', status: 'Separate portal', color: '#ef4444' },
                    { label: 'Care Coordination', status: 'Separate portal', color: '#ef4444' },
                  ].map(({ label, status, color }) => (
                    <div key={label} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 12px',background:'var(--surface-2)',borderRadius:'6px',border:'1px solid var(--border)'}}>
                      <span style={{fontSize:'13px',color:'var(--text-1)'}}>{label}</span>
                      <span style={{fontFamily:'var(--font-mono)',fontSize:'10px',color,letterSpacing:'0.04em'}}>{status}</span>
                    </div>
                  ))}
                </div>
                <div style={{marginTop:'16px',padding:'12px',borderRadius:'6px',border:'1px dashed rgba(99,102,241,0.35)',background:'rgba(99,102,241,0.04)',textAlign:'center'}}>
                  <span style={{fontFamily:'var(--font-mono)',fontSize:'10px',color:'var(--accent)',letterSpacing:'0.08em'}}>TARGET → Unified member platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: What I Did */}
      <div className="cs-section">
        <div className="container">
          <span className="cs-section-number">02</span>
          <h2 className="cs-section-title">What I Did</h2>
          <div className="cs-two-col">
            <div className="cs-body">
              <p>I led the design of a new mobile experience that consolidated the platform's core services into a single, structured member journey.</p>
              <p>Instead of treating each service as a separate product, I reframed the system around <strong>member goals</strong> — managing health, understanding benefits, communicating with care teams, and staying on track with treatment or wellness plans.</p>
            </div>
            <div className="cs-body">
              <p>I designed a mobile platform that introduced:</p>
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:'12px',marginTop:'32px'}}>
            {[
              { num: '01', title: 'Centralized Health Dashboard', desc: 'Surfaces the most relevant information and actions in one place, replacing scattered portals with a single source of truth.' },
              { num: '02', title: 'Integrated Care Communication', desc: 'Allows members to interact directly with providers through messaging and updates — no portal-switching required.' },
              { num: '03', title: 'Structured Navigation Model', desc: 'Organizes complex healthcare functions into understandable categories built around member intent, not system architecture.' },
              { num: '04', title: 'Contextual Health Insights', desc: 'Translates raw data into meaningful signals members can act on, reducing cognitive overhead and improving health literacy.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="decision-card">
                <span className="decision-number">FEATURE {num}</span>
                <h3 className="decision-title">{title}</h3>
                <p className="decision-body">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Key Decisions */}
      <div className="cs-section">
        <div className="container">
          <span className="cs-section-number">03</span>
          <h2 className="cs-section-title">Key Decisions and Tradeoffs</h2>
          <p style={{fontSize:'17px',color:'var(--text-2)',maxWidth:'600px',marginBottom:'40px',lineHeight:1.7}}>Three architectural decisions shaped the product vision and determined what was achievable without a full platform rebuild.</p>

          {/* Decision 1 */}
          <div className="cs-two-col" style={{marginBottom:'64px'}}>
            <div>
              <span className="cs-section-number" style={{fontSize:'11px',letterSpacing:'0.12em'}}>DECISION 01</span>
              <h3 className="cs-section-title" style={{fontSize:'clamp(18px, 2vw, 24px)'}}>Unifying the system without replacing it</h3>
              <div className="cs-body">
                <p>The underlying services were owned by different teams and systems. Replacing them outright would have required a multi-year engineering investment.</p>
                <p>Instead of proposing a full rebuild, I designed the product layer to act as an <strong>orchestration layer</strong> above the existing services. The experience unifies the workflows even though the backend systems remain separate.</p>
                <p>This approach allowed the team to dramatically improve the user experience without requiring a complete platform rewrite.</p>
              </div>
            </div>
            <div>
              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'10px',padding:'28px',boxShadow:'inset 0 1px 0 rgba(255,255,255,0.05)'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',color:'var(--text-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'20px'}}>Architecture Approach</div>
                <div style={{display:'flex',flexDirection:'column',gap:'0'}}>
                  {/* Orchestration layer diagram */}
                  <div style={{padding:'14px 16px',borderRadius:'6px',border:'1px solid rgba(99,102,241,0.35)',background:'rgba(99,102,241,0.08)',marginBottom:'8px',textAlign:'center'}}>
                    <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',color:'var(--accent)',letterSpacing:'0.06em'}}>UNIFIED PRODUCT LAYER</div>
                    <div style={{fontSize:'12px',color:'var(--text-2)',marginTop:'4px'}}>Single mobile experience</div>
                  </div>
                  <div style={{textAlign:'center',color:'var(--text-2)',fontSize:'14px',padding:'4px 0'}}>↕</div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'6px'}}>
                    {['Scheduling', 'Benefits', 'Messaging'].map(s => (
                      <div key={s} style={{padding:'10px 8px',borderRadius:'5px',border:'1px solid var(--border)',background:'var(--surface-2)',textAlign:'center'}}>
                        <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',color:'var(--text-2)',letterSpacing:'0.04em'}}>{s}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'6px',marginTop:'6px'}}>
                    {['Health Tracking', 'Care Coordination'].map(s => (
                      <div key={s} style={{padding:'10px 8px',borderRadius:'5px',border:'1px solid var(--border)',background:'var(--surface-2)',textAlign:'center'}}>
                        <div style={{fontFamily:'var(--font-mono)',fontSize:'9px',color:'var(--text-2)',letterSpacing:'0.04em'}}>{s}</div>
                      </div>
                    ))}
                  </div>
                  <div style={{textAlign:'center',color:'var(--text-2)',fontSize:'12px',padding:'8px 0',fontFamily:'var(--font-mono)'}}>Legacy backends remain separate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 2 */}
          <div className="cs-two-col" style={{marginBottom:'64px'}}>
            <div>
              <span className="cs-section-number" style={{fontSize:'11px',letterSpacing:'0.12em'}}>DECISION 02</span>
              <h3 className="cs-section-title" style={{fontSize:'clamp(18px, 2vw, 24px)'}}>Designing around member intent, not system architecture</h3>
              <div className="cs-body">
                <p>Most healthcare platforms mirror the structure of internal systems: claims, appointments, messaging, records. That model makes sense internally but fails for users.</p>
                <p>I restructured the navigation model around <strong>member intent</strong> — what someone is trying to accomplish in their health journey. Navigation, dashboards, and flows were organized around outcomes rather than departments.</p>
                <p>This reduced cognitive load and made the platform significantly easier to understand despite the complexity of the underlying healthcare services.</p>
              </div>
            </div>
            <div>
              <div className="before-after" style={{marginTop:0}}>
                <div className="ba-card">
                  <div className="ba-label before">BEFORE — System-centric</div>
                  <div className="ba-visual">
                    <div className="ba-step">Claims</div>
                    <div className="ba-step">Appointments</div>
                    <div className="ba-step">Messaging</div>
                    <div className="ba-step">Records</div>
                  </div>
                </div>
                <div className="ba-card">
                  <div className="ba-label after">AFTER — Member-intent</div>
                  <div className="ba-visual">
                    <div className="ba-step">My Health</div>
                    <div className="ba-step">My Coverage</div>
                    <div className="ba-step">My Care Team</div>
                    <div className="ba-step">My Plan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decision 3 */}
          <div>
            <span className="cs-section-number" style={{fontSize:'11px',letterSpacing:'0.12em'}}>DECISION 03</span>
            <h3 className="cs-section-title" style={{fontSize:'clamp(18px, 2vw, 24px)'}}>Turning health data into actionable signals</h3>
            <div className="cs-two-col">
              <div className="cs-body">
                <p>Healthcare apps often present raw metrics without context. Data exists, but it rarely helps users decide what to do next.</p>
                <p>I designed the dashboard layer to surface key indicators through visual summaries, progress indicators, and contextual prompts. Instead of browsing data, members can quickly understand what matters and take action.</p>
              </div>
              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'10px',padding:'24px',boxShadow:'inset 0 1px 0 rgba(255,255,255,0.05)'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',color:'var(--text-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'16px'}}>Dashboard Signal Model</div>
                <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                  {[
                    { label: 'Next appointment', signal: 'Action required', color: '#f59e0b' },
                    { label: 'Medication refill', signal: 'Due in 3 days', color: '#f59e0b' },
                    { label: 'Annual checkup', signal: 'Overdue', color: '#ef4444' },
                    { label: 'Benefits usage', signal: 'On track', color: '#22c55e' },
                    { label: 'Care messages', signal: '2 unread', color: 'var(--accent)' },
                  ].map(({ label, signal, color }) => (
                    <div key={label} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 10px',background:'var(--surface-2)',borderRadius:'5px',border:'1px solid var(--border)'}}>
                      <span style={{fontSize:'13px',color:'var(--text-1)'}}>{label}</span>
                      <span style={{fontFamily:'var(--font-mono)',fontSize:'10px',color,letterSpacing:'0.03em'}}>{signal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Outcome */}
      <div className="cs-section">
        <div className="container">
          <span className="cs-section-number">04</span>
          <h2 className="cs-section-title">Outcome</h2>

          <div className="callout-box" style={{marginBottom:'40px'}}>
            <p>This was a strategic design engagement — the deliverable was a complete product vision and design system used by NTT Data to pitch enterprise healthcare clients. Outcome metrics are pre-launch.</p>
          </div>

          <div className="cs-body" style={{marginBottom:'32px'}}>
            <p>The project resulted in a fully realized mobile product concept that unified multiple healthcare services into a single experience.</p>
          </div>

          <div style={{display:'flex',flexDirection:'column',gap:'0'}}>
            {[
              { num: '01', title: 'End-to-End Mobile Product Vision', desc: 'A complete product vision spanning dashboards, messaging, health tracking, and care coordination — designed to feel like a single platform.' },
              { num: '02', title: 'Navigation Architecture', desc: 'A structured navigation model designed to scale across multiple healthcare services, organized around member intent rather than internal systems.' },
              { num: '03', title: 'Design System and Component Library', desc: 'A reusable design system and component library that allowed the platform to be extended across additional modules without redesign.' },
              { num: '04', title: 'High-Fidelity Product Flows', desc: 'Presentation-ready mobile flows demonstrating how fragmented healthcare services could function as a single, coherent platform.' },
            ].map(({ num, title, desc }) => (
              <div key={num} className="framework-item">
                <span className="framework-num">{num}</span>
                <div className="framework-text">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cs-body" style={{marginTop:'40px'}}>
            <p>I iterated through multiple rounds of concept refinement to align the experience with NTT Data stakeholders and ensure the system could realistically integrate with existing healthcare platforms.</p>
            <p>The final deliverable was a presentation-ready product vision and prototype that NTT Data could use to demonstrate how enterprise healthcare providers could modernize the digital member experience without rebuilding their entire technology stack.</p>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{padding:'80px 0',borderTop:'1px solid var(--border)',textAlign:'center'}}>
        <div className="container">
          <p style={{fontFamily:'var(--font-mono)',fontSize:'11px',color:'var(--text-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'16px'}}>Next steps</p>
          <h3 style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'28px',color:'var(--text-1)',marginBottom:'12px',letterSpacing:'-0.02em'}}>Interested in this work?</h3>
          <p style={{fontSize:'16px',color:'var(--text-2)',marginBottom:'32px'}}>I'm open to Lead and Principal Product Designer roles at AI-first companies.</p>
          <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
            <a href="mailto:andre@andrebot.com" className="btn-primary">Send me an email</a>
            <button onClick={onBack} className="btn-ghost-hero">← Back to Work</button>
          </div>
        </div>
      </div>
    </div>
  )
}
