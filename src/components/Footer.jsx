import { motion } from 'motion/react'
import heroVideo from '../assets/video/hero-video-1080p.mp4'
import wordmark from '../assets/svg/group-67-35-group-2.svg'
import BgVideo from './BgVideo'

function Footer() {
  return (
    <footer className="footer">
      <motion.div
        className="footer__card glass glass--strong glass--noise"
        style={{ '--glass-blur': '1.1rem' }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <BgVideo className="footer__video" src={heroVideo} />
        <img className="footer__wordmark" src={wordmark} alt="HAMKES" draggable={false} />
        <div className="footer__contact">
          <p>hamkes@hamk.fi</p>
          <p>www.hamkes.fi</p>
        </div>
        <div className="footer__address">
          <p>HAMK Entrepreneurship Society ry</p>
          <p>
            B126, Kaartokatu 2
            <br />
            111 00&nbsp;&nbsp;Riihimäki
          </p>
          <p>3510093-3</p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
