import { useEffect } from 'react'

interface PGCaseStudyProps {
  onBack: () => void
}

export function PGCaseStudy({ onBack }: PGCaseStudyProps) {
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
          <span className="cs-label">Case Study · Brand Repositioning · E-commerce</span>
          <h1 className="cs-title">Olay: Repositioning a Legacy Brand<br/>for a Modern Audience</h1>
          <p className="cs-subtitle">Using e-commerce as a credibility engine to drive a record-breaking product launch and shift brand perception from discount-focused to science-led.</p>

          <div className="metadata-table">
            <div className="meta-cell">
              <span className="meta-label">Client</span>
              <div className="meta-value">Procter &amp; Gamble<br/>Olay</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Role</span>
              <div className="meta-value">Lead UX &amp;<br/>Content Strategy</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Scope</span>
              <div className="meta-value">Brand Repositioning<br/>Product Launch<br/>E-commerce Redesign</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div className="img-hero-wrap">
          <img
            src="/assets/pg/pg_hero.png"
            alt="Redesigned Olay.com on desktop and mobile"
          />
        </div>
      </div>

      {/* Outcomes */}
      <div className="container">
        <div className="cs-section">
          <h2 className="cs-section-title">Project Outcomes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              { stat: 'Record', label: 'Highest waitlist sign-ups in P&G history' },
              { stat: '< 2hrs', label: 'Sold out on launch day' },
              { stat: '#1', label: 'Best-selling serum in North America' },
              { stat: 'New standard', label: 'Set precedent for all future P&G digital launches' },
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
          <h2 className="cs-section-title">The Challenge: Credibility vs. Conversion</h2>
          <p className="cs-body">Olay faced a critical brand perception gap. While the company was developing scientifically advanced products, the Olay.com experience was still anchored in a "discount beauty" model. Internal stakeholders believed customers only cared about promotions, but our user research showed the opposite: modern consumers cared more about ingredients, clinical proof, and efficacy.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The core challenge: <strong>How do we redesign Olay.com to build the scientific credibility needed for a premium product launch, while navigating internal resistance to moving away from a purely conversion-focused model?</strong></p>
        </div>

        {/* Contribution */}
        <div className="cs-section">
          <h2 className="cs-section-title">My Contribution: From UX to Brand Strategy</h2>
          <p className="cs-body">As the lead for UX and Content Strategy, I drove the vision and execution for the Olay.com relaunch across two tracks:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              {
                title: 'Strategic Leadership',
                body: 'Defined the core strategy to shift the site from a simple sales channel to a credibility engine. Championed an education-first approach and created the "Key Decisions & Tradeoffs" framework to get stakeholder buy-in.',
              },
              {
                title: 'Hands-On Execution',
                body: 'Restructured site architecture around educational content, designed the "Product Finder" user flow, improved navigation, and collaborated with visual design to elevate typography, asset libraries, and CTA language.',
              },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem', color: 'var(--text)' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Screen gallery */}
        <div className="cs-section">
          <h2 className="cs-section-title">Design</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
            {['pg_slide_1.avif','pg_slide_2.avif','pg_slide_3.avif','pg_slide_4.avif','pg_slide_5.avif','pg_slide_6.avif'].map((img, i) => (
              <div key={img} className="img-panel">
                <div style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem' }}><img src={`/assets/pg/${img}`} alt={`Olay design screen ${i + 1}`} /></div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Decisions */}
        <div className="cs-section">
          <h2 className="cs-section-title">Key Decisions &amp; Tradeoffs</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
            {[
              {
                decision: 'Education over Urgency',
                detail: 'We prioritized content that proved the product\'s efficacy — ingredient deep-dives, clinical study data, and video demonstrations from Olay\'s internal scientists — over promotional banners and countdown timers.',
                tradeoff: 'This approach asked more of the user upfront. But for a premium launch, building a foundation of trust was more valuable than securing a low-quality conversion.',
              },
              {
                decision: 'Guided Discovery over Generic Browsing',
                detail: 'We designed and launched the "Product Finder," a diagnostic tool that matched users to the right products based on their specific skin concerns, combined with personalized landing pages.',
                tradeoff: 'A guided experience is more complex to build and maintain than a simple product grid. But it delivered a consultative experience that dramatically reduced choice friction.',
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
          <h2 className="cs-section-title">The Outcome: A Record-Breaking Launch</h2>
          <p className="cs-body">The strategic shift to a credibility-first model was an unequivocal success. By building trust and educating the user before asking for the sale, we created unprecedented demand.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The launch generated the highest number of waitlist sign-ups in P&G history. When the product dropped, it sold out in less than two hours. The momentum continued for months, establishing the new serum as the #1 seller in its category in North America — and fundamentally shifting the perception of the Olay brand for a new generation of consumers.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '2rem' }}>
            <div className="img-panel"><div style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem' }}><img src="/assets/pg/pg_slide_5.avif" alt="Olay final product page mobile" /></div></div>
            <div className="img-panel"><div style={{ background: '#0d0d1a', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem' }}><img src="/assets/pg/pg_slide_6.avif" alt="Olay launch result" /></div></div>
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
