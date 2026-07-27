import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { nav, site } from '../content'
import { useScrollPast } from '../hooks/useScrollPast'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { DiscordIcon, StarIcon } from './Icons'
import './Nav.css'

const SECTION_IDS = nav.map((item) => item.id)

export function Nav() {
  const scrolled = useScrollPast(24)
  const active = useScrollSpy(SECTION_IDS)
  const [menuOpen, setMenuOpen] = useState(false)

  const listRef = useRef(null)
  const linkRefs = useRef({})

  // Slide the highlight pill under whichever link is active. Measuring in a
  // layout effect means it is already in place on the frame it becomes
  // visible, so it never flashes at position zero first.
  useLayoutEffect(() => {
    const list = listRef.current
    const link = active ? linkRefs.current[active] : null
    if (!list || !link) return

    const move = () => {
      list.style.setProperty('--pill-x', `${link.offsetLeft}px`)
      list.style.setProperty('--pill-w', `${link.offsetWidth}px`)
    }

    move()

    // Web fonts landing late change the link widths under us.
    const observer = new ResizeObserver(move)
    observer.observe(list)
    return () => observer.disconnect()
  }, [active])

  // Close the mobile sheet on Escape, and stop the page behind it scrolling.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header className={`nav ${scrolled ? 'is-condensed' : ''}`}>
      <div className="nav__inner container">
        <a className="nav__logo" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="nav__star">
            <StarIcon size={15} />
          </span>
          <span className="nav__wordmark">{site.name}</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          <ul ref={listRef} className={`nav__list ${active ? 'has-active' : ''}`}>
            <li className="nav__pill" aria-hidden="true" />
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  ref={(el) => {
                    linkRefs.current[item.id] = el
                  }}
                  className={`nav__link ${active === item.id ? 'is-active' : ''}`}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  <span className="nav__tick">{item.tick}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <a
            className="btn btn--primary nav__cta"
            href={site.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="btn__label">
              <DiscordIcon size={16} />
              Discord
            </span>
          </a>

          <button
            className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* `inert` (rather than `hidden`) keeps the sheet in the layer while it is
          closed, so it can animate both ways, but takes it out of the tab order
          and off the accessibility tree in between. */}
      <div id="mobile-menu" className={`sheet ${menuOpen ? 'is-open' : ''}`} inert={!menuOpen}>
        <ul className="sheet__list">
          {nav.map((item, index) => (
            <li key={item.id} style={{ '--i': index }}>
              <a className="sheet__link" href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                <span className="sheet__tick">{item.tick}</span>
                {item.label}
              </a>
            </li>
          ))}
          <li style={{ '--i': nav.length }}>
            <a
              className="btn btn--primary sheet__cta"
              href={site.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <span className="btn__label">
                <DiscordIcon size={16} />
                Join the Discord
              </span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
