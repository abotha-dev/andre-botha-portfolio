import { useEffect } from 'react'

interface TakeoffCaseStudyProps {
  onBack: () => void
}

export function TakeoffCaseStudy({ onBack }: TakeoffCaseStudyProps) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

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
          <span className="cs-label">Case Study · Solo Founder · AI Product Design</span>
          <h1 className="cs-title">Takeoff.ai: Building a Generative<br/>AI SaaS Product End-to-End</h1>
          <p className="cs-subtitle">From a failed cold email campaign to a validated go-to-market strategy in four weeks — as a solo designer, founder, and builder.</p>

          <div className="metadata-table">
            <div className="meta-cell">
              <span className="meta-label">Role</span>
              <div className="meta-value">Sole Founder<br/>Designer &amp; Builder</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Stack</span>
              <div className="meta-value">GPT-4o Vision<br/>Supabase · Vercel · Stripe</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Timeline</span>
              <div className="meta-value">4 Weeks<br/>Concept to GTM</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Status</span>
              <div className="meta-value">Live Product<br/>Production</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div className="img-hero-wrap" style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.08) 50%, rgba(99,102,241,0.04) 100%)',
          border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: '16px',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '320px',
          gap: '1.5rem'
        }}>
          {/* Takeoff.ai logo mark */}
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <rect width="56" height="56" rx="14" fill="rgba(99,102,241,0.15)"/>
            <path d="M18 36 L28 16 L38 36" stroke="rgba(99,102,241,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 30 L34 30" stroke="rgba(99,102,241,0.6)" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="28" cy="16" r="2.5" fill="rgba(99,102,241,0.9)"/>
          </svg>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>
              Takeoff.ai
            </div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              AI-powered construction estimation — blueprint to bid in 30 seconds
            </div>
            <a
              href="https://blueprint-estimate.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.35)',
                color: 'var(--accent)',
                borderRadius: '8px',
                padding: '0.6rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.2s'
              }}
            >
              Try the Live Product
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Outcomes */}
      <div className="container">
        <div className="cs-section">
          <h2 className="cs-section-title">Project Outcomes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              { stat: '0 → 1', label: 'Conceived, designed, and shipped a production SaaS product solo' },
              { stat: '4 weeks', label: 'From first line of code to validated go-to-market strategy' },
              { stat: '30 sec', label: 'Blueprint to preliminary estimate vs. 60 minutes manually' },
              { stat: '$49/mo', label: 'Priced for the 90% of contractors priced out of enterprise tools' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '10px', padding: '1.25rem 1.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.4rem' }}>{stat}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge */}
        <div className="cs-section">
          <h2 className="cs-section-title">The Challenge: How Do You Sell AI to a Tech-Skeptical Audience?</h2>
          <p className="cs-body">I had built a technically impressive tool — GPT-4o Vision reading a blueprint and returning a room-by-room cost estimate in 30 seconds. My initial assumption was that a superior product would sell itself.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>I was wrong. My first attempt at validation was a cold email campaign to local contractors. <strong>The result: zero responses.</strong> This failure was the most important data point of the project. It proved that the target audience was deeply resistant to traditional SaaS sales tactics and that my go-to-market strategy was fundamentally broken. I had a solution — I just hadn't correctly identified how my users discovered and trusted new tools.</p>
        </div>

        {/* Challenge visual */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem'
          }}>
            <div style={{
              background: 'rgba(239,68,68,0.06)',
              border: '1px solid rgba(239,68,68,0.15)',
              borderRadius: '12px',
              padding: '1.5rem',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(239,68,68,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Initial Strategy</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'rgba(239,68,68,0.9)', marginBottom: '0.5rem' }}>0%</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Cold email response rate. Tech-first pitch to a trust-first audience.</div>
            </div>
            <div style={{
              background: 'rgba(99,102,241,0.06)',
              border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '12px',
              padding: '1.5rem',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(99,102,241,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>After Pivot</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.5rem' }}>Validated</div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Community-led GTM. Meeting users where they already complained about the problem.</div>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="cs-section">
          <h2 className="cs-section-title">The Solution: An AI Estimator for the Underdogs</h2>
          <p className="cs-body">Takeoff.ai is not designed to compete with PlanSwift or QuickBid — enterprise tools that cost hundreds per month and require weeks of training. Instead, it targets the 90% of contractors who are priced out or overwhelmed by those platforms.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>For <strong>$49/month</strong>, a contractor uploads a blueprint and receives a detailed, room-by-room material and cost estimate in 30 seconds. The accuracy sits at 70-80% — not for final bids, but for <strong>project screening</strong>: quickly deciding which jobs are worth the time and cost of a full manual takeoff. It turns a 60-minute process into 30 seconds.</p>
        </div>

        {/* AI Design section */}
        <div className="cs-section">
          <h2 className="cs-section-title">AI Design: Designing for Imperfect AI</h2>
          <p className="cs-body" style={{ marginBottom: '1.5rem' }}>The hardest design challenge wasn't the UI — it was trust. How do you build confidence with a skeptical audience when your AI is only 80% accurate? The answer was to stop hiding the imperfection and start designing around it.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {[
              {
                num: '01',
                title: 'Radical Transparency',
                body: 'Every output is labeled "Preliminary Estimate" with a clear 70-80% accuracy disclaimer. Setting expectations upfront builds more trust than a clean number that turns out wrong.',
              },
              {
                num: '02',
                title: 'Per-Item Confidence Scores',
                body: 'Instead of one opaque total, each line item carries a confidence score — 95% for a simple room, 65% for a non-standard material. Users instantly see where to apply their own expertise.',
              },
              {
                num: '03',
                title: 'User in Control',
                body: 'Every AI-generated value is editable. One click to override any quantity or price. This transforms the AI from a black box into an intelligent starting point — the contractor is still the expert.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '1.5rem',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(99,102,241,0.5)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{num}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>{title}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* The Approach */}
        <div className="cs-section">
          <h2 className="cs-section-title">The Pivot: From Broadcasting to Bullseye Targeting</h2>
          <p className="cs-body" style={{ marginBottom: '1.5rem' }}>Cold emails failed because I was pushing my product at an audience that doesn't trust cold outreach. The pivot was to stop broadcasting and start listening — find where contractors already complain about estimating, and show up there.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                channel: 'Reddit Communities',
                detail: 'r/Construction and r/Estimating. Lurked before posting. Found contractors openly discussing pain points like shrink/swell calculations — a specific, high-value problem that even expensive software doesn\'t solve well. This became the anchor for all subsequent outreach.',
              },
              {
                channel: 'Targeted DMs',
                detail: 'Instead of mass emails, identified users who had recently posted about estimating problems and reached out with a solution to their specific issue. Higher conversion, zero spam.',
              },
              {
                channel: 'In-Person Walk-Ins',
                detail: 'Used Yelp to find local contractors with physical offices. Developed a 2-minute pitch for walk-ins. Face-to-face got unfiltered feedback that no survey or DM could replicate.',
              },
            ].map(({ channel, detail }, i) => (
              <div key={channel} style={{
                display: 'flex',
                gap: '1.25rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '1.25rem 1.5rem',
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(99,102,241,0.12)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.35rem' }}>{channel}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Win */}
        <div className="cs-section">
          <h2 className="cs-section-title">Design Win: From 5 Steps to 1</h2>
          <p className="cs-body">Competitive analysis of PlanSwift and QuickBid revealed we had to win on simplicity. But my initial upload flow was a 5-step wizard asking for project name, file format, unit of measurement, and other details upfront.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>Early testing (using Lovable for AI-driven user interviews) showed consistent drop-off mid-wizard. Users wanted to see the AI work — the setup questions felt like friction before the payoff. I collapsed the entire wizard into a <strong>single drag-and-drop target on the homepage</strong>. The AI infers everything it can from the file itself; anything missing gets asked for later.</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            <div style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '12px',
              padding: '1.5rem',
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>Before</div>
              {['Project Name', 'File Format', 'Unit System', 'Project Type', 'Region'].map((step, i) => (
                <div key={step} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  padding: '0.5rem 0',
                  borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  opacity: 0.5
                }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '4px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', color: 'var(--text-muted)', flexShrink: 0 }}>{i + 1}</div>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{step}</span>
                </div>
              ))}
              <div style={{ fontSize: '0.75rem', color: 'rgba(239,68,68,0.6)', marginTop: '0.75rem' }}>5-step wizard — users dropped off</div>
            </div>
            <div style={{
              background: 'rgba(99,102,241,0.06)',
              border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              minHeight: '200px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '12px',
                border: '2px dashed rgba(99,102,241,0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4v12M8 8l4-4 4 4" stroke="rgba(99,102,241,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 20h16" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.25rem' }}>Drop your blueprint here</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>PNG, JPG, WEBP, PDF</div>
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(99,102,241,0.7)', fontWeight: 500 }}>After — single action, zero friction</div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="cs-section">
          <h2 className="cs-section-title">The AI-First Stack</h2>
          <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.8125rem' }}>Category</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.8125rem' }}>Tools Used</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { category: 'Strategy & Research', tools: 'Manus AI, Reddit, Yelp, Lovable (AI User Interviews)' },
                  { category: 'Design', tools: 'Figma' },
                  { category: 'AI Pipeline', tools: 'GPT-4o Vision (blueprint parsing + confidence scoring)' },
                  { category: 'Development', tools: 'Cursor IDE, Claude, ChatGPT-4' },
                  { category: 'Backend & Database', tools: 'Python, Supabase, Render' },
                  { category: 'Frontend & Payments', tools: 'React, TypeScript, Vercel, Stripe' },
                ].map(({ category, tools }, i) => (
                  <tr key={category} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                    <td style={{ padding: '0.875rem 1rem', color: 'var(--text)', fontWeight: 500 }}>{category}</td>
                    <td style={{ padding: '0.875rem 1rem', color: 'var(--text-muted)' }}>{tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Framework */}
        <div className="cs-section">
          <h2 className="cs-section-title">The Framework: A Repeatable Playbook for AI PMF</h2>
          <p className="cs-body" style={{ marginBottom: '1.5rem' }}>This project wasn't just about building one product. It validated a repeatable approach for launching AI-native tools in skeptical, non-tech markets.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              {
                num: '01',
                title: 'Problem First, Technology Second',
                body: 'Initial failure came from being enamored with the AI. The breakthrough came when I focused on the contractor\'s hatred of manual data entry — not the impressiveness of GPT-4o Vision.',
              },
              {
                num: '02',
                title: 'Find the Watering Hole',
                body: 'Identify where your audience already complains — Reddit threads, local supply stores, trade associations. Show up as a helpful expert before you show up as a product.',
              },
              {
                num: '03',
                title: 'Position as a Complement',
                body: 'In markets with entrenched incumbents, frame your tool as a simple, cheap addition to their existing workflow — not a scary replacement for something they\'ve used for years.',
              },
              {
                num: '04',
                title: 'Design for Imperfection',
                body: 'Build trust not by hiding your AI\'s flaws but by transparently exposing them and giving the user final control. Honesty outperforms overconfidence every time.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                padding: '1.5rem',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'rgba(99,102,241,0.5)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{num}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>{title}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="cs-section" style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.35rem' }}>See it in action</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Upload a blueprint and get a live estimate in 30 seconds.</div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="https://blueprint-estimate.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--accent)',
                color: '#fff',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Try Live Product
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://github.com/scruffyjerk/blueprint-estimate"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text)',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Frontend Repo
            </a>
            <a
              href="https://github.com/scruffyjerk/blueprint-intelligence-engine"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text)',
                borderRadius: '8px',
                padding: '0.65rem 1.25rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              AI Backend Repo
            </a>
          </div>
        </div>

          <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(99,102,241,0.2)', background: 'rgba(99,102,241,0.08)', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text)' }}>Let&apos;s work together</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: 0, maxWidth: '520px' }}>
                Have a product or team that could use AI-native design and execution? I&apos;d love to help.
              </p>
            </div>
            <a href="/#contact" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Get in touch</a>
          </div>

      </div>
    </div>
  )
}
