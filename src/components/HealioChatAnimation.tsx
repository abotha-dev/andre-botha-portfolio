import { useEffect, useRef, useState } from 'react'

type Pill = { label: string; selected?: boolean; fading?: boolean }

type Message =
  | { id: string; kind: 'bot'; text: string }
  | { id: string; kind: 'typing' }
  | { id: string; kind: 'pills'; pills: Pill[] }
  | { id: string; kind: 'consent-card' }

let nextId = 0
const mkId = () => `msg-${++nextId}`

type Flag = { cancelled: boolean }

const wait = (ms: number, flag: Flag) =>
  new Promise<void>((resolve) => {
    const start = Date.now()
    const tick = () => {
      if (flag.cancelled) return resolve()
      const elapsed = Date.now() - start
      if (elapsed >= ms) return resolve()
      setTimeout(tick, Math.min(50, ms - elapsed))
    }
    tick()
  })

const FINAL_STATIC_STATE: Message[] = [
  { id: 'static-bot-1', kind: 'bot', text: 'Hello, Sarah. How can I help you?' },
  {
    id: 'static-pills-1',
    kind: 'pills',
    pills: [{ label: 'Smart Account Setup', selected: true }],
  },
  {
    id: 'static-bot-2',
    kind: 'bot',
    text: "To create your account, Sarah, I'll need to collect some personal details from you, and you can stop anytime.",
  },
  { id: 'static-card-1', kind: 'consent-card' },
  { id: 'static-bot-3', kind: 'bot', text: "Would you like to use your driver's license or passport?" },
  { id: 'static-pills-2', kind: 'pills', pills: [{ label: "Driver's License", selected: true }] },
  { id: 'static-bot-4', kind: 'bot', text: 'Identity verification ready. Scan your ID or use voice input.' },
  {
    id: 'static-pills-3',
    kind: 'pills',
    pills: [{ label: 'Scan ID Card' }, { label: 'Voice Input' }],
  },
]

export function HealioChatAnimation() {
  const [messages, setMessages] = useState<Message[]>([])
  const stageRef = useRef<HTMLDivElement>(null)
  const prevHeightRef = useRef(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Smooth scroll-shift: when the stage grows, translate by delta then animate back to 0.
  useEffect(() => {
    if (reducedMotion) return
    const stage = stageRef.current
    if (!stage) return
    const newH = stage.scrollHeight
    const delta = newH - prevHeightRef.current
    if (delta > 0 && prevHeightRef.current > 0) {
      stage.style.transition = 'none'
      stage.style.transform = `translateY(${delta}px)`
      // Force layout flush, then animate back.
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      stage.offsetHeight
      requestAnimationFrame(() => {
        stage.style.transition = 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)'
        stage.style.transform = 'translateY(0)'
      })
    }
    prevHeightRef.current = newH
  }, [messages, reducedMotion])

  useEffect(() => {
    if (reducedMotion) {
      setMessages(FINAL_STATIC_STATE)
      return
    }
    const flag: Flag = { cancelled: false }
    const guardedSet = (updater: (m: Message[]) => Message[]) => {
      if (flag.cancelled) return
      setMessages(updater)
    }

    const pushTyping = async (delayMs: number) => {
      const id = mkId()
      guardedSet((m) => [...m, { id, kind: 'typing' }])
      await wait(delayMs, flag)
      if (flag.cancelled) return
      guardedSet((m) => m.filter((x) => x.id !== id))
    }

    const pushBot = (text: string) => {
      guardedSet((m) => [...m, { id: mkId(), kind: 'bot', text }])
    }

    const cascadePills = async (labels: string[]) => {
      const id = mkId()
      guardedSet((m) => [...m, { id, kind: 'pills', pills: [] }])
      for (let i = 0; i < labels.length; i++) {
        if (flag.cancelled) return id
        guardedSet((m) =>
          m.map((x) =>
            x.id === id && x.kind === 'pills'
              ? { ...x, pills: [...x.pills, { label: labels[i] }] }
              : x,
          ),
        )
        await wait(160, flag)
      }
      return id
    }

    const selectAndFade = async (pillsId: string, selectedIndex: number, fadeMs: number) => {
      guardedSet((m) =>
        m.map((x) =>
          x.id === pillsId && x.kind === 'pills'
            ? {
                ...x,
                pills: x.pills.map((p, i) =>
                  i === selectedIndex ? { ...p, selected: true } : { ...p, fading: true },
                ),
              }
            : x,
        ),
      )
      await wait(fadeMs, flag)
      if (flag.cancelled) return
      guardedSet((m) =>
        m.map((x) =>
          x.id === pillsId && x.kind === 'pills'
            ? { ...x, pills: x.pills.filter((p) => p.selected) }
            : x,
        ),
      )
    }

    const pushConsentCard = () => {
      guardedSet((m) => [...m, { id: mkId(), kind: 'consent-card' }])
    }

    const runLoop = async () => {
      while (!flag.cancelled) {
        guardedSet(() => [])
        prevHeightRef.current = 0
        await wait(700, flag)
        if (flag.cancelled) return

        await pushTyping(900)
        if (flag.cancelled) return
        pushBot('Hello, Sarah. How can I help you?')
        await wait(500, flag)
        if (flag.cancelled) return

        const pillsId1 = await cascadePills([
          'Smart Account Setup',
          'Check your Symptoms',
          'Manage Prescriptions',
          'Post-Visit',
          'Pre-Visit',
        ])
        if (flag.cancelled) return
        await wait(1100, flag)
        if (flag.cancelled) return

        await selectAndFade(pillsId1, 0, 360)
        if (flag.cancelled) return
        await wait(400, flag)

        await pushTyping(900)
        if (flag.cancelled) return
        pushBot(
          "To create your account, Sarah, I'll need to collect some personal details from you, and you can stop anytime.",
        )
        await wait(500, flag)
        if (flag.cancelled) return

        pushConsentCard()
        await wait(2400, flag)
        if (flag.cancelled) return

        await pushTyping(900)
        if (flag.cancelled) return
        pushBot("Would you like to use your driver's license or passport?")
        await wait(500, flag)
        if (flag.cancelled) return

        const pillsId2 = await cascadePills(["Driver's License", 'Passport'])
        if (flag.cancelled) return
        await wait(1100, flag)
        if (flag.cancelled) return

        await selectAndFade(pillsId2, 0, 360)
        if (flag.cancelled) return
        await wait(400, flag)

        await pushTyping(900)
        if (flag.cancelled) return
        pushBot('Identity verification ready. Scan your ID or use voice input.')
        await wait(500, flag)
        if (flag.cancelled) return

        await cascadePills(['Scan ID Card', 'Voice Input'])
        if (flag.cancelled) return

        await wait(2500, flag)
      }
    }

    runLoop()

    return () => {
      flag.cancelled = true
    }
  }, [reducedMotion])

  return (
    <div className="healio-chat-frame" role="img" aria-label="Animated demo of the Healio onboarding conversation: greeting, smart account setup selection, privacy consent, and identity verification.">
      <div className="healio-chat-stage" ref={stageRef}>
        {messages.map((msg) => (
          <MessageItem key={msg.id} msg={msg} />
        ))}
      </div>
      <style>{HEALIO_CHAT_CSS}</style>
    </div>
  )
}

function MessageItem({ msg }: { msg: Message }) {
  if (msg.kind === 'bot') {
    return (
      <div className="hc-row hc-row-bot hc-anim-pop">
        <div className="hc-bot-bubble">{msg.text}</div>
      </div>
    )
  }
  if (msg.kind === 'typing') {
    return (
      <div className="hc-row hc-row-bot hc-anim-pop">
        <div className="hc-bot-bubble hc-typing">
          <span className="hc-typing-dot" />
          <span className="hc-typing-dot" />
          <span className="hc-typing-dot" />
        </div>
      </div>
    )
  }
  if (msg.kind === 'pills') {
    return (
      <div className="hc-row hc-row-user">
        <div className="hc-pill-cluster">
          {msg.pills.map((p) => (
            <button
              key={p.label}
              type="button"
              tabIndex={-1}
              className={[
                'hc-pill',
                'hc-anim-pop',
                p.selected ? 'hc-pill-selected' : '',
                p.fading ? 'hc-pill-fading' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
    )
  }
  // consent-card
  return (
    <div className="hc-row hc-row-user hc-anim-pop">
      <div className="hc-card">
        <div className="hc-card-title">Privacy &amp; Consent</div>
        <div className="hc-card-divider" />
        <div className="hc-card-body">
          I&apos;ll collect your name, date of birth, and contact information.
        </div>
        <div className="hc-card-stats">
          <div className="hc-card-stat">
            <div className="hc-card-stat-title">HIPAA Compliant</div>
            <div className="hc-card-stat-sub">Your health information is protected</div>
          </div>
          <div className="hc-card-stat">
            <div className="hc-card-stat-title">2-3 Minutes</div>
            <div className="hc-card-stat-sub">I&apos;ll do most of the work</div>
          </div>
        </div>
        <button type="button" tabIndex={-1} className="hc-card-cta">
          Agree &amp; Continue
        </button>
      </div>
    </div>
  )
}

const HEALIO_CHAT_CSS = `
.healio-chat-frame {
  max-width: 400px;
  width: 100%;
  height: 560px;
  margin: 0 auto;
  background: #F3F4F6;
  border-radius: 16px;
  border: 0.5px solid rgba(0,0,0,0.08);
  box-shadow: 0 20px 40px -20px rgba(0,0,0,0.15);
  overflow: hidden;
  position: relative;
  font-family: var(--font-body, system-ui, -apple-system, sans-serif);
  color: #0A2540;
  -webkit-font-smoothing: antialiased;
}
.healio-chat-stage {
  position: absolute;
  inset: 0;
  padding: 24px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
  will-change: transform;
}
.hc-row {
  display: flex;
  width: 100%;
}
.hc-row-bot { justify-content: flex-start; }
.hc-row-user { justify-content: flex-end; }

.hc-bot-bubble {
  background: #DAEAF2;
  color: #0A2540;
  font-size: 14px;
  line-height: 1.45;
  padding: 12px 16px;
  border-radius: 16px 16px 16px 4px;
  max-width: 85%;
}
.hc-typing {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 14px 16px;
}
.hc-typing-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #5C7A99;
  animation: hc-bounce 1.2s ease-in-out infinite;
}
.hc-typing-dot:nth-child(2) { animation-delay: 0.15s; }
.hc-typing-dot:nth-child(3) { animation-delay: 0.30s; }

.hc-pill-cluster {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
  max-width: 92%;
}
.hc-pill {
  font: inherit;
  font-size: 13px;
  line-height: 1.2;
  padding: 10px 16px;
  border-radius: 14px 14px 4px 14px;
  background: #FFFFFF;
  border: 1.5px solid #0067B1;
  color: #0067B1;
  cursor: default;
  white-space: nowrap;
  transition: background 240ms ease, color 240ms ease, opacity 360ms ease, transform 360ms ease;
}
.hc-pill-selected {
  background: #0067B1;
  color: #FFFFFF;
}
.hc-pill-fading {
  opacity: 0;
  transform: translateY(4px);
  pointer-events: none;
}

.hc-card {
  background: #FFFFFF;
  border: 0.5px solid rgba(0,0,0,0.08);
  border-radius: 14px;
  padding: 16px;
  width: 92%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 12px -8px rgba(0,0,0,0.12);
}
.hc-card-title {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #0A2540;
}
.hc-card-divider {
  height: 1px;
  background: rgba(0,0,0,0.06);
  margin: 0 -4px;
}
.hc-card-body {
  font-size: 12.5px;
  line-height: 1.45;
  color: #0A2540;
  text-align: center;
}
.hc-card-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.hc-card-stat {
  background: #F3F4F6;
  border-radius: 10px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.hc-card-stat-title {
  font-size: 12px;
  font-weight: 600;
  color: #0A2540;
}
.hc-card-stat-sub {
  font-size: 10.5px;
  line-height: 1.35;
  color: #5C7A99;
}
.hc-card-cta {
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  padding: 11px 16px;
  border-radius: 10px;
  background: #0067B1;
  color: #FFFFFF;
  border: none;
  cursor: default;
}

.hc-anim-pop {
  animation: hc-pop 400ms cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes hc-pop {
  0%   { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes hc-bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30%           { transform: translateY(-4px); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .hc-anim-pop { animation: none; }
  .hc-typing-dot { animation: none; opacity: 0.7; }
  .healio-chat-stage { transition: none !important; transform: none !important; }
  .healio-chat-frame {
    height: auto;
    min-height: 560px;
  }
  .healio-chat-stage {
    position: relative;
    inset: auto;
    justify-content: flex-start;
  }
}
`
