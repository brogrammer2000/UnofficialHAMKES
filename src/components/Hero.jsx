import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'
import heroVideo from '../assets/video/hero-video-1080p.mp4'
import wordmark from '../assets/svg/group-17-197-group-1.svg'
import BgVideo from './BgVideo'

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 60])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4])

  return (
    <div ref={ref} className="hero">
      <BgVideo className="hero__video" src={heroVideo} />
      <motion.div className="hero__wordmark-wrap" style={{ y, opacity }}>
        <motion.img
          className="hero__wordmark"
          src={wordmark}
          alt="HAMKES"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
          draggable={false}
        />
        {/* Real text, not aria-hidden — screen readers should get
            "HAMKES unofficial", which is the point of the site. It sits
            inside the wrap so it rides the same parallax as the wordmark. */}
        <motion.span
          className="hero__tape"
          initial={{ opacity: 0, scale: 0.8, rotate: -22 }}
          animate={{ opacity: 1, scale: 1, rotate: -8 }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1], delay: 0.85 }}
        >
          unofficial
        </motion.span>
      </motion.div>
    </div>
  )
}

export default Hero
