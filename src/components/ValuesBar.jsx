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
      className="values-bar glass glass--strong glass--noise"
      style={{ '--glass-blur': '2.6rem' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
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
    </motion.section>
  )
}

export default ValuesBar
