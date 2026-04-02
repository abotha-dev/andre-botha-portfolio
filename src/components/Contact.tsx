import { useFadeUp } from '../hooks/useFadeUp'
import { useState } from 'react'

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ENDPOINT as string

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const content = useFadeUp()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!FORMSPREE || FORMSPREE.includes('YOUR_FORM_ID')) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" aria-label="Contact">
      <div className="container">
        <div className="contact-glow" aria-hidden="true"></div>
        <div ref={content.ref} className={`contact-inner fade-up${content.visible ? ' visible' : ''}`}>
          <span className="section-label" style={{ textAlign: 'center', display: 'block', marginBottom: '20px' }}>Contact</span>
          <h2 className="contact-heading">Let's work together.</h2>
          <p className="contact-sub">I'm currently open to Lead and Principal Product Designer roles, particularly at AI-first companies. If that sounds like a fit, I'd love to hear from you.</p>

          {status === 'success' ? (
            <div style={{
              marginTop: '2rem',
              padding: '1.5rem 2rem',
              borderRadius: '12px',
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.25)',
              textAlign: 'center',
              maxWidth: '560px',
              margin: '2rem auto 0',
            }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✓</div>
              <p style={{ color: 'rgba(34,197,94,0.9)', fontWeight: 600, margin: 0 }}>Message sent! I'll get back to you soon.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                marginTop: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: '560px',
                margin: '2rem auto 0',
                textAlign: 'left',   // labels left-aligned
              }}
            >
              {/* Name + Email row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="cf-name" style={labelStyle}>Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your name"
                    style={inputStyle}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label htmlFor="cf-email" style={labelStyle}>Email</label>
                  <input
                    id="cf-email"
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label htmlFor="cf-message" style={labelStyle}>Message</label>
                <textarea
                  id="cf-message"
                  required
                  rows={5}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Tell me about the role or project..."
                  style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                />
              </div>

              {status === 'error' && (
                <p style={{ fontSize: '0.85rem', color: 'rgba(239,68,68,0.8)', margin: 0 }}>
                  Something went wrong. Please try again or reach out on LinkedIn.
                </p>
              )}

              {/* CTA row: Send + LinkedIn only */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'stretch', marginTop: '4px' }}>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary"
                  style={{
                    opacity: status === 'sending' ? 0.6 : 1,
                    cursor: status === 'sending' ? 'wait' : 'pointer',
                  }}
                >
                  {status === 'sending' ? 'Sending...' : 'Send message'}
                </button>

                <a
                  href="https://www.linkedin.com/in/bothaandre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkedInStyle}
                >
                  View LinkedIn
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.8rem',
  color: 'var(--text-2)',
  fontWeight: 500,
  fontFamily: "'Geist Sans', sans-serif",
}

const inputStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.12)',
  color: 'var(--text-1)',
  fontSize: '0.9rem',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: "'Geist Sans', sans-serif",
}

const linkedInStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '12px 24px',   // matches .btn-primary (12px 24px)
  borderRadius: '6px',
  border: '1px solid rgba(255,255,255,0.15)',
  color: 'rgba(255,255,255,0.7)',
  fontSize: '14px',
  fontWeight: 400,
  fontFamily: "'Geist Sans', sans-serif",
  textDecoration: 'none',
  letterSpacing: '-0.01em',
  lineHeight: '1.4',      // same implicit line-height as btn-primary
  transition: 'border-color 0.15s, color 0.15s',
  boxSizing: 'border-box',
}
