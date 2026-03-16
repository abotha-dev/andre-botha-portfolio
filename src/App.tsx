import { useState, useCallback, useEffect } from 'react'
import { DockNav } from './components/DockNav'
import { Hero } from './components/Hero'
import { Work } from './components/Work'
import { Toolkit } from './components/Toolkit'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CaseStudy } from './components/CaseStudy'
import { NTTDataCaseStudy } from './components/NTTDataCaseStudy'
import { Footer } from './components/Footer'

type ActivePage = 'home' | 'takeoff-ai' | 'ntt-data'

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

  const handleGoHome = useCallback(() => {
    setActivePage('home')
    window.scrollTo(0, 0)
    history.pushState({ page: 'home' }, '', '/')
  }, [])

  // Handle browser back/forward
  useEffect(() => {
    const handler = (e: PopStateEvent) => {
      const page = e.state?.page as ActivePage | undefined
      setActivePage(page === 'takeoff-ai' || page === 'ntt-data' ? page : 'home')
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', handler)

    // Handle direct URL navigation
    const path = window.location.pathname
    if (path === '/work/takeoff-ai') setActivePage('takeoff-ai')
    else if (path === '/work/ntt-data') setActivePage('ntt-data')

    return () => window.removeEventListener('popstate', handler)
  }, [])

  const onCaseStudyPage = activePage !== 'home'

  return (
    <>
      <DockNav onNavigate={onCaseStudyPage ? handleGoHome : undefined} />

      {activePage === 'takeoff-ai' ? (
        <CaseStudy onBack={handleGoHome} />
      ) : activePage === 'ntt-data' ? (
        <NTTDataCaseStudy onBack={handleGoHome} />
      ) : (
        <main id="main-page">
          <Hero />
          <Work onShowCaseStudy={handleShowTakeoff} onShowNTTData={handleShowNTTData} />
          <Toolkit />
          <About />
          <Contact />
        </main>
      )}

      <Footer />
    </>
  )
}
