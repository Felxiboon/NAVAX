import { useEffect, useRef } from 'react'

/**
 * Writes the cursor position into `--mx` / `--my` on the element so CSS can
 * paint a highlight that follows the pointer.
 *
 * Updates are batched into one animation frame, and the listener is skipped
 * entirely on touch devices where there is no hover to track.
 */
export function usePointerGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let frame = 0
    let x = 0
    let y = 0

    const paint = () => {
      frame = 0
      el.style.setProperty('--mx', `${x}px`)
      el.style.setProperty('--my', `${y}px`)
    }

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      x = event.clientX - rect.left
      y = event.clientY - rect.top
      if (!frame) frame = requestAnimationFrame(paint)
    }

    el.addEventListener('mousemove', onMove)
    return () => {
      el.removeEventListener('mousemove', onMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return ref
}
