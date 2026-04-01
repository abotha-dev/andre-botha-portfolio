import { useFadeUp } from '../hooks/useFadeUp'

interface Testimonial {
  quote: string
  name: string
  title: string
  company: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    quote: "Andre brought a level of strategic clarity to our Olay.com relaunch that changed how we thought about the entire project. He pushed us to lead with science and ingredient education instead of discounts, and the results were impossible to argue with. The launch generated the highest waitlist signups in P&G history and sold out in under two hours.",
    name: "Brittany Canfield",
    title: "Senior Director of Digital Commerce",
    company: "Procter & Gamble",
    initials: "BC",
  },
  {
    quote: "What impressed me most about working with Andre was his ability to design for a problem most designers would have oversimplified. He understood that our users needed a practical cash flow tool before they would ever trust a credit product, and he built exactly that. The design system he delivered alongside the product has saved our dev team countless hours and continues to pay dividends.",
    name: "Stefan Pfeifer",
    title: "Head of Product",
    company: "CreditConnection",
    initials: "SP",
  },
  {
    quote: "Andre designed something genuinely difficult: a healthcare AI agent that users actually trust. The decision to keep everything inside a single conversational interface rather than bouncing users between screens was not obvious at the time, but it is now the thing every stakeholder highlights when we demo the product. Healio is actively used in our enterprise sales conversations and consistently lands.",
    name: "Tarana Rawat",
    title: "Principal Design Lead",
    company: "NTT Data",
    initials: "TR",
  },
]

const cardBase: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '12px',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '1.5rem',
}

const quoteMarkStyle: React.CSSProperties = {
  fontSize: '3rem',
  lineHeight: 1,
  color: 'rgba(99,102,241,0.4)',
  fontFamily: 'Georgia, serif',
  marginBottom: '-0.5rem',
}

export function Testimonials() {
  const label = useFadeUp()
  const heading = useFadeUp()
  const grid = useFadeUp()

  const [featured, ...rest] = testimonials

  return (
    <section id="testimonials" aria-label="Testimonials" style={{ padding: '6rem 0' }}>
      <div className="container">
        <span
          ref={label.ref}
          className={`section-label fade-up${label.visible ? ' visible' : ''}`}
        >
          Testimonials
        </span>
        <h2
          ref={heading.ref}
          className={`section-heading fade-up${heading.visible ? ' visible' : ''}`}
        >
          What people say.
        </h2>

        {/* Bento grid: 1 large featured + 2 smaller */}
        <div
          ref={grid.ref}
          className={`fade-up${grid.visible ? ' visible' : ''}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridTemplateRows: 'auto',
            gap: '1rem',
            marginTop: '3rem',
          }}
        >
          {/* Featured card — spans 2 cols on desktop */}
          <div
            style={{
              ...cardBase,
              gridColumn: 'span 2',
              background: 'rgba(99,102,241,0.05)',
              border: '1px solid rgba(99,102,241,0.15)',
            }}
          >
            <div>
              <div style={quoteMarkStyle}>"</div>
              <blockquote
                style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.85)',
                  fontStyle: 'normal',
                  margin: 0,
                }}
              >
                {featured.quote}
              </blockquote>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(99,102,241,0.2)',
                  border: '1px solid rgba(99,102,241,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'rgba(99,102,241,0.9)',
                  flexShrink: 0,
                  letterSpacing: '0.04em',
                }}
              >
                {featured.initials}
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#fff' }}>
                  {featured.name}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.15rem' }}>
                  {featured.title}, {featured.company}
                </div>
              </div>
            </div>
          </div>

          {/* Two smaller cards */}
          {rest.map((t) => (
            <div key={t.name} style={cardBase}>
              <div>
                <div style={quoteMarkStyle}>"</div>
                <blockquote
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.75)',
                    fontStyle: 'normal',
                    margin: 0,
                  }}
                >
                  {t.quote}
                </blockquote>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.5)',
                    flexShrink: 0,
                    letterSpacing: '0.04em',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.85rem', color: '#fff' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.15rem' }}>
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
