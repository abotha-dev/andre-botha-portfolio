export function NotFound({ onGoHome }: { onGoHome: () => void }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <div style={{
        fontSize: '6rem',
        fontWeight: 800,
        color: 'var(--accent)',
        lineHeight: 1,
        marginBottom: '1rem',
        fontFamily: "'Space Grotesk', sans-serif",
        opacity: 0.4,
      }}>404</div>
      <h1 style={{
        fontSize: '1.75rem',
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: '0.75rem',
      }}>Page not found</h1>
      <p style={{
        fontSize: '1rem',
        color: 'var(--text-muted)',
        marginBottom: '2rem',
        maxWidth: '360px',
        lineHeight: 1.6,
      }}>This page doesn&apos;t exist. You might have followed a broken link.</p>
      <button
        onClick={onGoHome}
        className="btn-primary"
      >
        Back to Home
      </button>
    </div>
  )
}
