import { useFadeUp } from '../hooks/useFadeUp'

const tools = [
  { name: 'Cursor', category: 'AI IDE', icon: 'cursor' },
  { name: 'Claude', category: 'AI Assistant', icon: 'claude' },
  { name: 'Supabase', category: 'Database & Auth', icon: 'supabase' },
  { name: 'Vercel', category: 'Deployment', icon: 'vercel' },
  { name: 'Lovable', category: 'AI Builder', icon: 'lovable' },
  { name: 'Figma', category: 'Design', icon: 'figma' },
  { name: 'Framer', category: 'Prototyping', icon: 'framer' },
  { name: 'Manus AI', category: 'AI Agent', icon: 'manus' },
]

function ToolIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'cursor':
      return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="rgba(255,255,255,0.07)"/>
          <path d="M12 8 L12 30 L17 24 L21 32 L24.5 30 L20.5 22 L28 22 Z" fill="#FFFFFF"/>
        </svg>
      )
    case 'claude':
      return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="rgba(204,120,92,0.12)"/>
          <g transform="translate(20,20)">
            <ellipse rx="2.5" ry="7.5" fill="#CC785C"/>
            <ellipse rx="2.5" ry="7.5" fill="#CC785C" transform="rotate(45)"/>
            <ellipse rx="2.5" ry="7.5" fill="#CC785C" transform="rotate(90)"/>
            <ellipse rx="2.5" ry="7.5" fill="#CC785C" transform="rotate(135)"/>
          </g>
        </svg>
      )
    case 'supabase':
      return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="rgba(62,207,142,0.10)"/>
          <path d="M24.5 7 L11.5 23 L19.5 23 L15.5 33 L28.5 17 L20.5 17 Z" fill="#3ECF8E"/>
        </svg>
      )
    case 'vercel':
      return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="rgba(255,255,255,0.06)"/>
          <polygon points="20,9 32,30 8,30" fill="#FFFFFF"/>
        </svg>
      )
    case 'lovable':
      return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="rgba(239,68,68,0.10)"/>
          <path d="M20 31 C 14 27 8 22 8 16 C 8 11 12 8 16.5 8 C 18.5 8 20 9.5 20 9.5 C 20 9.5 21.5 8 23.5 8 C 28 8 32 11 32 16 C 32 22 26 27 20 31 Z" fill="#EF4444"/>
        </svg>
      )
    case 'figma':
      return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="rgba(0,0,0,0)"/>
          <rect x="10" y="5" width="10" height="10" rx="5" fill="#F24E1E"/>
          <rect x="20" y="5" width="10" height="10" rx="5" fill="#FF7262"/>
          <rect x="10" y="16" width="10" height="10" rx="5" fill="#A259FF"/>
          <circle cx="25" cy="21" r="5" fill="#1ABCFE"/>
          <path d="M10,27 H20 V32 a5,5 0 0 1 -10,0 Z" fill="#0ACF83"/>
        </svg>
      )
    case 'framer':
      return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="10" fill="rgba(0,85,255,0.10)"/>
          <polygon points="10,9 30,21 10,21" fill="#0055FF"/>
          <polygon points="10,21 20,21 10,33" fill="#0055FF"/>
        </svg>
      )
    case 'manus':
      return (
        <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663026803051/pTuOOICiZSILqdxQ.png" alt="Manus AI" width="40" height="40" style={{display:'block',objectFit:'contain'}}/>
      )
    default:
      return null
  }
}

export function Toolkit() {
  const label = useFadeUp()
  const heading = useFadeUp()
  const grid = useFadeUp()

  return (
    <section id="toolkit" aria-label="AI Toolkit">
      <div className="container">
        <span ref={label.ref} className={`section-label fade-up${label.visible ? ' visible' : ''}`}>Stack</span>
        <h2 ref={heading.ref} className={`section-heading fade-up${heading.visible ? ' visible' : ''}`}>AI Toolkit</h2>
        <div ref={grid.ref} className={`toolkit-grid stagger${grid.visible ? ' visible' : ''}`}>
          {tools.map((tool) => (
            <div key={tool.name} className="tool-card">
              <div className="tool-icon">
                <ToolIcon icon={tool.icon} />
              </div>
              <div className="tool-name">{tool.name}</div>
              <div className="tool-category">{tool.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
