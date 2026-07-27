import { useEffect, useRef, useState } from 'react'

/**
 * Flips to true the first time the element scrolls into view.
 *
 * The default rootMargin holds the trigger back until the element is a little
 * way inside the viewport, so reveals land while the visitor is looking at
 * them rather than firing off-screen.
 */
export function useInView({ threshold = 0.15, rootMargin = '0px 0px -12% 0px', once = true } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // No observer (very old browser, or a server render) — show the content.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return [ref, inView]
}
