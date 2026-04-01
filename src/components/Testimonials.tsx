import { useState } from 'react'
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
    quote: "Andre brought a level of strategic clarity to our Olay.com relaunch that changed how we thought about the entire project. He pushed us to lead with science and ingredient education instead of discounts — the launch generated the highest waitlist signups in P&G history and sold out in under two hours.",
    name: "Brittany Canfield",
    title: "Senior Director of Digital Commerce",
    company: "Procter & Gamble",
    initials: "BC",
  },
  {
    quote: "Andre designed for a problem most designers would have oversimplified. He understood that our users needed a practical cash flow tool before they'd ever trust a credit product, and built exactly that. The design system he delivered has saved our dev team countless hours.",
    name: "Stefan Pfeifer",
    title: "Head of Product",
    company: "CreditConnection",
    initials: "SP",
  },
  {
    quote: "Andre designed something genuinely difficult: a healthcare AI agent that users actually trust. The single conversational interface instead of bouncing between screens was not obvious at the time — it's now the thing every stakeholder highlights. Healio consistently lands in our enterprise sales conversations.",
    name: "Tarana Rawat",
    title: "Principal Design Lead",
    company: "NTT Data",
    initials: "TR",
  },
]

export function Testimonials() {
  const label = useFadeUp()
  const heading = useFadeUp()
  const card = useFadeUp()
  const [active, setActive] = useState(0)

  const t = testimonials[active]

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((i) => (i + 1) % testimonials.length)

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

        <div
          ref={card.ref}
          className={`fade-up${card.visible ? ' visible' : ''}`}
          style={{ marginTop: '3rem' }}
        >
          {/* Card */}
          <div
            style={{
              background: 'rgba(99,102,241,0.05)',
              border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '14px',
              padding: '2.5rem 2.5rem 2rem',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            {/* Quote */}
            <div>
              <div
                style={{
                  fontSize: '2.5rem',
                  lineHeight: 1,
                  color: 'rgba(99,102,241,0.4)',
                  fontFamily: 'Georgia, serif',
                  marginBottom: '-0.25rem',
                }}
              >
                "
              </div>
              <blockquote
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  color: 'rgba(255,255,255,0.85)',
                  fontStyle: 'normal',
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {t.quote}
              </blockquote>
            </div>

            {/* Attribution + nav row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              {/* Person */}
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
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: '#fff' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.15rem' }}>
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>

              {/* Dots + arrows */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {/* Dots */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      style={{
                        width: i === active ? '18px' : '6px',
                        height: '6px',
                        borderRadius: '999px',
                        background: i === active ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'width 0.25s ease, background 0.2s ease',
                      }}
                    />
                  ))}
                </div>

                {/* Prev / Next */}
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '6px',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                  }}
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '6px',
                    width: '32px',
                    height: '32px',
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                  }}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
