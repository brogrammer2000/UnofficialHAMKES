import { useEffect } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import heroVideo from '../assets/video/hero-video-1080p.mp4'
import aboutTitle from '../assets/svg/text/text-about-10px.svg'
import servicesTitle from '../assets/svg/text/text-services-40px.svg'
import eventsTitle from '../assets/svg/text/text-events-40px.svg'
import newsTitle from '../assets/svg/text/text-news-40px.svg'
import contactTitle from '../assets/svg/text/text-contact-10px.svg'
import BgVideo from '../components/BgVideo'
import OutlineText from '../components/OutlineText'

/* Keyed by the route slug. `accent` reuses the landing page's colour
   language: grey for services/news, the events gradient for events. */
const sections = {
  /* About has no 40px outline in the extract, but the nav's 10px one is the
     same Horizon-Bold vector and scales cleanly. */
  about: { label: 'About', src: aboutTitle, accent: 'solid' },
  services: { label: 'Services', src: servicesTitle, accent: 'solid' },
  events: { label: 'Events', src: eventsTitle, accent: 'gradient' },
  news: { label: 'News', src: newsTitle, accent: 'solid' },
  contact: { label: 'Contact', src: contactTitle, accent: 'solid' },
}

function SectionPage({ section, cardClassName = '', children }) {
  const { label, src, accent } = sections[section]

  useEffect(() => {
    document.title = `${label} — Unofficial HAMKES`
    return () => {
      document.title = 'Unofficial HAMKES'
    }
  }, [label])

  return (
    <div className="section-page">
      <BgVideo className="section-page__video" src={heroVideo} />
      <motion.div
        className={`section-page__card glass glass--strong glass--noise ${cardClassName}`}
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
      >
        <OutlineText
          as="h1"
          className="section-page__title"
          src={src}
          label={label}
        />
        <span
          className={`section-page__accent section-page__accent--${accent}`}
          aria-hidden="true"
        />
        {children}
      </motion.div>
      <motion.div
        className="section-page__back"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Link to="/">← Back to home</Link>
      </motion.div>
    </div>
  )
}

export default SectionPage
