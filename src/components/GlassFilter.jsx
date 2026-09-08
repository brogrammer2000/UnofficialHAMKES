/**
 * SVG filter definitions used by the .glass backdrop.
 *
 * Figma's Glass effect refracts whatever sits behind the panel; CSS blur alone
 * can't do that. A turbulence field driving an feDisplacementMap bends the
 * backdrop the same way, which is what gives the panels an actual glass read
 * rather than looking like flat translucent grey. Rendered once, near the root.
 */
function GlassFilter() {
  return (
    <svg className="glass-defs" aria-hidden="true" focusable="false">
      <defs>
        {/* Soft, wide refraction for the big panels (values bar, footer). */}
        <filter
          id="glass-refract"
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.004 0.009"
            numOctaves="2"
            seed="17"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="4" result="soft" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="26"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>

        {/* Tighter, stronger refraction for the smaller cards and pills. */}
        <filter
          id="glass-refract-tight"
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="2"
            seed="5"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2.5" result="soft" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="soft"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )
}

export default GlassFilter
