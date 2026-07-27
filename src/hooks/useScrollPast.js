import { useEffect, useState } from 'react'

/** True once the page is scrolled further than `threshold` pixels. */
export function useScrollPast(threshold = 40) {
  const [past, setPast] = useState(false)

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      setPast(window.scrollY > threshold)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [threshold])

  return past
}
