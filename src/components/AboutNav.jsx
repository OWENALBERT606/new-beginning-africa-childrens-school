import { NavLink } from 'react-router-dom'
import { aboutLinks } from '../data/site.js'

// Row of links shown under the hero on every About page.
function AboutNav() {
  return (
    <nav className="about-nav" aria-label="About">
      <div className="container about-nav__inner">
        <NavLink to="/about" end>
          Overview
        </NavLink>
        {aboutLinks.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default AboutNav
