import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

export function About() {
  const label = useFadeUp()
  const heading = useFadeUp()
  const content = useFadeUp()
  const [photoLoaded, setPhotoLoaded] = useState(false)

  return (
    <section id="about" aria-label="About Andre Botha">
      <div className="container">
        <span ref={label.ref} className={`section-label fade-up${label.visible ? ' visible' : ''}`}>About</span>
        <h2 ref={heading.ref} className={`section-heading fade-up${heading.visible ? ' visible' : ''}`}>The designer who ships.</h2>

        <div ref={content.ref} className={`about-grid fade-up${content.visible ? ' visible' : ''}`}>
          <div className="about-photo" aria-label="Photo of Andre Botha">
            {!photoLoaded && (
              <div className="photo-placeholder-content">
                <div className="photo-placeholder-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="18" r="9" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5"/>
                    <path d="M6 42 C6 30 13 25 24 25 C35 25 42 30 42 42" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="none"/>
                  </svg>
                </div>
              </div>
            )}
            <img
              src="/assets/andre-about.jpg"
              alt="Andre Botha — AI-Native Product Designer"
              onLoad={() => setPhotoLoaded(true)}
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', zIndex: 1,
                display: photoLoaded ? 'block' : 'none',
              }}
            />
            <div className="photo-vignette"></div>
          </div>

          <div className="about-content">
            <div className="about-bio-text">
              <p>I'm a product designer with 8+ years of experience, most recently focused on AI-native product development. I've shipped enterprise design systems at Fortune 500 companies (NTT Data, P&G) and built AI SaaS products from scratch as a solo founder.</p>
              <p>My current focus is <strong>Takeoff.ai</strong> — an AI-powered construction estimating tool I conceived, designed, and built end-to-end using Cursor, Claude, Supabase, and Vercel. The hard part wasn't the build. It was designing for an AI that's only 70–80% accurate, and earning trust from a tech-skeptical audience.</p>
              <p>I'm looking for a Lead or Principal Product Designer role at a company where design and engineering work closely together — ideally on AI products that solve real problems for real people.</p>
            </div>

            <div className="credentials-row">
              <div className="cred-item">
                <div className="cred-metric">8+</div>
                <div className="cred-label">Years Product Design</div>
              </div>
              <div className="cred-item">
                <div className="cred-metric">Fortune 500</div>
                <div className="cred-label">NTT Data, P&G</div>
              </div>
              <div className="cred-item">
                <div className="cred-metric">Solo Founder</div>
                <div className="cred-label">Takeoff.ai</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
