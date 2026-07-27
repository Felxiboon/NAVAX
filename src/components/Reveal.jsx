import { useInView } from '../hooks/useInView'

/**
 * Fades and lifts its children into place the first time they scroll into
 * view. `delay` staggers siblings; keep it under ~400ms so a list still feels
 * like one movement rather than a queue.
 */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', style, children, ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={inView ? `${className} is-visible`.trim() : className}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
