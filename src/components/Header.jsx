import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { navigation, schools, site } from '../data/site.js'

function Brand() {
  return (
    <Link className="brand" to="/" aria-label={`${site.name} — home`}>
      <span className="brand__logos" aria-hidden="true">
        <img src={schools.primary.logo} alt="" width="48" height="48" />
        <img src={schools.secondary.logo} alt="" width="48" height="48" />
      </span>
      <span className="brand__text">
        <strong>New Beginning</strong>
        <small>{site.strapline}</small>
      </span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__motto">Two schools. One family.</span>
          <div className="topbar__links">
            <a href={site.phones[0].href}>
              <Phone size={14} aria-hidden="true" />
              {site.phones[0].label}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={14} aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="container header__inner">
        <Brand />

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>

        <nav id="site-nav" className={`nav${open ? ' is-open' : ''}`} aria-label="Main" onClick={() => setOpen(false)}>
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className="nav__link">
              {item.label}
            </NavLink>
          ))}
          <Link className="btn btn--primary btn--sm" to="/admissions">
            Admissions
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
