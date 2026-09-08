import { motion } from 'motion/react'
import ourValuesTitle from '../assets/svg/text/text-our-values-40px.svg'
import collaborationSvg from '../assets/svg/text/text-collaboration-15px.svg'
import educationSvg from '../assets/svg/text/text-education-15px.svg'
import communitySvg from '../assets/svg/text/text-community-15px.svg'
import integritySvg from '../assets/svg/text/text-integrity-15px.svg'
import impactSvg from '../assets/svg/text/text-impact-15px.svg'
import empowermentSvg from '../assets/svg/text/text-empowerment-15px.svg'
import innovationSvg from '../assets/svg/text/text-innovation-15px.svg'
import OutlineText from './OutlineText'
import Marquee from './Marquee'
import BgVideo from './BgVideo'
import heroVideo from '../assets/video/hero-video-1080p.mp4'

const values = [
  { key: 'collaboration', src: collaborationSvg, label: 'Collaboration' },
  { key: 'education', src: educationSvg, label: 'Education' },
  { key: 'community', src: communitySvg, label: 'Community' },
  { key: 'integrity', src: integritySvg, label: 'Integrity' },
  { key: 'impact', src: impactSvg, label: 'Impact' },
  { key: 'empowerment', src: empowermentSvg, label: 'Empowerment' },
  { key: 'innovation', src: innovationSvg, label: 'Innovation' },
]

function ValuesBar() {
  return (
    <motion.section
      className="values-bar"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* The bar is glass, so it needs something behind it to refract —
          the reference render shows the video's colour coming through. */}
      <div className="values-bar__bg">
        <BgVideo className="values-bar__video" src={heroVideo} rate={1.35} />
      </div>
      <div
        className="values-bar__panel glass glass--strong glass--wide glass--noise"
        style={{ '--glass-blur': '2.6rem' }}
      >
      <OutlineText
        as="h2"
        className="values-bar__title"
        src={ourValuesTitle}
        label="Our values"
      />
      <Marquee gap="5.6rem" duration="10s" className="values-bar__ticker">
        {values.map((value) => (
          <OutlineText
            key={value.key}
            src={value.src}
            label={value.label}
            className="values-bar__word"
          />
        ))}
      </Marquee>
      </div>
    </motion.section>
  )
}

export default ValuesBar
