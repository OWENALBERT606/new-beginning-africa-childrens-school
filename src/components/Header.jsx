import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Heart, Mail, Menu, Phone, X } from 'lucide-react'
import { navigation, schools, site } from '../data/site.js'

// Below this width the menu collapses into the mobile panel (matches the CSS breakpoint).
const DESKTOP = '(min-width: 1081px)'

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
  // Dropdown state: 'auto' follows hover and keyboard focus, 'open' is pinned by
  // a click, 'closed' hides it once a page is chosen until the pointer leaves.
  const [dropdown, setDropdown] = useState('auto')
  const itemRef = useRef(null)

  // A pinned dropdown closes on Escape or a click anywhere else.
  useEffect(() => {
    if (dropdown !== 'open') return undefined
    const onClick = (event) => {
      if (!itemRef.current?.contains(event.target)) setDropdown('auto')
    }
    const onKey = (event) => {
      if (event.key === 'Escape') setDropdown('auto')
    }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [dropdown])

  const toggleDropdown = () => setDropdown((value) => (value === 'open' ? 'auto' : 'open'))

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
          {navigation.map((item) =>
            item.children ? (
              <div
                className={`nav__item${dropdown === 'open' ? ' is-open' : ''}${dropdown === 'closed' ? ' is-closed' : ''}`}
                key={item.to}
                ref={itemRef}
                onMouseLeave={() => setDropdown((value) => (value === 'closed' ? 'auto' : value))}
              >
                <NavLink
                  to={item.to}
                  className="nav__link"
                  aria-haspopup="true"
                  aria-expanded={dropdown === 'open'}
                  onClick={(event) => {
                    // On desktop a click opens the dropdown instead of leaving the page;
                    // in the mobile panel the sub-links are already listed underneath.
                    if (!window.matchMedia(DESKTOP).matches) return
                    event.preventDefault()
                    event.stopPropagation()
                    toggleDropdown()
                  }}
                >
                  {item.label}
                </NavLink>
                <button
                  className="nav__caret"
                  type="button"
                  aria-expanded={dropdown === 'open'}
                  aria-label={`${item.label} menu`}
                  onClick={(event) => {
                    event.stopPropagation()
                    toggleDropdown()
                  }}
                >
                  <ChevronDown size={16} aria-hidden="true" />
                </button>
                <div className="nav__menu" onClick={() => setDropdown('closed')}>
                  {item.children.map((child) => (
                    <NavLink key={child.to} to={child.to} className="nav__menu-link">
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className="nav__link">
                {item.label}
              </NavLink>
            ),
          )}
          <Link className="btn btn--primary btn--sm" to="/admissions">
            Admissions
          </Link>
          <Link className="btn btn--donate btn--sm" to="/donate">
            <Heart size={16} aria-hidden="true" /> Donate
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
