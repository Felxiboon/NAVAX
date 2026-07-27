import { useEffect, useRef } from 'react'
import './ScrollProgress.css'

/**
 * Hairline reading-progress bar across the top of the window.
 *
 * The width is written straight to the DOM node instead of through state —
 * this runs on every scroll frame, and re-rendering React that often would be
 * the one thing on the page that stutters.
 */
export function ScrollProgress() {
  const barRef = useRef(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    let frame = 0

    const measure = () => {
      frame = 0
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="progress" aria-hidden="true">
      <div className="progress__bar" ref={barRef} />
    </div>
  )
}
