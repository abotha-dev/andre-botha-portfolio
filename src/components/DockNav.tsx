import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, User, Mail, Sparkles } from 'lucide-react'

interface NavItem {
  icon: React.ReactNode
  label: string
  href: string
}

const navItems: NavItem[] = [
  { icon: <Briefcase size={16} />, label: 'Work', href: '#work' },
  { icon: <User size={16} />, label: 'About', href: '#about' },
  { icon: <Mail size={16} />, label: 'Contact', href: '#contact' },
]

function getScale(hoveredIndex: number | null, index: number) {
  if (hoveredIndex === null) return 1
  const distance = Math.abs(hoveredIndex - index)
  if (distance === 0) return 1.3
  if (distance === 1) return 1.12
  return 1
}

export function DockNav({ onNavigate }: { onNavigate?: () => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleClick = useCallback((href: string) => {
    if (onNavigate) onNavigate()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
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
          gap: '4px',
          padding: '8px 16px',
          borderRadius: '50px',
          background: 'rgba(15,15,15,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.4)',
        }}
      >
        {/* Logo */}
        <button
          onClick={() => handleClick('#hero')}
          style={{
            background: 'none',
            border: 'none',
            color: '#f5f5f5',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: '14px',
            cursor: 'pointer',
            padding: '6px 14px',
            whiteSpace: 'nowrap',
            letterSpacing: '-0.01em',
          }}
        >
          Andre Botha
        </button>

        {/* Divider */}
        <div style={{
          width: '1px',
          height: '20px',
          background: 'rgba(255,255,255,0.1)',
          margin: '0 4px',
        }} />

        {/* Nav items with dock magnify */}
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleClick(item.href)}
            animate={{
              scale: getScale(hoveredIndex, index),
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            style={{
              background: 'none',
              border: 'none',
              color: hoveredIndex === index ? '#f5f5f5' : '#888888',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              transition: 'color 0.15s, background 0.15s',
              transformOrigin: 'center',
              whiteSpace: 'nowrap',
              ...(hoveredIndex === index ? { background: 'rgba(255,255,255,0.06)' } : {}),
            }}
          >
            {item.icon}
            {item.label}
          </motion.button>
        ))}

        {/* Divider */}
        <div style={{
          width: '1px',
          height: '20px',
          background: 'rgba(255,255,255,0.1)',
          margin: '0 4px',
        }} />

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick('#contact')}
          style={{
            background: '#6366f1',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
            padding: '7px 16px',
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            fontWeight: 500,
            whiteSpace: 'nowrap',
          }}
        >
          <Sparkles size={14} />
          Get in Touch
        </motion.button>
      </motion.div>
    </nav>
  )
}
