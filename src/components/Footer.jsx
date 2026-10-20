import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { navigation, schools, site } from '../data/site.js'

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__about">
          <div className="footer__logos">
            <img src={schools.primary.logo} alt={`${schools.primary.name} logo`} width="72" height="72" loading="lazy" />
            <img src={schools.secondary.logo} alt={`${schools.secondary.name} logo`} width="72" height="72" loading="lazy" />
          </div>
          <p>
            {schools.primary.name} and {schools.secondary.name} — a primary and a secondary school
            growing together.
          </p>
          <p className="footer__member">{site.membership}.</p>
        </div>

        <div>
          <h2 className="footer__title">Explore</h2>
          <ul className="footer__list">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/donate">Donate</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Our mottos</h2>
          <ul className="footer__list footer__mottos">
            <li>
              <span>Primary</span>“{schools.primary.motto}”
            </li>
            <li>
              <span>Secondary</span>“{schools.secondary.motto}”
            </li>
          </ul>
        </div>

        <div>
          <h2 className="footer__title">Contact</h2>
          <ul className="footer__list footer__contact">
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>
                {site.location}
                <br />
                {site.address}
              </span>
            </li>
            {site.phones.map((phone) => (
              <li key={phone.href}>
                <Phone size={16} aria-hidden="true" />
                <a href={phone.href}>{phone.label}</a>
              </li>
            ))}
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {year} {site.name}. All rights reserved.
        </span>
        <span>
          Powered by{' '}
          <a className="footer__credit" href="https://www.maripatechagency.com" target="_blank" rel="noopener noreferrer">
            MARIPA TECH AGENCY
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
