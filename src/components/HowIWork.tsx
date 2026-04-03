export function HowIWork() {
  return (
    <section
      id="how-i-work"
      style={{
        padding: '6rem 1.5rem',
        background: '#080810',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Label */}
        <p style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(99,102,241,0.7)',
          marginBottom: '1.25rem',
        }}>
          How I Work
        </p>

        {/* Body copy */}
        <div style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
          color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.85,
          display: 'flex',
          flexDirection: 'column',
          gap: '1.4rem',
          marginBottom: '3.5rem',
        }}>
          <p style={{ margin: 0 }}>
            I don't design in isolation. I work in tight loops  -  research, prototype, test, ship  -  and I use AI as a force multiplier at every stage.
          </p>
          <p style={{ margin: 0 }}>
            I start with the problem, not the pixels. That means stakeholder interviews, competitive teardowns, and data before I open Figma. When I do open Figma, I move fast  -  components, variants, real content, no Lorem Ipsum.
          </p>
          <p style={{ margin: 0 }}>
            For builds, I vibe-code alongside Claude and Cursor. I can take a design from frames to a working React app in a day. That changes what's possible in a sprint  -  and it changes what I can promise a team.
          </p>
          <p style={{ margin: 0 }}>
            I care about shipping. Not pixel-perfect handoffs that die in Jira  -  working products that real users can touch.
          </p>
        </div>

        {/* 3-step flow */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '0',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}>
          {[
            { icon: '🔍', step: 'Discover', sub: 'Research-first, always' },
            { icon: '🎨', step: 'Design', sub: 'Figma + real components' },
            { icon: '🚀', step: 'Ship', sub: 'AI-assisted, production-ready' },
          ].map(({ icon, step, sub }, i) => (
            <div key={step} style={{ display: 'flex', alignItems: 'stretch', flex: '1 1 200px' }}>
              <div style={{
                flex: 1,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: i === 0 ? '14px 0 0 14px' : i === 2 ? '0 14px 14px 0' : '0',
                borderLeft: i > 0 ? 'none' : undefined,
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                <span style={{ fontSize: '1.6rem', lineHeight: 1 }}>{icon}</span>
                <p style={{
                  margin: 0,
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#fff',
                  letterSpacing: '-0.01em',
                }}>
                  {step}
                </p>
                <p style={{
                  margin: 0,
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.5,
                }}>
                  {sub}
                </p>
              </div>
              {i < 2 && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: 'rgba(99,102,241,0.5)',
                  fontSize: '1.1rem',
                  padding: '0 0.35rem',
                }}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
