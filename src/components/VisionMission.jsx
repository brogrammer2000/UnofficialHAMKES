import { motion } from 'motion/react'
import visionTitle from '../assets/svg/text/text-vision-40px.svg'
import missionTitle from '../assets/svg/text/text-mission-40px.svg'
import OutlineText from './OutlineText'
import BgVideo from './BgVideo'
import heroVideo from '../assets/video/hero-video-1080p.mp4'

const cards = [
  {
    key: 'vision',
    titleSrc: visionTitle,
    titleLabel: 'Vision',
    body: 'To create a dynamic and innovative entrepreneurial ecosystem that fosters creativity, collaboration, and sustainable business growth, empowering individuals to drive positive economic and social impact.',
  },
  {
    key: 'mission',
    titleSrc: missionTitle,
    titleLabel: 'Mission',
    body: 'To inspire, educate, and empower individuals to embrace innovation and entrepreneurship by fostering a dynamic community that supports growth, connects stakeholders, and cultivates a culture of creativity and collaboration.',
  },
]

function VisionMission() {
  return (
    <section className="vision-mission">
      {cards.map((card, i) => (
        <motion.article
          key={card.key}
          className="vision-mission__card glass glass--strong glass--noise"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }}
        >
          {/* Contained video, same as the footer card: it keeps vivid colour
              inside the panel instead of depending on whatever happens to be
              behind it, which is what makes the footer read as polished. */}
          <BgVideo className="vision-mission__video" src={heroVideo} rate={1.35} />
          <OutlineText
            as="h2"
            className="vision-mission__title"
            src={card.titleSrc}
            label={card.titleLabel}
          />
          <p className="vision-mission__body">{card.body}</p>
        </motion.article>
      ))}
    </section>
  )
}

export default VisionMission
