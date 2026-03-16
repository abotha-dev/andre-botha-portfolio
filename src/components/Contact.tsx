import { useFadeUp } from '../hooks/useFadeUp'

export function Contact() {
  const content = useFadeUp()

  return (
    <section id="contact" aria-label="Contact">
      <div className="container">
        <div className="contact-glow" aria-hidden="true"></div>
        <div ref={content.ref} className={`contact-inner fade-up${content.visible ? ' visible' : ''}`}>
          <span className="section-label" style={{textAlign:'center',display:'block',marginBottom:'20px'}}>Contact</span>
          <h2 className="contact-heading">Let's work together.</h2>
          <p className="contact-sub">I'm currently open to Lead and Principal Product Designer roles, particularly at AI-first companies. If that sounds like a fit, I'd love to hear from you.</p>
          <div className="contact-ctas">
            <a href="mailto:andre@andrebot.com" className="btn-primary">Send me an email</a>
            <a href="https://www.linkedin.com/in/bothaandre/" target="_blank" rel="noopener noreferrer" className="btn-ghost-hero">View LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  )
}
