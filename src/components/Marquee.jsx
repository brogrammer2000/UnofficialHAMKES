/**
 * Infinite CSS marquee: the content is rendered twice back-to-back inside a
 * flex track that animates from translateX(0) to translateX(-50%), so the
 * loop point is invisible. Used for the values ticker and the sponsor logos.
 */
function Marquee({ children, gap = '1rem', duration = '10s', className }) {
  return (
    <div className={`marquee${className ? ` ${className}` : ''}`}>
      <div className="marquee__track" style={{ gap, animationDuration: duration }}>
        <div className="marquee__group" style={{ gap }}>
          {children}
        </div>
        <div className="marquee__group" style={{ gap }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Marquee
