import { useEffect, useRef, useState } from 'react'
import { hero, heroImage, site } from '../content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { ArrowIcon, DiscordIcon } from './Icons'
import './Hero.css'

export function Hero() {
  const reduced = useReducedMotion()
  const sectionRef = useRef(null)
  const [imageLoaded, setImageLoaded] = useState(false)

  // Fade the photograph in once it has actually decoded, so the hero never
  // shows a half-painted image over the gradient placeholder.
  useEffect(() => {
    const image = new Image()
    image.src = heroImage
    if (image.complete) {
      setImageLoaded(true)
      return
    }
    image.addEventListener('load', () => setImageLoaded(true))
    image.addEventListener('error', () => setImageLoaded(true))
  }, [])

  // Parallax. Both the photo drift and the copy fade ride on two custom
  // properties written once per animation frame — no React re-render, and
  // nothing but transform and opacity animates.
  useEffect(() => {
    const section = sectionRef.current
    if (!section || reduced) return

    let frame = 0

    const measure = () => {
      frame = 0
      const y = window.scrollY
      const height = window.innerHeight

      if (y > height * 1.2) return

      section.style.setProperty('--shift', `${y * 0.3}px`)
      section.style.setProperty('--fade', `${Math.max(0, 1 - y / (height * 0.75))}`)
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
  }, [reduced])

  const letters = [...hero.title]

  return (
    <section
      id="top"
      ref={sectionRef}
      className={`hero ${imageLoaded ? 'is-loaded' : ''}`}
      aria-labelledby="hero-title"
    >
      <div className="hero__media" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" />
      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__inner container">
        <p className="hero__status">
          <span className="hero__pulse" aria-hidden="true" />
          {site.status}
        </p>

        <p className="hero__kicker">{hero.kicker}</p>

        <h1 id="hero-title" className="hero__title">
          {/* Split for the stagger. The full word stays readable to screen
              readers via the visually hidden copy below. */}
          <span aria-hidden="true">
            {letters.map((letter, index) => (
              <span key={index} className="hero__letter" style={{ '--i': index }}>
                {letter}
              </span>
            ))}
          </span>
          <span className="sr-only">{hero.title}</span>
        </h1>

        <p className="hero__lede">{hero.lede}</p>

        <div className="hero__actions">
          <a
            className="btn btn--primary"
            href={site.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn__label">
              <DiscordIcon />
              {hero.primaryCta}
            </span>
          </a>

          <a className="btn btn--ghost" href="#about">
            <span className="btn__label">
              {hero.secondaryCta}
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>

      <a className="hero__cue" href="#about" aria-label="Scroll to About">
        <span className="hero__cue-label">Scroll</span>
        <span className="hero__cue-rail" aria-hidden="true">
          <span className="hero__cue-dot" />
        </span>
      </a>
    </section>
  )
}
