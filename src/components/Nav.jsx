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
  { label: 'Board', src: boardSvg, to: '/board' },
  { label: 'Contact', src: contactSvg, to: '/contact' },
]

function Nav() {
  return (
    <motion.nav
      className="nav"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Link to="/" className="nav__home" aria-label="Home" title="Home">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2.6 1.8 11.2h3v10.2h5V15h4.4v6.4h5V11.2h3z"
          />
        </svg>
        <span className="nav__home-underline" aria-hidden="true" />
      </Link>
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
