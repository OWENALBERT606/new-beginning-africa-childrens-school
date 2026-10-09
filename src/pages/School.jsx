import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, GraduationCap, Hammer, Heart, Monitor, ShieldCheck, Sprout, Users } from 'lucide-react'
import CTASection from '../components/CTASection.jsx'
import { usePageMeta } from '../components/usePageMeta.js'
import { schools } from '../data/site.js'

const icons = {
  book: BookOpen,
  graduation: GraduationCap,
  hammer: Hammer,
  heart: Heart,
  monitor: Monitor,
  shield: ShieldCheck,
  sprout: Sprout,
  users: Users,
}

function School({ school: key }) {
  const school = schools[key]
  usePageMeta(school.name, school.summary)

  return (
    <div className={school.theme}>
      <section className="school-hero">
        <div className="container school-hero__inner">
          <div>
            <div className="school-hero__badge">
              <img src={school.logo} alt={`${school.name} logo`} width="88" height="88" />
              <span>{school.label}</span>
            </div>
            <h1>{school.name}</h1>
            <p className="school-hero__motto">“{school.motto}”</p>
            <p className="school-hero__text">{school.summary}</p>
            <div className="hero__actions">
              <a className="btn btn--light" href={school.applyUrl} target="_blank" rel="noopener noreferrer">
                Apply online <ArrowRight size={18} aria-hidden="true" />
              </a>
              <Link className="btn btn--ghost-light" to="/contact">
                Ask a question
              </Link>
            </div>
          </div>
          <div className="school-hero__media">
            <img src={school.photo} alt={school.photoAlt} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--top">
          <div>
            <p className="eyebrow">Welcome</p>
            <h2>About the {school.label.toLowerCase()}</h2>
            {school.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="glance">
            <h3>At a glance</h3>
            <dl>
              {school.glance.map((item) => (
                <div key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">What makes us different</p>
            <h2>How we teach and care</h2>
          </header>
          <div className="feature-grid">
            {school.highlights.map((item) => {
              const Icon = icons[item.icon]
              return (
                <article className="feature" key={item.title}>
                  <span className="feature__icon">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Learning</p>
            <h2>{school.subjectsTitle}</h2>
          </header>
          <ul className="chips">
            {school.subjects.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>

          {school.gallery.length > 0 && (
            <div className="photo-row">
              {school.gallery.map((photo) => (
                <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
              ))}
            </div>
          )}

          <div className="next-step">
            <div>
              <h3>{school.next.title}</h3>
              <p>{school.next.text}</p>
            </div>
            <Link className="btn btn--outline" to={school.next.to}>
              {school.next.cta} <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={`Join the ${school.label.toLowerCase()}`}
        text="Apply online in a few minutes, or talk to our office about places, requirements and school fees."
        applyUrl={school.applyUrl}
      />
    </div>
  )
}

export default School
