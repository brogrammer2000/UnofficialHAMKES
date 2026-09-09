import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import GlassFilter from './components/GlassFilter'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import About from './pages/About'
import Contact from './pages/Contact'
import Board from './pages/Board'
import Events from './pages/Events'
import Services from './pages/Services'
import SectionPage from './pages/SectionPage'
import './App.css'

function App() {
  const lenisRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    lenisRef.current = lenis
    let frameId
    const raf = (time) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  /* Lenis drives its own scroll position, so a route change has to be told to
     jump — window.scrollTo alone gets animated straight back. */
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [pathname])

  return (
    <div className="page">
      <GlassFilter />
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<SectionPage section="news" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/board" element={<Board />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
