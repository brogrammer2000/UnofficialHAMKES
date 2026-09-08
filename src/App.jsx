import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import VisionMission from './components/VisionMission'
import ValuesBar from './components/ValuesBar'
import SectionLinks from './components/SectionLinks'
import Sponsors from './components/Sponsors'
import SocialTagline from './components/SocialTagline'
import Footer from './components/Footer'
import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let frameId
    const raf = (time) => {
      lenis.raf(time)
      frameId = requestAnimationFrame(raf)
    }
    frameId = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="page">
      <Nav />
      <Hero />
      <VisionMission />
      <ValuesBar />
      <SectionLinks />
      <Sponsors />
      <SocialTagline />
      <Footer />
    </div>
  )
}

export default App
