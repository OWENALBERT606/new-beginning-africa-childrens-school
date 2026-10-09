import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { site } from '../data/site.js'

function CTASection({
  title = 'Give your child a new beginning',
  text = 'Places are open in both the primary and the secondary school. Talk to our office about joining.',
  applyUrl,
}) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta__actions">
          {applyUrl ? (
            <a className="btn btn--light" href={applyUrl} target="_blank" rel="noopener noreferrer">
              Apply online <ArrowRight size={18} aria-hidden="true" />
            </a>
          ) : (
            <Link className="btn btn--light" to="/admissions">
              Apply for a place <ArrowRight size={18} aria-hidden="true" />
            </Link>
          )}
          <a className="btn btn--ghost-light" href={site.phones[0].href}>
            <Phone size={18} aria-hidden="true" /> {site.phones[0].label}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTASection
