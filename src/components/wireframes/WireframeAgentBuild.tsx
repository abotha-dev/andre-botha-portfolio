export function WireframeAgentBuild({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
      {/* Node graph / agent topology */}
      <circle cx="200" cy="110" r="20" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="80" cy="60" r="12" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="320" cy="60" r="12" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="60" cy="160" r="12" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="340" cy="160" r="12" stroke="currentColor" strokeWidth="1.2"/>
      <circle cx="200" cy="196" r="10" stroke="currentColor" strokeWidth="1.2"/>
      {/* Connections */}
      <line x1="92" y1="66" x2="183" y2="97" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 3"/>
      <line x1="308" y1="66" x2="217" y2="97" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 3"/>
      <line x1="71" y1="152" x2="183" y2="123" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 3"/>
      <line x1="329" y1="152" x2="217" y2="123" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 3"/>
      <line x1="200" y1="130" x2="200" y2="186" stroke="currentColor" strokeWidth="0.9" strokeDasharray="4 3"/>
      {/* Labels under nodes */}
      <line x1="56" y1="78" x2="104" y2="78" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
      <line x1="296" y1="78" x2="344" y2="78" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
    </svg>
  )
}
