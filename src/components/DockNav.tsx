import { useCallback } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function DockNav({ onNavigate }: { onNavigate?: (scrollTarget: string) => void }) {
  const handleClick = useCallback((href: string) => {
    if (onNavigate) {
      onNavigate(href)
    } else {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [onNavigate])

  return (
    <nav
      style={{
        position: 'fixed',
        top: '16px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        maxWidth: 'calc(100vw - 32px)',
        width: 'max-content',
      }}
      aria-label="Main navigation"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          padding: '7px 14px',
          borderRadius: '50px',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleClick('#hero')}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.85)',
            fontFamily: "'Geist Sans', sans-serif",
            fontWeight: 500,
            fontSize: '13px',
            cursor: 'pointer',
            padding: '5px 12px',
            whiteSpace: 'nowrap',
            letterSpacing: '-0.02em',
            transition: 'color 0.15s',
          }}
        >
          Andre Botha
        </button>

        {/* Divider */}
        <div style={{
          width: '1px',
          height: '16px',
          background: 'rgba(255,255,255,0.08)',
          margin: '0 4px',
          flexShrink: 0,
        }} />

        {/* Nav items — plain text, no icons */}
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => handleClick(item.href)}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.45)',
              cursor: 'pointer',
              padding: '5px 10px',
              borderRadius: '20px',
              fontFamily: "'Geist Sans', sans-serif",
              fontSize: '13px',
              fontWeight: 400,
              transition: 'color 0.15s',
              whiteSpace: 'nowrap',
              letterSpacing: '-0.01em',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
          >
            {item.label}
          </button>
        ))}
      </motion.div>
    </nav>
  )
}
