import { useEffect, useState } from 'react'

/**
 * Returns the id of the section the visitor is currently reading, or null
 * while they are still up in the hero.
 *
 * Uses a sight-line a third of the way down the viewport: the last section to
 * cross it wins. Simpler and steadier than juggling intersection ratios when
 * sections have wildly different heights.
 */
export function useScrollSpy(ids) {
  const [active, setActive] = useState(null)
  const key = ids.join('|')

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    let frame = 0

    const measure = () => {
      frame = 0
      const line = window.scrollY + window.innerHeight * 0.33
      const scrollBottom = window.scrollY + window.innerHeight
      const atBottom = scrollBottom >= document.documentElement.scrollHeight - 4

      if (atBottom) {
        setActive(sections[sections.length - 1].id)
        return
      }

      let current = null
      for (const section of sections) {
        const top = section.getBoundingClientRect().top + window.scrollY
        if (top <= line) current = section.id
      }

      setActive(current)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return active
}
