import { stats } from '../content'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'
import './Stats.css'

function Stat({ stat, index }) {
  const [ref, inView] = useInView({ threshold: 0.4 })
  const counted = useCountUp(stat.value ?? 0, inView, { duration: 1300 + index * 120 })

  return (
    <li ref={ref} className={`stat ${inView ? 'is-visible' : ''}`} style={{ '--i': index }}>
      {stat.ticks ? (
        <span className="stat__ticks" aria-hidden="true">
          {Array.from({ length: stat.ticks }, (_, i) => (
            <span key={i} style={{ '--i': i }} />
          ))}
        </span>
      ) : null}

      <span className="stat__value">
        {stat.text ?? `${stat.prefix ?? ''}${Math.round(counted)}${stat.suffix ?? ''}`}
      </span>
      <span className="stat__label">{stat.label}</span>
    </li>
  )
}

export function Stats() {
  return (
    <section className="stats" aria-label="Northstar at a glance">
      <ul className="stats__grid container">
        {stats.map((stat, index) => (
          <Stat key={stat.label} stat={stat} index={index} />
        ))}
      </ul>
    </section>
  )
}
