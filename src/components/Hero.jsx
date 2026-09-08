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
      </motion.div>
    </div>
  )
}

export default Hero
