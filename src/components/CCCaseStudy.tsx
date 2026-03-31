import { useEffect } from 'react'

interface CCCaseStudyProps {
  onBack: () => void
}

export function CCCaseStudy({ onBack }: CCCaseStudyProps) {
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
          <span className="cs-label">Case Study · B2B SaaS · Emerging Market</span>
          <h1 className="cs-title">CreditConnection: Designing for Trust<br/>in an Emerging Market</h1>
          <p className="cs-subtitle">Designing a B2B SaaS product that balances the daily operational needs of small businesses with the long-term challenge of building a credit ecosystem in Nigeria.</p>

          <div className="metadata-table">
            <div className="meta-cell">
              <span className="meta-label">Client</span>
              <div className="meta-value">CreditConnection<br/>Business (Nigeria)</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Role</span>
              <div className="meta-value">Senior Product<br/>Designer</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Scope</span>
              <div className="meta-value">B2B SaaS<br/>Dashboard Design<br/>Design System</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div className="img-hero-wrap">
          <img
            src="/assets/credit-connection/cc_hero.png"
            alt="CreditConnection dashboard on laptop with mobile landing page"
          />
        </div>
      </div>

      <div className="container">
        {/* Outcomes */}
        <div className="cs-section">
          <h2 className="cs-section-title">Project Outcomes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              { stat: 'Launched', label: 'User-friendly dashboard for invoice tracking and cash flow management' },
              { stat: 'Scalable', label: 'Design system that reduced development friction and enabled faster iteration' },
              { stat: 'Onboarded', label: 'Businesses to a new category of credit management tools via educational landing page' },
              { stat: 'Bridged', label: 'Daily financial tasks with the long-term value of formal credit reporting' },
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
          <h2 className="cs-section-title">The Challenge: The Chicken-and-Egg Problem of Credit</h2>
          <p className="cs-body">In many emerging markets, formal credit reporting is a classic chicken-and-egg problem. Businesses don't see the value in reporting late payments because there's no robust credit bureau, and a robust credit bureau can't exist without businesses consistently reporting data.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The design challenge was twofold:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.25rem' }}>
            {[
              { title: 'The Utility Problem', body: 'How do we build a tool that provides immediate, tangible value to a small business owner today? They care about getting paid, not the abstract concept of a credit score.' },
              { title: 'The Education Problem', body: 'How do we gently introduce the long-term value of credit reporting in a way that feels like a benefit, not a burden?' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
          <p className="cs-body" style={{ marginTop: '1.25rem' }}>We had to design a product that worked as a <strong>practical cash flow tool first</strong>, and a credit-building tool second.</p>
        </div>

        {/* Contribution */}
        <div className="cs-section">
          <h2 className="cs-section-title">My Contribution: From Interface to Infrastructure</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              { num: '01', title: 'Strategic Design', body: 'Anchored the entire user experience around the invoice lifecycle. The dashboard was structured not around "credit," but around the job the user was trying to do: track who has paid, who is late, and who needs a reminder. This made the product immediately useful.' },
              { num: '02', title: 'Systems Thinking', body: 'Designed and built a comprehensive design system in parallel with the product UI — reusable components, variables, and patterns that allowed the dev team to build faster and ensured future features would feel consistent.' },
              { num: '03', title: 'User-Centered Execution', body: 'Conducted user feedback sessions with local business owners to pressure-test the design. This direct input was critical for simplifying the UI, clarifying confusing financial jargon, and ensuring the product felt built for the Nigerian market.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ display: 'flex', gap: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'rgba(99,102,241,0.3)', flexShrink: 0, lineHeight: 1 }}>{num}</div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text)' }}>{title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screen gallery */}
        <div className="cs-section">
          <h2 className="cs-section-title">Design</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
            <div className="img-panel"><div style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem' }}><img src="/assets/credit-connection/cc_slide_1.png" alt="CreditConnection dashboard screen 1" /></div></div>
            <div className="img-panel"><div style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem' }}><img src="/assets/credit-connection/cc_slide_2.png" alt="CreditConnection dashboard screen 2" /></div></div>
            <div className="img-panel" style={{ gridColumn: 'span 2' }}><div style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem' }}><img src="/assets/credit-connection/cc_slide_4.png" alt="CreditConnection desktop dashboard" /></div></div>
            <div className="img-panel"><div style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem' }}><img src="/assets/credit-connection/cc_slide_3.png" alt="CreditConnection screen 3" /></div></div>
            <div className="img-panel"><div style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem' }}><img src="/assets/credit-connection/cc_slide_5.avif" alt="CreditConnection screen 5" /></div></div>
          </div>
        </div>

        {/* Key Decisions */}
        <div className="cs-section">
          <h2 className="cs-section-title">Key Decisions &amp; Tradeoffs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
            {[
              {
                decision: 'Clarity over Novelty',
                detail: 'Used familiar, established UI patterns for financial data — tables for invoices, line graphs for cash flow. The goal was to make the tool feel instantly intuitive and trustworthy.',
                tradeoff: 'We sacrificed the opportunity for flashy, experimental data visualizations. For a product dealing with a business\'s money, building trust and reducing the learning curve was more important than visual novelty.',
              },
              {
                decision: 'Brand Continuity over Reinvention',
                detail: 'The new product\'s visual identity was designed as a modern evolution of the existing CreditConnection brand. Same core color palette and typography, applied in a cleaner, more structured way.',
                tradeoff: 'We couldn\'t create a completely new look. But by maintaining brand continuity, we leveraged existing brand trust and reduced the risk of the new product feeling like an unknown, unproven entity.',
              },
            ].map(({ decision, detail, tradeoff }) => (
              <div key={decision} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.75rem' }}>We chose: {decision}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.7, marginBottom: '0.75rem' }}>{detail}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7 }}><strong style={{ color: 'var(--text)' }}>Tradeoff:</strong> {tradeoff}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="cs-section" style={{ marginBottom: '6rem' }}>
          <h2 className="cs-section-title">The Outcome: A Foundation for a New Market</h2>
          <p className="cs-body">The final product successfully delivered on both of its core jobs. It provided Nigerian small businesses with a clean, modern, and intuitive tool to manage their daily cash flow — solving an immediate, tangible problem for the user.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>More importantly, by integrating the option to "Report Late Payment" directly into the familiar workflow of managing an overdue invoice, the product gently onboarded users into the practice of credit reporting. It used a short-term utility to drive a long-term, market-building behavior. The result was not just a product, but a foundational piece of infrastructure for a more transparent credit ecosystem in Nigeria.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '2rem' }}>
            <div className="img-panel"><div style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem' }}><img src="/assets/credit-connection/cc_slide_6.png" alt="CreditConnection final screen 1" /></div></div>
            <div className="img-panel"><div style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem' }}><img src="/assets/credit-connection/cc_slide_7.png" alt="CreditConnection final screen 2" /></div></div>
            <div className="img-panel"><div style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem' }}><img src="/assets/credit-connection/cc_slide_2.png" alt="CreditConnection final screen 3" /></div></div>
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
          <button className="back-btn" onClick={onBack} style={{ marginTop: '3rem' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2 L4 7 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Work
          </button>
        </div>
      </div>
    </div>
  )
}
