import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Counts from 0 up to `target` once `active` is true.
 * Eases out hard at the end so the last digits settle instead of snapping.
 */
export function useCountUp(target, active, { duration = 1500 } = {}) {
  const reduced = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return

    if (reduced) {
      setValue(target)
      return
    }

    let frame = 0
    let startedAt

    const tick = (now) => {
      if (startedAt === undefined) startedAt = now
      const progress = Math.min(1, (now - startedAt) / duration)
      const eased = 1 - Math.pow(1 - progress, 4)

      setValue(target * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration, reduced])

  return value
}
