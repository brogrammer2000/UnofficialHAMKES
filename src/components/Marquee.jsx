/**
 * Infinite CSS marquee. The content is rendered twice back-to-back and the
 * track animates 0 → -50%.
 *
 * The seam is only invisible if half the track is exactly one repeat period,
 * so the inter-item gap lives on each group *plus* a trailing gap of the same
 * size (padding-right) — never as a gap on the track itself. A track-level
 * gap would make half the track one half-gap short of a period, which reads
 * as a jump every time the loop restarts.
 */
function Marquee({ children, gap = '1rem', duration = '10s', className }) {
  return (
    <div className={`marquee${className ? ` ${className}` : ''}`}>
      <div className="marquee__track" style={{ animationDuration: duration }}>
        <div className="marquee__group" style={{ gap, paddingRight: gap }}>
          {children}
        </div>
        <div
          className="marquee__group"
          style={{ gap, paddingRight: gap }}
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Marquee
