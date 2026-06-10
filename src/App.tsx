import { useState, useCallback, useEffect, StrictMode } from 'react'
import type { ComponentType } from 'react'
import { Outlet, useNavigate, useLocation, useOutletContext } from 'react-router-dom'
import type { RouteRecord } from 'vite-react-ssg'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { DockNav } from './components/DockNav'
import { Hero } from './components/Hero'
import { CompanyMarquee } from './components/CompanyMarquee'
import { Work } from './components/Work'
import { Toolkit } from './components/Toolkit'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { TakeoffCaseStudy } from './components/TakeoffCaseStudy'
import { NTTDataCaseStudy } from './components/NTTDataCaseStudy'
import { PGCaseStudy } from './components/PGCaseStudy'
import { CCCaseStudy } from './components/CCCaseStudy'
import { AIPortfolioCaseStudy } from './components/AIPortfolioCaseStudy'
import { Testimonials } from './components/Testimonials'
import { HowIWork } from './components/HowIWork'
import { Footer } from './components/Footer'
import { NotFound } from './components/NotFound'

const NTT_PASSWORD = import.meta.env.VITE_NTT_PASSWORD ?? ''

// Context the Layout shares with its route elements: NTT auth state + the
// password-modal opener (the NTT case study is gated behind an NDA password).
type LayoutContext = {
  nttAuthed: boolean
  openNttModal: () => void
}
function useLayout() {
  return useOutletContext<LayoutContext>()
}

// ---------------------------------------------------------------------------
// Layout — persistent chrome (DockNav + Footer) wrapping every route's Outlet.
// Replaces the hand-rolled page switcher that used to live in App; also owns
// the NDA password modal, exactly as the old App did.
// ---------------------------------------------------------------------------
function Layout() {
  const navigate = useNavigate()
  const location = useLocation()

  const [nttAuthed, setNttAuthed] = useState(false)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [passwordInput, setPasswordInput] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  const openNttModal = useCallback(() => {
    setShowPasswordModal(true)
    setPasswordInput('')
    setPasswordError(false)
  }, [])

  const handlePasswordSubmit = useCallback(() => {
    if (passwordInput === NTT_PASSWORD) {
      setShowPasswordModal(false)
      setPasswordError(false)
      setNttAuthed(true)
      navigate('/work/ntt-data')
    } else {
      setPasswordError(true)
    }
  }, [passwordInput, navigate])

  // The /work/ntt-data route renders the home page while unauthenticated, so the
  // dock should behave as it does on home (dark, in-page scroll) in that case.
  const onHomeContent =
    location.pathname === '/' ||
    (location.pathname === '/work/ntt-data' && !nttAuthed)

  // Reset scroll on every route change — mirrors the window.scrollTo(0, 0) the
  // old push-state / popstate navigation did. Skipped when the navigation
  // carried a scroll target for the home page (handled in HomePage instead).
  useEffect(() => {
    if (typeof window === 'undefined') return
    const target = (location.state as { scrollTarget?: string } | null)?.scrollTarget
    if (!(location.pathname === '/' && target)) window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  // Used by the dock on case-study pages: go home, then scroll to a section.
  const handleGoHomeWithScroll = useCallback(
    (scrollTarget: string) => navigate('/', { state: { scrollTarget } }),
    [navigate],
  )

  return (
    <StrictMode>
      <DockNav
        onNavigate={onHomeContent ? undefined : handleGoHomeWithScroll}
        variant={onHomeContent ? 'dark' : 'light'}
      />

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

      <Outlet context={{ nttAuthed, openNttModal } satisfies LayoutContext} />

      <Footer />
      <Analytics />
      <SpeedInsights />
    </StrictMode>
  )
}

// ---------------------------------------------------------------------------
// Route elements
// ---------------------------------------------------------------------------
function HomePage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { openNttModal } = useLayout()

  // After returning home with a pending scroll target, scroll to that section.
  useEffect(() => {
    const target = (location.state as { scrollTarget?: string } | null)?.scrollTarget
    if (!target) return
    const el = document.querySelector(target)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [location.state])

  return (
    <main id="main-page">
      <Hero />
      <CompanyMarquee />
      <Work
        onShowCaseStudy={() => navigate('/work/takeoff-ai')}
        onShowNTTData={openNttModal}
        onShowPG={() => navigate('/work/pg')}
        onShowCC={() => navigate('/work/credit-connection')}
        onShowAIPortfolio={() => navigate('/work/ai-portfolio')}
      />
      <Testimonials />
      <HowIWork />
      <Toolkit />
      <About />
      <Contact />
    </main>
  )
}

// Generic wrapper for the publicly-accessible case studies.
function CaseStudyRoute({ Comp }: { Comp: ComponentType<{ onBack: () => void }> }) {
  const navigate = useNavigate()
  return <Comp onBack={() => navigate('/')} />
}

// NDA-gated route: shows the home page (with the password modal) until the
// visitor authenticates, then renders the case study. Direct visits land here
// unauthenticated, so the gate opens automatically — matching the old behavior
// where /work/ntt-data showed the home page beneath the password modal.
function NTTDataRoute() {
  const navigate = useNavigate()
  const { nttAuthed, openNttModal } = useLayout()

  useEffect(() => {
    if (!nttAuthed) openNttModal()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!nttAuthed) return <HomePage />
  return <NTTDataCaseStudy onBack={() => navigate('/')} />
}

function NotFoundRoute() {
  const navigate = useNavigate()
  return <NotFound onGoHome={() => navigate('/')} />
}

// ---------------------------------------------------------------------------
// Route declarations consumed by ViteReactSSG (see main.tsx). Each static path
// here is prerendered to fully-rendered HTML at build time; the `*` catch-all
// is client-only.
// ---------------------------------------------------------------------------
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'work/takeoff-ai', element: <CaseStudyRoute Comp={TakeoffCaseStudy} /> },
      { path: 'work/ntt-data', element: <NTTDataRoute /> },
      { path: 'work/pg', element: <CaseStudyRoute Comp={PGCaseStudy} /> },
      { path: 'work/credit-connection', element: <CaseStudyRoute Comp={CCCaseStudy} /> },
      { path: 'work/ai-portfolio', element: <CaseStudyRoute Comp={AIPortfolioCaseStudy} /> },
      { path: '*', element: <NotFoundRoute /> },
    ],
  },
]
