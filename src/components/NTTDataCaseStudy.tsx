import { useEffect } from 'react'

interface NTTDataCaseStudyProps {
  onBack: () => void
}

const FIGMA_PROTOTYPE = 'https://www.figma.com/proto/gfvxvKMq84W3ZppaBk9ClE/Agentic-AI-Patient-Experience-2025?page-id=26%3A5198&node-id=133-6121&p=f&viewport=454%2C383%2C0.06&t=wDdJBJoxSJrI0MXA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=133%3A6121&show-proto-sidebar=1'

export function NTTDataCaseStudy({ onBack }: NTTDataCaseStudyProps) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', paddingTop: '80px' }}>
      <div className="container">
        <button className="back-btn dark-panel" onClick={onBack} aria-label="Back to portfolio">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 2 L4 7 L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to Work
        </button>
      </div>

      {/* Hero */}
      <div className="cs-hero">
        <div className="container">
          <span className="cs-label">Case Study · AI Agent · Healthcare · Enterprise</span>
          <h1 className="cs-title">Healio: Designing an AI Agent<br/>for the Entire Patient Journey</h1>
          <p className="cs-subtitle">Replacing fragmented healthcare portals with a single conversational AI agent that handles onboarding, symptom triage, provider matching, insurance verification, and appointment booking — end to end.</p>

          <div className="metadata-table">
            <div className="meta-cell">
              <span className="meta-label">Client</span>
              <div className="meta-value">NTT Data</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Role</span>
              <div className="meta-value">Lead Product<br/>Designer</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Platform</span>
              <div className="meta-value">iOS &amp; Android</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Status</span>
              <div className="meta-value">Pre-launch<br/>Client Sales Tool</div>
            </div>
          </div>
        </div>
      </div>

      {/* Prototype CTA */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div style={{
          background: 'rgba(99,102,241,0.06)',
          border: '1px solid rgba(99,102,241,0.25)',
          borderRadius: '12px',
          padding: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Interactive Prototype</div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>50+ screens. Full agentic flow.</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>From member onboarding through symptom triage to a confirmed appointment — experience the complete Healio journey.</p>
          </div>
          <a
            href={FIGMA_PROTOTYPE}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent)',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            View Prototype
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="container">
        {/* Outcomes */}
        <div className="cs-section">
          <h2 className="cs-section-title">Project Outcomes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              { stat: '50+', label: 'Screens across onboarding, triage, provider matching, and booking flows' },
              { stat: '1 agent', label: 'Replaces 3–5 separate portals with a single conversational interface' },
              { stat: 'Active', label: 'Used by NTT Data in live enterprise healthcare sales conversations' },
              { stat: 'Full system', label: 'Reusable design system with custom chat components and inline card patterns' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '10px', padding: '1.25rem 1.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.4rem' }}>{stat}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem */}
        <div className="cs-section">
          <h2 className="cs-section-title">The Problem: Healthcare Apps Are Built for Systems, Not People</h2>
          <p className="cs-body">Most healthcare platforms mirror the structure of internal systems: separate sections for claims, appointments, messaging, records, and benefits. That model makes sense to the organization but fails the member. A patient who feels sick does not think in terms of "scheduling" and "insurance verification" — they think "I need to see a doctor."</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.75rem', marginTop: '1.5rem' }}>
            {[
              'Members navigate 3–5 different portals to complete a single healthcare task',
              'Symptom-to-appointment journeys require manual research, phone calls, and insurance verification as separate steps',
              'Onboarding new members involves multi-page forms that collect information the system already has',
              'No continuity between interactions — every session starts from zero context',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.12)', borderRadius: '8px', padding: '1rem 1.25rem' }}>
                <span style={{ color: 'rgba(239,68,68,0.6)', fontSize: '0.75rem', marginTop: '0.2rem', flexShrink: 0 }}>✕</span>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="cs-section">
          <h2 className="cs-section-title">The Approach: One Agent. Every Healthcare Task.</h2>
          <p className="cs-body">I designed Healio as a single AI agent that replaces the traditional multi-screen healthcare app with a conversational interface capable of handling complex, multi-step healthcare workflows. The core design principle: the agent should feel like talking to a knowledgeable healthcare concierge, not navigating software.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem', marginTop: '1.5rem' }}>
            {[
              { cap: 'Conversational Onboarding', desc: 'New members set up their profile, insurance, and preferences through a guided conversation — not a 12-field form' },
              { cap: 'Symptom Triage', desc: 'Healio asks targeted follow-up questions, provides a preliminary assessment, and surfaces relevant care options' },
              { cap: 'Provider Matching', desc: 'Recommends doctors based on specialty, insurance, location, and availability — all within the chat' },
              { cap: 'Insurance Verification', desc: 'Members scan their insurance card with the camera. Healio extracts the details and verifies coverage in real-time' },
              { cap: 'Appointment Booking', desc: 'End-to-end scheduling from provider selection to time slot confirmation without leaving the conversation' },
              { cap: 'Document Capture', desc: 'Physical ID and insurance card scanning integrated directly into the conversational flow' },
            ].map(({ cap, desc }) => (
              <div key={cap} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '1.25rem 1.5rem' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.5rem' }}>{cap}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Design Decisions */}
        <div className="cs-section">
          <h2 className="cs-section-title">Key Design Decisions: Building Trust into an AI Healthcare Agent</h2>
          <p className="cs-body">Healthcare is high-stakes. Users will not trust an AI agent with their health unless the interaction design earns that trust at every step. Three decisions shaped the entire product:</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              {
                num: '01',
                title: 'Structured data inside conversation, not outside it',
                body: 'When Healio surfaces doctor recommendations, insurance details, or appointment slots, they appear as rich inline cards within the chat — not as a redirect to a separate screen. This keeps the user in a single mental model. The conversation IS the interface. I designed custom card components for provider profiles, coverage breakdowns, and time slot pickers that render natively within the chat thread.',
              },
              {
                num: '02',
                title: 'Progressive disclosure over upfront interrogation',
                body: 'Traditional healthcare forms ask for everything at once. Healio asks one question at a time, confirms the answer, and moves forward. This conversational pacing reduces cognitive load and mirrors how a real healthcare professional would gather information. Each response builds on the previous one, creating a sense of momentum rather than burden.',
              },
              {
                num: '03',
                title: 'The agent explains before it acts',
                body: 'Before Healio takes any action — booking an appointment, verifying insurance, recommending a specialist — it explains what it is about to do and why. This transparency pattern is critical for healthcare AI. Users see the reasoning, not just the output. It transforms the agent from a black box into a transparent collaborator.',
              },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ display: 'flex', gap: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'rgba(99,102,241,0.3)', flexShrink: 0, lineHeight: 1 }}>{num}</div>
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text)' }}>{title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Architecture */}
        <div className="cs-section">
          <h2 className="cs-section-title">Agent Architecture: The Agentic Interaction Model</h2>
          <p className="cs-body">Healio is not a chatbot with scripted responses. It is an agent that orchestrates multiple backend services through a conversational interface. I designed the interaction model to handle the complexity of multi-step healthcare workflows while keeping the experience simple for the user.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
            {[
              { step: 'Intent Recognition', desc: 'User describes a need in natural language. Healio identifies the task type: triage, booking, benefits lookup, or onboarding.' },
              { step: 'Context Gathering', desc: 'Agent asks targeted follow-up questions to collect the minimum information needed to act.' },
              { step: 'Service Orchestration', desc: 'Healio calls the relevant backend services (provider directory, insurance verification, scheduling) and synthesizes the results.' },
              { step: 'Structured Response', desc: 'Results are presented as rich inline cards — doctor profiles, coverage details, time slots — within the conversation.' },
              { step: 'Action Confirmation', desc: 'Agent explains what it will do, user confirms, action is executed. Full transparency at every step.' },
            ].map(({ step, desc }, i) => (
              <div key={step} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--accent)', flexShrink: 0 }}>{i + 1}</div>
                <div style={{ paddingTop: '0.25rem' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text)' }}>{step} — </span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tradeoffs / Reflection */}
        <div className="cs-section">
          <h2 className="cs-section-title">What I Learned About Designing AI Agents</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
            {[
              {
                decision: 'Conversation is a UI pattern, not a gimmick',
                detail: 'For complex, multi-step workflows like healthcare, a conversational interface is not a novelty — it is genuinely better than forms and menus. The key is designing the agent to handle branching, context-switching, and error recovery gracefully.',
                tradeoff: 'Conversational UX is harder to prototype and test than screen-based flows. You are not just designing screens — you are designing dialogue trees, edge cases, and failure states in natural language.',
              },
              {
                decision: 'Trust is earned through transparency, not polish',
                detail: 'In healthcare, users do not trust AI because it looks good. They trust it because they can see what it is doing and why. Every design decision in Healio prioritized explainability over aesthetics.',
                tradeoff: 'Adding explanation steps slows down the interaction. The tradeoff was worth it: for a product handling a user\'s health, reduced speed is a better outcome than reduced trust.',
              },
              {
                decision: 'Structured data and conversation are not opposites',
                detail: 'The biggest design challenge was rendering complex information — provider profiles, insurance breakdowns, appointment calendars — inside a chat thread without breaking the conversational flow.',
                tradeoff: 'Custom inline components took significantly longer to design than standard list views. But redirecting users to separate screens would have destroyed the single-interface promise of the product.',
              },
            ].map(({ decision, detail, tradeoff }) => (
              <div key={decision} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '1.75rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.75rem' }}>{decision}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text)', lineHeight: 1.7, marginBottom: '0.75rem' }}>{detail}</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7 }}><strong style={{ color: 'var(--text)' }}>Tradeoff:</strong> {tradeoff}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Outcome */}
        <div className="cs-section" style={{ marginBottom: '6rem' }}>
          <h2 className="cs-section-title">The Outcome: A Product Vision That Sells</h2>
          <p className="cs-body">This was a strategic design engagement. The deliverable was a complete product vision and interactive prototype that NTT Data uses to pitch enterprise healthcare clients on the future of AI-powered patient experience.</p>
          <p className="cs-body" style={{ marginTop: '1rem' }}>The Healio prototype demonstrated that a single conversational agent could credibly replace the fragmented multi-portal model that dominates enterprise healthcare today — from first contact through confirmed appointment. The result is a product concept now active in NTT Data's enterprise sales pipeline.</p>

          <div style={{ marginTop: '2.5rem', background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: '12px', padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>See It In Action</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              The full 50+ screen prototype covers every flow: conversational onboarding, symptom triage, provider matching, insurance verification, and appointment booking.
            </p>
            <a
              href={FIGMA_PROTOTYPE}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--accent)',
                color: '#fff',
                padding: '0.875rem 2rem',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              View Interactive Prototype
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
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
