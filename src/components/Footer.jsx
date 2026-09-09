import { motion } from 'motion/react'
import heroVideo from '../assets/video/hero-video-1080p.mp4'
import wordmark from '../assets/svg/group-67-35-group-2.svg'
import instagramSvg from '../assets/svg/group-65-192-property-1-default.svg'
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
          <p>
            <a href="https://unofficial-hamkes.vercel.app/">
              https://unofficial-hamkes.vercel.app/
            </a>
          </p>
          <a
            className="footer__instagram"
            href="https://www.instagram.com/sat.yum/"
            target="_blank"
            rel="noreferrer"
            aria-label="sat.yum on Instagram"
          >
            <img src={instagramSvg} alt="" draggable={false} />
            <span>sat.yum</span>
          </a>
        </div>
        <div className="footer__address">
          <p>
            Parolantie 12
            <br />
            Hämeenlinna
            <br />
            13130
          </p>
        </div>
      </motion.div>
    </footer>
  )
}

export default Footer
