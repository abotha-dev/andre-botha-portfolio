import { useState, useCallback, useEffect } from 'react'
import { DockNav } from './components/DockNav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Toolkit } from './components/Toolkit'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { TakeoffCaseStudy } from './components/TakeoffCaseStudy'
import { NTTDataCaseStudy } from './components/NTTDataCaseStudy'
import { PGCaseStudy } from './components/PGCaseStudy'
import { CCCaseStudy } from './components/CCCaseStudy'
import { Footer } from './components/Footer'

type ActivePage = 'home' | 'takeoff-ai' | 'ntt-data' | 'pg' | 'cc'

const NTT_PASSWORD = 'healio2025'

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home')
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const handleShowTakeoff = useCallback(() => {
    setActivePage('takeoff-ai')
    window.scrollTo(0, 0)
    history.pushState({ page: 'takeoff-ai' }, '', '/work/takeoff-ai')
  }, [])

  const handleShowNTTData = useCallback(() => {
    setShowPasswordModal(true)
    setPasswordInput('')
    setPasswordError(false)
  }, [])

  const handlePasswordSubmit = useCallback(() => {
    if (passwordInput === NTT_PASSWORD) {
      setShowPasswordModal(false)
      setPasswordError(false)
      setActivePage('ntt-data')
      window.scrollTo(0, 0)
      history.pushState({ page: 'ntt-data' }, '', '/work/ntt-data')
    } else {
      setPasswordError(true)
    }
  }, [passwordInput])

  const handleShowPG = useCallback(() => {
    setActivePage('pg')
    window.scrollTo(0, 0)
    history.pushState({ page: 'pg' }, '', '/work/pg')
  }, [])

  const handleShowCC = useCallback(() => {
    setActivePage('cc')
    window.scrollTo(0, 0)
    history.pushState({ page: 'cc' }, '', '/work/credit-connection')
  }, [])

  const handleGoHome = useCallback(() => {
    setActivePage('home')
    window.scrollTo(0, 0)
    history.pushState({ page: 'home' }, '', '/')
  }, [])

  // Handle browser back/forward
  useEffect(() => {
    const handler = (e: PopStateEvent) => {
      const page = e.state?.page as ActivePage | undefined
      const validPages = ['takeoff-ai', 'ntt-data', 'pg', 'cc'] as const
      setActivePage(validPages.includes(page as typeof validPages[number]) ? page as ActivePage : 'home')
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', handler)

    // Handle direct URL navigation
    const path = window.location.pathname
    if (path === '/work/takeoff-ai') setActivePage('takeoff-ai')
    else if (path === '/work/ntt-data') setShowPasswordModal(true)
    else if (path === '/work/pg') setActivePage('pg')
    else if (path === '/work/credit-connection') setActivePage('cc')

    return () => window.removeEventListener('popstate', handler)
  }, [])

  const onCaseStudyPage = activePage !== 'home'

  return (
    <>
      <DockNav onNavigate={onCaseStudyPage ? handleGoHome : undefined} />

      {/* Password Modal */}
      {showPasswordModal && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '1rem',
        }}>
          <div style={{
            background: '#0d0d1a', border: '1px solid rgba(99,102,241,0.3)',
            borderRadius: '16px', padding: '2.5rem', maxWidth: '420px', width: '100%',
          }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(99,102,241,0.8)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Protected Case Study</div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Healio — NTT Data</h2>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
              This case study contains client work shared under NDA. Enter the password provided to you to view.
            </p>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => { setPasswordInput(e.target.value); setPasswordError(false) }}
              onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              placeholder="Enter password"
              autoFocus
              style={{
                width: '100%', padding: '0.75rem 1rem', borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)',
                border: passwordError ? '1px solid rgba(239,68,68,0.6)' : '1px solid rgba(255,255,255,0.12)',
                color: '#fff', fontSize: '0.95rem', outline: 'none',
                marginBottom: '0.5rem', boxSizing: 'border-box',
              }}
            />
            {passwordError && (
              <p style={{ fontSize: '0.8rem', color: 'rgba(239,68,68,0.8)', marginBottom: '1rem' }}>Incorrect password. Please try again.</p>
            )}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              <button
                onClick={() => setShowPasswordModal(false)}
                style={{
                  flex: 1, padding: '0.75rem', borderRadius: '8px',
                  background: 'transparent', border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', cursor: 'pointer',
                }}
              >Cancel</button>
              <button
                onClick={handlePasswordSubmit}
                style={{
                  flex: 2, padding: '0.75rem', borderRadius: '8px',
                  background: '#6366f1', border: 'none',
                  color: '#fff', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer',
                }}
              >View Case Study</button>
            </div>
          </div>
        </div>
      )}

      {activePage === 'takeoff-ai' ? (
        <TakeoffCaseStudy onBack={handleGoHome} />
      ) : activePage === 'ntt-data' ? (
        <NTTDataCaseStudy onBack={handleGoHome} />
      ) : activePage === 'pg' ? (
        <PGCaseStudy onBack={handleGoHome} />
      ) : activePage === 'cc' ? (
        <CCCaseStudy onBack={handleGoHome} />
      ) : (
        <main id="main-page">
          <Hero />
          <Work onShowCaseStudy={handleShowTakeoff} onShowNTTData={handleShowNTTData} onShowPG={handleShowPG} onShowCC={handleShowCC} />
          <Toolkit />
          <About />
          <Contact />
        </main>
      )}

      <Footer />
    </>
  )
}
