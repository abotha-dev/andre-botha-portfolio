interface CaseStudyProps {
  onBack: () => void
}

export function CaseStudy({ onBack }: CaseStudyProps) {
  return (
    <div className="cs-page-shell">
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
          <span className="cs-label">Case Study · AI SaaS · Solo Founder</span>
          <h1 className="cs-title">Takeoff.ai: AI-Powered<br/>Construction Estimating</h1>
          <p className="cs-subtitle">From failed outreach to a validated AI product strategy — conceived, designed, and shipped solo in 4 weeks.</p>

          <div className="metadata-table">
            <div className="meta-cell">
              <span className="meta-label">Role</span>
              <div className="meta-value">Product Strategy<br/>UX Design<br/>Full-Stack Build</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Timeline</span>
              <div className="meta-value">4 Weeks</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Stack</span>
              <div className="meta-value" style={{fontSize:'13px'}}>Cursor · Claude · Supabase<br/>Vercel · Stripe · Figma</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Status</span>
              <div className="meta-value" style={{display:'flex',alignItems:'center',gap:'8px'}}>
                <span style={{width:'7px',height:'7px',borderRadius:'50%',background:'#22c55e',flexShrink:0,display:'inline-block'}}></span>
                Live · Pre-revenue
              </div>
            </div>
          </div>

          <div style={{marginTop:'48px',borderRadius:'12px',overflow:'hidden',border:'1px solid var(--border)',background:'var(--surface)',aspectRatio:'16/7',position:'relative'}}>
            <div className="placeholder-takeoff" style={{position:'absolute',inset:0}}>
              <div className="placeholder-grid"></div>
              <svg style={{position:'absolute',inset:0,width:'100%',height:'100%',opacity:0.25}} viewBox="0 0 900 394" preserveAspectRatio="xMidYMid meet">
                <text x="450" y="190" fill="rgba(255,255,255,0.15)" fontSize="13" textAnchor="middle" fontFamily="monospace">PLACEHOLDER — Replace with Takeoff.ai interface screenshot</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: The Challenge */}
      <div className="cs-section">
        <div className="container">
          <div className="cs-two-col">
            <div>
              <span className="cs-section-number">01</span>
              <h2 className="cs-section-title">The Challenge</h2>
              <div className="cs-body">
                <p>Construction estimating is a time-consuming, manual process. Contractors spend hours poring over blueprints to create material takeoffs and cost estimates. The existing software solutions are powerful but suffer from three major flaws: they are expensive, complex, and slow.</p>
                <p>I built an AI tool that could generate a preliminary estimate from a blueprint in 30 seconds. My initial assumption was that a superior product would sell itself.</p>
                <p><strong>I was wrong.</strong></p>
                <p>My first attempt at validation was a cold email campaign to local contractors. The result: zero responses. This failure was the most valuable data point I could have asked for.</p>
              </div>
              <div className="callout-box">
                <p>"I had a solution, but I hadn't correctly identified the user's real problem or their trusted channels."</p>
              </div>
            </div>
            <div>
              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'10px',padding:'28px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'11px',color:'var(--text-2)',letterSpacing:'0.1em',marginBottom:'20px',textTransform:'uppercase'}}>Cold Email Results</div>
                <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
                  <div>
                    <div style={{fontFamily:'var(--font-display)',fontSize:'52px',fontWeight:800,color:'#ef4444',letterSpacing:'-0.03em',lineHeight:1}}>0%</div>
                    <div style={{fontSize:'13px',color:'var(--text-2)',marginTop:'4px'}}>Response rate from initial outreach</div>
                  </div>
                  <div style={{height:'1px',background:'var(--border)'}}></div>
                  <div style={{fontSize:'14px',color:'var(--text-2)',lineHeight:1.6}}>Sent to 3 local contractors. Zero opens, zero replies. The channel was wrong — not the product.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: The Solution */}
      <div className="cs-section">
        <div className="container">
          <span className="cs-section-number">02</span>
          <h2 className="cs-section-title">The Solution</h2>
          <div className="cs-two-col">
            <div className="cs-body">
              <p>Takeoff.ai provides AI-powered construction takeoffs in 30 seconds. For $49/month, a contractor uploads a blueprint and receives a detailed, room-by-room material and cost estimate.</p>
              <p>It's not designed to be 100% accurate for final bids. Instead, it provides a 70–80% accurate <strong>preliminary estimate</strong>, letting contractors quickly screen projects and decide which ones are worth a full manual bid.</p>
              <p>This positions Takeoff.ai not as a replacement for PlanSwift or QuickBid, but as a fast, cheap, simple screening tool for the 80% of contractors who are priced out or overwhelmed by enterprise software.</p>
            </div>
            <div>
              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'10px',overflow:'hidden'}}>
                <div style={{padding:'20px',borderBottom:'1px solid var(--border)'}}>
                  <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',color:'var(--text-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'16px'}}>Competitive Comparison</div>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:0,fontSize:'12px'}}>
                    <div style={{padding:'10px 12px',background:'var(--surface-2)',fontFamily:'var(--font-mono)',fontSize:'10px',color:'var(--text-2)'}}>Feature</div>
                    <div style={{padding:'10px 12px',background:'rgba(99,102,241,0.08)',fontFamily:'var(--font-mono)',fontSize:'10px',color:'var(--accent)',textAlign:'center'}}>Takeoff.ai</div>
                    <div style={{padding:'10px 12px',background:'var(--surface-2)',fontFamily:'var(--font-mono)',fontSize:'10px',color:'var(--text-2)',textAlign:'center'}}>PlanSwift</div>
                  </div>
                  {[
                    ['Speed', '30 sec', '30–60 min'],
                    ['Price', '$49/mo', '$166–375/mo'],
                    ['Training', 'None', 'Extensive'],
                    ['Target', 'Small Cos', 'Mid-Large GC'],
                  ].map(([feature, ours, theirs]) => (
                    <div key={feature} style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',borderTop:'1px solid var(--border)'}}>
                      <div style={{padding:'10px 12px',fontSize:'12px',color:'var(--text-2)'}}>{feature}</div>
                      <div style={{padding:'10px 12px',fontSize:'12px',color:'var(--green)',textAlign:'center',background:'rgba(99,102,241,0.04)'}}>{ours}</div>
                      <div style={{padding:'10px 12px',fontSize:'12px',color:'var(--text-2)',textAlign:'center'}}>{theirs}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3: AI Design Decisions */}
      <div className="cs-section">
        <div className="container">
          <span className="cs-section-number">03</span>
          <h2 className="cs-section-title">AI Design Decisions</h2>
          <p style={{fontSize:'17px',color:'var(--text-2)',maxWidth:'600px',marginBottom:'40px',lineHeight:1.7}}>The core challenge: how do you build trust when your AI is only 70–80% accurate? My approach was to embrace imperfection as a design constraint, not hide it.</p>
          <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
            <div className="decision-card">
              <span className="decision-number">DECISION 01</span>
              <h3 className="decision-title">Radical Transparency</h3>
              <p className="decision-body">Every output is clearly labeled "Preliminary Estimate" and includes a displayed 70–80% accuracy range. The UI never presents AI output as a final, authoritative number.</p>
            </div>
            <div className="decision-card">
              <span className="decision-number">DECISION 02</span>
              <h3 className="decision-title">Confidence Scores Per Line Item</h3>
              <p className="decision-body">Instead of a single opaque final number, every AI-generated line item shows a per-item confidence score inline. This lets contractors instantly see where to apply their own expertise.</p>
            </div>
            <div className="decision-card">
              <span className="decision-number">DECISION 03</span>
              <h3 className="decision-title">User in Control</h3>
              <p className="decision-body">Every single AI-generated line item is editable. If a contractor disagrees with a quantity or price, they click and override it immediately. The contractor is the domain expert. The AI is a fast first draft.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: The Approach */}
      <div className="cs-section">
        <div className="container">
          <span className="cs-section-number">04</span>
          <h2 className="cs-section-title">The Approach</h2>
          <div className="cs-two-col">
            <div className="cs-body">
              <p>The failed email campaign forced a pivot: from broadcasting to bullseye targeting. Instead of pushing the product, I started pulling insights from users.</p>
              <p><strong>Reddit community research.</strong> I analyzed r/Construction, r/Contractors, and r/Estimating — listening, not promoting.</p>
              <p><strong>Targeted DM outreach.</strong> Armed with those insights, I switched from cold emails to hyper-targeted Reddit DMs.</p>
              <p><strong>In-person validation.</strong> Using Yelp and local directories, I identified 5 contractors within 15 minutes of West Hollywood with physical offices.</p>
            </div>
            <div>
              <div style={{background:'var(--surface)',border:'1px solid var(--border)',borderRadius:'10px',padding:'28px'}}>
                <div style={{fontFamily:'var(--font-mono)',fontSize:'10px',color:'var(--text-2)',letterSpacing:'0.1em',textTransform:'uppercase',marginBottom:'20px'}}>Outreach Channel Performance</div>
                <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
                  {[
                    { label: 'Cold Email', value: '0%', color: '#ef4444', width: '0%' },
                    { label: 'Reddit DM', value: 'Warm leads', color: 'var(--accent)', width: '40%' },
                    { label: 'In-Person', value: '60%', color: 'var(--green)', width: '60%' },
                  ].map(({ label, value, color, width }) => (
                    <div key={label}>
                      <div style={{display:'flex',justifyContent:'space-between',marginBottom:'6px',fontSize:'13px'}}>
                        <span style={{color:'var(--text-2)'}}>{label}</span>
                        <span style={{color,fontFamily:'var(--font-mono)'}}>{value}</span>
                      </div>
                      <div style={{height:'4px',background:'var(--border)',borderRadius:'2px'}}>
                        <div style={{height:'100%',width,background:color,borderRadius:'2px'}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: Design Win */}
      <div className="cs-section">
        <div className="container">
          <span className="cs-section-number">05</span>
          <h2 className="cs-section-title">Design Win</h2>
          <div className="cs-body" style={{marginBottom:'32px'}}>
            <p>To compete on simplicity, I had to earn it. My initial blueprint upload flow was a 5-step wizard. I collapsed the entire wizard into a single drag-and-drop target on the homepage.</p>
          </div>
          <div className="before-after">
            <div className="ba-card">
              <div className="ba-label before">BEFORE — 5-step wizard</div>
              <div className="ba-visual">
                <div className="ba-step">Step 1: Project Name</div>
                <div className="ba-step">Step 2: File Format (PDF/Image)</div>
                <div className="ba-step">Step 3: Unit of Measurement</div>
                <div className="ba-step">Step 4: Contract Type</div>
                <div className="ba-step">Step 5: Upload File</div>
              </div>
            </div>
            <div className="ba-card">
              <div className="ba-label after">AFTER — single action</div>
              <div className="ba-visual" style={{alignItems:'center',justifyContent:'center'}}>
                <div style={{border:'2px dashed rgba(99,102,241,0.4)',borderRadius:'10px',padding:'32px 40px',textAlign:'center',background:'rgba(99,102,241,0.06)'}}>
                  <div style={{fontSize:'28px',marginBottom:'10px'}}>⬆</div>
                  <div style={{fontFamily:'var(--font-display)',fontWeight:600,fontSize:'14px',color:'var(--text-1)'}}>Drop Blueprint Here</div>
                  <div style={{fontSize:'12px',color:'var(--text-2)',marginTop:'4px'}}>PDF or image · AI handles the rest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Outcomes */}
      <div className="cs-section">
        <div className="container">
          <span className="cs-section-number">07</span>
          <h2 className="cs-section-title">Outcomes</h2>
          <div className="outcomes-grid">
            {[
              { metric: '60%', desc: 'Engagement rate from in-person outreach. 3 of 5 targeted contractors agreed to follow-up conversations.' },
              { metric: '$49', desc: 'Validated monthly price point. Contractors confirmed they\'d pay month-to-month at this price.' },
              { metric: '0→1', desc: 'From no validation to a clear path to first paying users. Identified exact ICP and trusted channels.' },
              { metric: '4 wks', desc: 'Concept to live, demo-ready AI SaaS product. Full stack: design, build, and GTM playbook delivered solo.' },
            ].map(({ metric, desc }) => (
              <div key={metric} className="outcome-card">
                <div className="outcome-metric">{metric}</div>
                <div className="outcome-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 8: The Framework */}
      <div className="cs-section">
        <div className="container">
          <span className="cs-section-number">08</span>
          <h2 className="cs-section-title">The Framework</h2>
          <p style={{fontSize:'17px',color:'var(--text-2)',maxWidth:'600px',marginBottom:'40px',lineHeight:1.7}}>This project wasn't just about one product. It was about developing a repeatable playbook for launching AI-native applications in skeptical, relationship-driven markets.</p>
          <div>
            {[
              { num: '01', title: 'Start With a Real-World Problem, Not a Technology', desc: 'The initial failure came from being enamored with the AI. The breakthrough came from focusing on the contractor\'s specific hatred of manual data entry.' },
              { num: '02', title: 'Find the Watering Hole', desc: 'Every market has places where the target audience already complains and asks for help. Find the Reddit threads, the local supply stores, the job site conversations.' },
              { num: '03', title: 'Position as a Complement, Not a Threat', desc: 'In markets with entrenched incumbents, frame your disruptive tool as a simple, cheap addition to the existing workflow.' },
              { num: '04', title: 'Design for Imperfection', desc: 'Build trust not by hiding your AI\'s limitations, but by transparently exposing them and giving the user final control.' },
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
