import { useEffect, useRef } from 'react'

/**
 * Background video layer: plays faster than realtime for livelier motion,
 * and pauses itself while off-screen so the page never decodes more than
 * the videos actually in view — three simultaneous 1080p streams were the
 * main source of background jank.
 */
function BgVideo({ src, className, rate = 1.5 }) {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return undefined
    video.playbackRate = rate
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '100px' },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [rate])

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      disablePictureInPicture
    />
  )
}

export default BgVideo
