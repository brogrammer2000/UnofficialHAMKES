import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import heroVideo from '../assets/video/hero-video-1080p.mp4'
import servicesPhoto from '../assets/images/photo-services-chaotic-786x726.png'
import eventsPhoto from '../assets/images/photo-events-group-527x512.png'
import servicesTitle from '../assets/svg/text/text-services-40px.svg'
import eventsTitle from '../assets/svg/text/text-events-40px.svg'
import newsTitle from '../assets/svg/text/text-news-40px.svg'
import OutlineText from './OutlineText'
import BgVideo from './BgVideo'

const MotionLink = motion.create(Link)

const links = [
  {
    key: 'services',
    src: servicesTitle,
    label: 'Services',
    accent: 'solid',
    photo: servicesPhoto,
  },
  {
    key: 'events',
    src: eventsTitle,
    label: 'Events',
    accent: 'gradient',
    photo: eventsPhoto,
  },
  {
    key: 'news',
    src: newsTitle,
    label: 'News',
    accent: 'solid',
    photo: servicesPhoto,
  },
]

function SectionLinks() {
  return (
    <section className="section-links">
      <div className="section-links__bg">
        <BgVideo className="section-links__video" src={heroVideo} />
      </div>
      <motion.div
        className="section-links__row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {links.map((link, i) => (
          <MotionLink
            key={link.key}
            /* The card is the link to the section route; keyboard focus also
               triggers the flip via :focus-visible in the CSS. */
            to={`/${link.key}`}
            className="flip-card"
            aria-label={link.label}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.08 },
              },
            }}
          >
            <div className="flip-card__inner">
              <div className="flip-card__face flip-card__front glass glass--strong glass--noise">
                <OutlineText
                  as="h2"
                  className="flip-card__title"
                  src={link.src}
                  label={link.label}
                />
                <span
                  className={`flip-card__accent flip-card__accent--${link.accent}`}
                  aria-hidden="true"
                />
              </div>
              <div className="flip-card__face flip-card__back">
                <img src={link.photo} alt="" />
              </div>
            </div>
          </MotionLink>
        ))}
      </motion.div>
    </section>
  )
}

export default SectionLinks
