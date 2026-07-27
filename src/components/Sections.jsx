import { useState } from 'react'
import { about, factions, funding, site, updates } from '../content'
import { usePointerGlow } from '../hooks/usePointerGlow'
import { ArrowIcon, CheckIcon, CopyIcon, DiscordIcon } from './Icons'
import { Reveal } from './Reveal'
import './Sections.css'

/* ── About ──────────────────────────────────────────────────── */

export function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__head">
          <Reveal as="p" className="eyebrow">
            {about.eyebrow}
          </Reveal>
          <Reveal as="h2" className="section-title" delay={80}>
            {about.title}
          </Reveal>
        </div>

        <div className="about__body">
          {about.body.map((paragraph, index) => (
            <Reveal as="p" key={index} className="about__para" delay={120 + index * 90}>
              {paragraph}
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container">
        <ol className="cycle">
          {about.cycle.map((step, index) => (
            <Reveal as="li" key={step.tick} className="cycle__step" delay={index * 130}>
              <span className="cycle__tick">{step.tick}</span>
              <span className="cycle__line" aria-hidden="true" />
              <h3 className="cycle__title">{step.title}</h3>
              <p className="cycle__copy">{step.copy}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

/* ── Factions ───────────────────────────────────────────────── */

function FactionCard({ card, index }) {
  const ref = usePointerGlow()

  return (
    <Reveal as="li" delay={index * 110}>
      <article ref={ref} className="card faction">
        <span className="faction__tick">{card.tick}</span>
        <span className="faction__mark" aria-hidden="true" />
        <h3 className="faction__name">{card.codename}</h3>
        <p className="faction__state">
          <span className="faction__dot" aria-hidden="true" />
          {card.state}
        </p>
      </article>
    </Reveal>
  )
}

export function Factions() {
  return (
    <section id="factions" className="section">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {factions.eyebrow}
        </Reveal>
        <Reveal as="h2" className="section-title" delay={80}>
          {factions.title}
        </Reveal>
        <Reveal as="p" className="section-lede" delay={140}>
          {factions.lede}
        </Reveal>

        <ul className="faction__grid">
          {factions.cards.map((card, index) => (
            <FactionCard key={card.tick} card={card} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ── Funding ────────────────────────────────────────────────── */

export function Funding() {
  const glowRef = usePointerGlow()
  const [copied, setCopied] = useState(false)

  const copyHandle = async () => {
    try {
      await navigator.clipboard.writeText(site.fundingContact)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard blocked (insecure context, or the visitor said no) — the
      // handle is right there on screen to copy by hand.
    }
  }

  return (
    <section id="funding" className="section">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          {funding.eyebrow}
        </Reveal>
        <Reveal as="h2" className="section-title" delay={80}>
          {funding.title}
        </Reveal>

        <div className="funding">
          <Reveal delay={140}>
            <div ref={glowRef} className="card funding__panel">
              <p className="funding__body">{funding.body}</p>

              <div className="funding__contact">
                <span className="funding__label">Contact</span>
                <button type="button" className="handle" onClick={copyHandle}>
                  <span className="handle__at">@</span>
                  {site.fundingContact}
                  <span className="handle__icon">{copied ? <CheckIcon /> : <CopyIcon />}</span>
                  <span className="sr-only">{copied ? 'Copied' : 'Copy Discord handle'}</span>
                </button>
                <span className={`handle__toast ${copied ? 'is-shown' : ''}`} aria-live="polite">
                  {copied ? 'Copied' : ''}
                </span>
              </div>

              <a
                className="btn btn--primary funding__cta"
                href={site.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn__label">
                  <DiscordIcon />
                  {funding.ctaLabel}
                  <ArrowIcon />
                </span>
              </a>

              <p className="funding__note">{funding.note}</p>
            </div>
          </Reveal>

          <ul className="funding__list">
            {funding.supports.map((item, index) => (
              <Reveal as="li" key={item.title} className="funding__item" delay={200 + index * 100}>
                <h3 className="funding__item-title">{item.title}</h3>
                <p className="funding__item-copy">{item.copy}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ── Updates ────────────────────────────────────────────────── */

export function Updates() {
  const glowRef = usePointerGlow()

  return (
    <section id="updates" className="section">
      <div className="container">
        <Reveal>
          <div ref={glowRef} className="card updates">
            <div className="updates__copy">
              <p className="eyebrow">{updates.eyebrow}</p>
              <h2 className="section-title updates__title">{updates.title}</h2>
              <p className="section-lede">{updates.body}</p>
            </div>

            <div className="updates__action">
              <a
                className="btn btn--primary updates__cta"
                href={site.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn__label">
                  <DiscordIcon size={20} />
                  {updates.ctaLabel}
                  <ArrowIcon />
                </span>
              </a>
              <span className="updates__url">{site.discordInvite.replace('https://', '')}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
