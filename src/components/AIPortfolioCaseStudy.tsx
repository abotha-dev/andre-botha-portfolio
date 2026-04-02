import { useEffect } from 'react'

interface AIPortfolioCaseStudyProps {
  onBack: () => void
}

export function AIPortfolioCaseStudy({ onBack }: AIPortfolioCaseStudyProps) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="cs-page-shell" style={{ paddingTop: '80px' }}>
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
          <span className="cs-label">Case Study · AI Orchestration · Vibe Coding · Solo Build</span>
          <h1 className="cs-title">Building This Portfolio<br/>With an AI Agent Team</h1>
          <p className="cs-subtitle">How I replaced a traditional design-to-dev handoff with a 24/7 autonomous agent workforce — and shipped a production portfolio in days, not weeks.</p>

          <div className="metadata-table">
            <div className="meta-cell">
              <span className="meta-label">Role</span>
              <div className="meta-value">Designer<br/>Orchestrator</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Stack</span>
              <div className="meta-value">OpenClaw · Claude<br/>Cursor · Vercel</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Timeline</span>
              <div className="meta-value">Days, not weeks</div>
            </div>
            <div className="meta-cell">
              <span className="meta-label">Status</span>
              <div className="meta-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', flexShrink: 0, display: 'inline-block' }}></span>
                You're looking at it
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Visual — Agent Architecture Diagram */}
      <div className="container" style={{ marginBottom: '4rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(15,15,25,0.95) 0%, rgba(20,20,35,0.98) 100%)',
          border: '1px solid rgba(99,102,241,0.2)',
          borderRadius: '16px',
          padding: '3rem 2.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr auto 1fr',
          alignItems: 'center',
          gap: '1rem',
          overflowX: 'auto',
        }}>
          {/* Rex Node */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '18px',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))',
              border: '2px solid rgba(99,102,241,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 0.75rem',
              fontSize: '1.75rem'
            }}>🦾</div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>Rex</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Orchestrator</div>
          </div>

          {/* Arrow */}
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none" style={{ flexShrink: 0 }}>
            <path d="M0 8h28M20 2l8 6-8 6" stroke="rgba(99,102,241,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Dev Agent Node */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '18px',
              background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(16,185,129,0.1))',
              border: '2px solid rgba(34,197,94,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 0.75rem',
              fontSize: '1.75rem'
            }}>💻</div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>Dev Agent</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Writes code</div>
          </div>

          {/* Arrow */}
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none" style={{ flexShrink: 0 }}>
            <path d="M0 8h28M20 2l8 6-8 6" stroke="rgba(99,102,241,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {/* Vercel Node */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: '72px', height: '72px', borderRadius: '18px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))',
              border: '2px solid rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 0.75rem'
            }}>
              <svg width="28" height="28" viewBox="0 0 76 65" fill="rgba(255,255,255,0.7)">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"/>
              </svg>
            </div>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>Vercel</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>Auto-deploys</div>
          </div>
        </div>
      </div>

      {/* Outcomes */}
      <div className="container">
        <div className="cs-section">
          <h2 className="cs-section-title">What This Proves</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              { stat: '3 agents', label: 'Rex orchestrates Dev Agent + Content Agent — no human handoffs' },
              { stat: '24/7', label: 'Agents run autonomously while I sleep, work, or ideate' },
              { stat: '0 handoffs', label: 'Design intent → production code without a dev team' },
              { stat: '4× faster', label: 'Ship velocity vs. traditional solo designer workflow' },
            ].map(({ stat, label }) => (
              <div key={stat} style={{ background: 'rgba(99,102,241,0.06)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: '10px', padding: '1.25rem 1.5rem' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.4rem' }}>{stat}</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Problem */}
      <div className="container">
        <div className="cs-section">
          <h2 className="cs-section-title">The Problem With "Designer Portfolios"</h2>
          <p className="cs-body">Most design portfolios are a graveyard of PDFs and static screenshots. They show what you made — not how you think, or how fast you can ship.</p>
          <p className="cs-body">The bigger issue: as a designer who builds, I kept hitting the same ceiling. I could design anything. I could spec it perfectly. But execution velocity was bottlenecked by the traditional design → dev → review loop — even when I was doing both sides myself.</p>
          <p className="cs-body">I wanted to break that ceiling. Not just for the portfolio — for everything I build.</p>
        </div>
      </div>

      {/* The Approach */}
      <div className="container">
        <div className="cs-section">
          <h2 className="cs-section-title">The Approach: Agents as Employees</h2>
          <p className="cs-body">I treat AI agents the way a startup treats its first hires. Each one has a defined role, a workspace, a communication channel, and standing operating procedures. They don't just respond to prompts — they run autonomously on schedules, react to triggers, and hand work off to each other.</p>

          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                role: '🦾 Rex — Orchestrator',
                desc: 'The central brain. Reads context, routes tasks, monitors output quality, writes to memory, manages the Todoist board, and posts status to Discord. Runs 24/7 via heartbeat polling.',
              },
              {
                role: '💻 Dev Agent — Builder',
                desc: 'Scoped to a single repo. Gets a brief from Rex (design reference + component spec), writes the TypeScript, and pushes to GitHub. Vercel auto-deploys on every push.',
              },
              {
                role: '✍️ Content Agent — Writer',
                desc: "Handles LinkedIn posts, cover letters, case study copy, and outreach drafts. Gets topic + angle from Rex, produces the content, posts draft to Discord for Andre's review.",
              },
            ].map(({ role, desc }) => (
              <div key={role} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
                display: 'flex', gap: '1rem'
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>{role}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Workflow */}
      <div className="container">
        <div className="cs-section">
          <h2 className="cs-section-title">How It Actually Works</h2>
          <p className="cs-body">Here's the real workflow behind this portfolio — no fluff, no hypotheticals. This is the exact process that produced every component you're looking at.</p>

          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { step: '01', title: 'Design intent in plain language', body: "I describe what I want in a Telegram message or Discord chat. \"Dark hero, animated product preview, no stock photos — differentiate from Togal.AI's stock photo hero.\" That's the brief. Rex captures it and writes it to a design reference file in the repo." },
              { step: '02', title: 'Rex compiles the spec', body: 'Rex reads the brief, cross-references the existing codebase, identifies which components need to change, and writes a structured task for Dev Agent. Not just "update the hero" — a complete spec with props, colour tokens, and acceptance criteria.' },
              { step: '03', title: 'Dev Agent writes the code', body: 'Dev Agent gets the spec, opens the repo in Cursor (with Claude Sonnet as the model), implements the changes, and pushes to GitHub. It adds a progress comment to the Todoist ticket and pings #portfolio when done.' },
              { step: '04', title: 'Vercel deploys automatically', body: 'GitHub push triggers a Vercel preview deployment. Rex checks the deploy status via the Vercel MCP. If it passes — done. If there\'s a build error — Rex reads the log, diagnoses the issue, and hands the fix back to Dev Agent.' },
              { step: '05', title: 'Rex closes the loop', body: 'Rex marks the ticket done in Todoist, posts a summary to Discord, and updates MEMORY.md. The next heartbeat picks up the next task automatically.' },
            ].map(({ step, title, body }, i, arr) => (
              <div key={step} style={{ display: 'flex', gap: '1.5rem', position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(99,102,241,0.15)',
                    border: '2px solid rgba(99,102,241,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent)',
                    fontFamily: 'var(--font-mono)', flexShrink: 0,
                    zIndex: 1
                  }}>{step}</div>
                  {i < arr.length - 1 && (
                    <div style={{ width: '2px', flex: 1, background: 'rgba(99,102,241,0.15)', margin: '4px 0' }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < arr.length - 1 ? '1.75rem' : '0', flex: 1 }}>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem', paddingTop: '0.4rem' }}>{title}</div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Decisions */}
      <div className="container">
        <div className="cs-section">
          <h2 className="cs-section-title">Key Technical Decisions</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              {
                decision: 'OpenClaw as orchestration layer',
                why: 'Persistent memory across sessions, heartbeat scheduling, multi-agent routing, and Discord + Telegram integration — in one config file. Nothing else comes close for solo operators.',
              },
              {
                decision: 'React + TypeScript, no CMS',
                why: 'Case studies are code. Agents can read, edit, and push changes directly — no login, no GUI, no bottleneck. Vercel redeploys automatically on every push.',
              },
              {
                decision: 'Claude Sonnet for all code tasks',
                why: 'Haiku/mini for status checks and routing, Sonnet for anything involving file edits or multi-step reasoning. Model routing = cost discipline without sacrificing quality.',
              },
              {
                decision: 'Todoist as shared task state',
                why: "Both Rex and Dev Agent write to the same board. Andre checks from his phone. One source of truth — no Slack threads, no emails, no \"where are we on this?\"",
              },
            ].map(({ decision, why }) => (
              <div key={decision} style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '1.25rem 1.5rem',
              }}>
                <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>Decision</div>
                <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.5rem' }}>{decision}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{why}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What I Learned */}
      <div className="container">
        <div className="cs-section">
          <h2 className="cs-section-title">What I Actually Learned</h2>
          <p className="cs-body">The hardest part wasn't the code. It was designing the agent system — their roles, their handoffs, their memory architecture. Poorly scoped agents are worse than no agents: they hallucinate tasks, repeat work, and create noise.</p>
          <p className="cs-body">The unlock was treating agents like junior employees, not magic tools. Give them a clear role, a workspace, a way to communicate status, and a definition of "done." When you do that, they compound. Every task one agent completes creates context that makes the next agent faster.</p>
          <p className="cs-body" style={{ marginBottom: 0 }}>This portfolio is the proof of concept. The same architecture runs Takeoff.ai outreach, competitive intel, job applications, and content distribution. The build is the case study.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="container" style={{ marginBottom: '6rem' }}>
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
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Open Source</div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.4rem' }}>This portfolio is public on GitHub</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>Every component, every commit, every agent instruction — available to inspect. The build process is part of the portfolio.</p>
          </div>
          <a
            href="https://github.com/scruffyjerk/andre-botha-portfolio"
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
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            View on GitHub
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
