import { motion } from 'motion/react'
import sponsorsTitle from '../assets/svg/text/text-sponsors-40px.svg'
import logoHameenlinna from '../assets/images/logo-hameenlinna-1589x323.png'
import logoHameenLiitto from '../assets/images/logo-hameen-liitto-1170x307.png'
import logoHamk from '../assets/images/logo-hamk-617x272.png'
import logoEu from '../assets/images/logo-eu-cofunded-671x206.png'
import logoRiihimaki from '../assets/images/logo-riihimaki-622x237.png'
import logoDefine from '../assets/images/logo-define-922x297.png'
import OutlineText from './OutlineText'
import Marquee from './Marquee'

const logos = [
  { key: 'hameenlinna', src: logoHameenlinna, alt: 'City of Hämeenlinna' },
  { key: 'hameen-liitto', src: logoHameenLiitto, alt: 'Häme Regional Council' },
  { key: 'hamk', src: logoHamk, alt: 'HAMK — Häme University of Applied Sciences' },
  { key: 'eu', src: logoEu, alt: 'Co-funded by the European Union' },
  { key: 'riihimaki', src: logoRiihimaki, alt: 'City of Riihimäki' },
  { key: 'define', src: logoDefine, alt: 'DEFINE' },
]

function Sponsors() {
  return (
    <section className="sponsors">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <OutlineText as="h2" className="sponsors__title" src={sponsorsTitle} label="Sponsors" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
      >
        <Marquee gap="13.8rem" duration="10s" className="sponsors__marquee">
          {logos.map((logo) => (
            <img key={logo.key} src={logo.src} alt={logo.alt} className="sponsors__logo" />
          ))}
        </Marquee>
      </motion.div>
    </section>
  )
}

export default Sponsors
