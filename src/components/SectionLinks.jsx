import { motion } from 'motion/react'
import heroVideo from '../assets/video/hero-video-1080p.mp4'
import waveImg from '../assets/images/neon-wave-banner-4096x1183.jpg'
import servicesPhoto from '../assets/images/photo-services-chaotic-786x726.png'
import eventsPhoto from '../assets/images/photo-events-group-527x512.png'
import servicesTitle from '../assets/svg/text/text-services-40px.svg'
import eventsTitle from '../assets/svg/text/text-events-40px.svg'
import newsTitle from '../assets/svg/text/text-news-40px.svg'
import agmTitle from '../assets/svg/text/text-agm-40px.svg'
import OutlineText from './OutlineText'

const links = [
  { key: 'services', src: servicesTitle, label: 'Services', variant: 'solid', photo: servicesPhoto },
  { key: 'events', src: eventsTitle, label: 'Events', variant: 'gradient', photo: eventsPhoto },
  { key: 'news', src: newsTitle, label: 'News', variant: 'solid', photo: servicesPhoto },
  { key: 'agm', src: agmTitle, label: 'AGM', variant: 'gradient', photo: eventsPhoto },
]

function SectionLinks() {
  return (
    <section className="section-links">
      <div className="section-links__bg">
        <video
          className="section-links__video"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <img className="section-links__wave" src={waveImg} alt="" />
      </div>
      <motion.div
        className="section-links__row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {links.map((link, i) => (
          <motion.div
            key={link.key}
            className={`section-links__item section-links__item--${link.variant}`}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 },
              },
            }}
          >
            <OutlineText as="h2" className="section-links__title" src={link.src} label={link.label} />
            <span className="section-links__underline" aria-hidden="true" />
            <img className="section-links__photo" src={link.photo} alt="" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default SectionLinks
