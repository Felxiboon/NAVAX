import { footer, nav, site } from '../content'
import { DiscordIcon, StarIcon } from './Icons'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="footer__logo" href="#top">
            <span className="footer__star">
              <StarIcon size={14} />
            </span>
            {site.name}
          </a>
          <p className="footer__tagline">{site.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href={site.discordInvite} target="_blank" rel="noopener noreferrer">
                <DiscordIcon size={14} />
                Discord
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container footer__fine">
        <p>{footer.disclaimer}</p>
        <p>
          <a href={footer.photoCredit.href} target="_blank" rel="noopener noreferrer">
            {footer.photoCredit.text}
          </a>
        </p>
      </div>
    </footer>
  )
}
