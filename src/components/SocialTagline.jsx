import { motion } from 'motion/react'
import instagramSvg from '../assets/svg/group-65-192-property-1-default.svg'
import linkedinSvg from '../assets/svg/group-65-198-property-1-default.svg'
import tagline from '../assets/images/it-starts-with-you-4096x1209.png'

function SocialTagline() {
  return (
    <motion.section
      className="social-tagline"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="social-tagline__icons">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="social-tagline__icon social-tagline__icon--instagram glass"
          style={{ '--glass-blur': '2.9rem' }}
          aria-label="Instagram"
        >
          <img src={instagramSvg} alt="" draggable={false} />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="social-tagline__icon social-tagline__icon--linkedin"
          aria-label="LinkedIn"
        >
          <img src={linkedinSvg} alt="" draggable={false} />
        </a>
      </div>
      <img className="social-tagline__lockup" src={tagline} alt="It starts with you" />
    </motion.section>
  )
}

export default SocialTagline
