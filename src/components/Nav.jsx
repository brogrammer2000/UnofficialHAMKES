import { motion } from 'motion/react'
import aboutSvg from '../assets/svg/text/text-about-10px.svg'
import eventsSvg from '../assets/svg/text/text-events-10px.svg'
import boardSvg from '../assets/svg/text/text-board-10px.svg'
import contactSvg from '../assets/svg/text/text-contact-10px.svg'
import becomeMemberSvg from '../assets/svg/text/text-become-a-member-10px.svg'
import OutlineText from './OutlineText'

const pills = [
  { label: 'About', src: aboutSvg },
  { label: 'Events', src: eventsSvg },
  { label: 'Board', src: boardSvg },
  { label: 'Contact', src: contactSvg },
]

function Nav() {
  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {pills.map((pill) => (
        <button key={pill.label} type="button" className="nav__pill">
          <OutlineText src={pill.src} label={pill.label} />
        </button>
      ))}
      <button type="button" className="nav__member">
        <OutlineText src={becomeMemberSvg} label="Become a member" />
        <span className="nav__member-underline" aria-hidden="true" />
      </button>
    </motion.nav>
  )
}

export default Nav
