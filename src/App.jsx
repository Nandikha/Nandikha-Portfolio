import { useCallback, useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GithubFeed from './components/GithubFeed'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Workbench from './components/Workbench'
import { profile } from './content'
import { navLinks } from './navLinks'
import { useActiveSection, useReveal } from './hooks/useReveal'

const SECTION_IDS = navLinks.map((l) => l.id)

export default function App() {
  const [active, setActive] = useState('about')
  const [feedTick, setFeedTick] = useState(0)

  const onFeedLoaded = useCallback(() => setFeedTick((t) => t + 1), [])

  useReveal([feedTick])
  useActiveSection(SECTION_IDS, setActive)

  useEffect(() => {
    document.title = `${profile.firstName}${
      profile.lastName ? ` ${profile.lastName}` : ''
    } — ${profile.role}`
  }, [])

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-cyan focus:bg-void focus:px-4 focus:py-2 focus:text-[0.7rem] focus:text-cyan"
      >
        SKIP TO CONTENT
      </a>

      <Nav active={active} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubFeed onLoaded={onFeedLoaded} />
        <Workbench />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
