import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import aboutSvg from '../assets/svg/text/text-about-10px.svg'
import eventsSvg from '../assets/svg/text/text-events-10px.svg'
import boardSvg from '../assets/svg/text/text-board-10px.svg'
import contactSvg from '../assets/svg/text/text-contact-10px.svg'
import becomeMemberSvg from '../assets/svg/text/text-become-a-member-10px.svg'
import OutlineText from './OutlineText'

const pills = [
  { label: 'About', src: aboutSvg, to: '/about' },
  { label: 'Events', src: eventsSvg, to: '/events' },
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
      {pills.map((pill) =>
        /* Only the pills that have a route yet render as links; the rest stay
           inert buttons until their pages exist. */
        pill.to ? (
          <Link key={pill.label} to={pill.to} className="nav__pill glass glass--strong">
            <OutlineText src={pill.src} label={pill.label} />
          </Link>
        ) : (
          <button
            key={pill.label}
            type="button"
            className="nav__pill glass glass--strong"
          >
            <OutlineText src={pill.src} label={pill.label} />
          </button>
        ),
      )}
      <button type="button" className="nav__member">
        <OutlineText src={becomeMemberSvg} label="Become a member" />
        <span className="nav__member-underline" aria-hidden="true" />
      </button>
    </motion.nav>
  )
}

export default Nav
