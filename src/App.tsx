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

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home')

  const handleShowTakeoff = useCallback(() => {
    setActivePage('takeoff-ai')
    window.scrollTo(0, 0)
    history.pushState({ page: 'takeoff-ai' }, '', '/work/takeoff-ai')
  }, [])

  const handleShowNTTData = useCallback(() => {
    setActivePage('ntt-data')
    window.scrollTo(0, 0)
    history.pushState({ page: 'ntt-data' }, '', '/work/ntt-data')
  }, [])

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
    else if (path === '/work/ntt-data') setActivePage('ntt-data')
    else if (path === '/work/pg') setActivePage('pg')
    else if (path === '/work/credit-connection') setActivePage('cc')

    return () => window.removeEventListener('popstate', handler)
  }, [])

  const onCaseStudyPage = activePage !== 'home'

  return (
    <>
      <DockNav onNavigate={onCaseStudyPage ? handleGoHome : undefined} />

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
