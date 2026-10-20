import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Target, UserRound } from 'lucide-react'
import AboutNav from '../components/AboutNav.jsx'
import CTASection from '../components/CTASection.jsx'
import PageHero from '../components/PageHero.jsx'
import Pending from '../components/Pending.jsx'
import { schools, site } from '../data/site.js'

const heroes = {
  history: {
    title: 'Our history',
    text: 'How New Beginning started, and the milestones along the way.',
  },
  anthem: {
    title: 'School anthem',
    text: 'The song our pupils and students sing together.',
  },
  profile: {
    title: 'School profile',
    text: 'The key facts about our two schools in one place.',
  },
  director: {
    title: 'Director’s message',
    text: 'A word from Bishop Edward Ssemango, director of New Beginning.',
  },
  administration: {
    title: 'Administration',
    text: 'The people who founded and lead our schools.',
  },
}

const milestones = [
  {
    when: '2025',
    title: 'The secondary school is started',
    text: `${schools.secondary.name} – Buikwe is started by Bishop Edward Ssemango and Pastor Eva Nabaggala Ssemango of Seeta Lumuli, Mukono District, under the patronage of Dr. Peter Nalos, as an inclusive day and boarding school.`,
  },
  {
    when: 'January 2026',
    title: 'Top of Buikwe District',
    text: `${schools.primary.name} is listed first in Buikwe in Weekend Vision’s “Top schools per district” table.`,
  },
  {
    when: '2026',
    title: 'A theme for the year',
    text: `The schools take “${site.theme.text}” (${site.theme.reference}) as their theme: ${site.theme.call.charAt(0).toLowerCase()}${site.theme.call.slice(1)}`,
  },
]

const founders = [
  { name: 'Bishop Edward Ssemango', role: 'Founder', photo: '/images/director.jpg' },
  { name: 'Pastor Eva Nabaggala Ssemango', role: 'Founder' },
  { name: 'Dr. Peter Nalos', role: 'Patron', photo: '/images/peter-nalos.jpg', position: 'center 30%' },
]

function History() {
  return (
    <div className="container narrow">
      <p className="eyebrow">Our story</p>
      <h2>Started with a vision for the transformation of Africa</h2>
      <p className="lead">
        New Beginning was started to give children a sense of belonging and a holistic education. It is built on a
        born-again Christian foundation and welcomes families of all religious denominations.
      </p>
      <ol className="timeline">
        {milestones.map((item) => (
          <li key={item.title}>
            <span className="timeline__when">{item.when}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
      <p className="note">More of our story, including how the primary school began, will be added to this page.</p>
    </div>
  )
}

// Draft prepared for the school to review before publishing.
const directorMessage = [
  'Welcome to New Beginning African Children Schools.',
  'Our name says what we believe about every child who walks through our gate: whatever their story so far, here they can begin again. We started this work with a vision to give children a sense of belonging and a holistic education for the transformation of Africa, and that vision still guides every decision we make.',
  `Our two schools grow together. At ${schools.primary.name}, young children are given a joyful, caring start and strong foundations in reading, writing and number, guided by our motto, “${schools.primary.motto}.” At ${schools.secondary.name}, students build on that foundation with academic learning in the arts and sciences, joined with hands-on skills such as tailoring and agriculture, so that they leave able to stand on their own feet.`,
  'We are a school family built on a born-again Christian foundation, and we gladly welcome families of every denomination. We want our learners to honour God, to live to love, to love to learn and to strive for excellence. Honesty, decency, compassion and servanthood matter to us as much as marks on a report.',
  `We have been encouraged to see our pupils rewarded for their hard work, and we are grateful to every teacher, parent and friend who has made it possible. Our theme for ${site.theme.year} reminds us that “${site.theme.text.toLowerCase()}” (${site.theme.reference}). When teachers, parents, pupils and students pull together, our children succeed.`,
  'Thank you for your interest in New Beginning. I warmly invite you to visit us, meet our teachers and see our learners at work. You will be very welcome.',
]

function DirectorMessage() {
  return (
    <div className="container letter">
      <aside className="letter__side">
        <img className="letter__photo" src="/images/director.jpg" alt="Portrait of Bishop Edward Ssemango, director of New Beginning" />
        <p className="letter__role">Bishop Edward Ssemango</p>
        <p className="letter__org">Director &amp; Founder</p>
        <p className="letter__org">{site.name}</p>
      </aside>
      <article className="letter__body">
        <p className="eyebrow">Director’s message</p>
        <h2>Every child deserves a new beginning</h2>
        {directorMessage.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className="letter__sign">
          With every blessing,
          <strong>Bishop Edward Ssemango</strong>
          <span>Director, {site.name}</span>
        </p>
      </article>
    </div>
  )
}

function Profile() {
  return (
    <div className="container">
      <div className="profile-grid">
        {[schools.primary, schools.secondary].map((school) => (
          <article className={`glance ${school.theme}`} key={school.slug}>
            <div className="profile-head">
              <img src={school.logo} alt={`${school.name} logo`} width="72" height="72" loading="lazy" />
              <div>
                <p className="school-card__label">{school.label}</p>
                <h3>{school.name}</h3>
              </div>
            </div>
            <dl>
              {school.glance.map((item) => (
                <div key={item.term}>
                  <dt>{item.term}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>
            <Link className="link-arrow" to={`/${school.slug}`}>
              Visit the {school.label.toLowerCase()} <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>

      <div className="mv-grid profile-mv">
        <article className="mv">
          <span className="feature__icon">
            <Target size={24} aria-hidden="true" />
          </span>
          <h2>Our mission</h2>
          <p>{schools.secondary.mission}</p>
        </article>
        <article className="mv">
          <span className="feature__icon">
            <Eye size={24} aria-hidden="true" />
          </span>
          <h2>Our vision</h2>
          <p>{schools.secondary.vision}</p>
        </article>
      </div>

      <div className="core-values">
        <h3>Our core values</h3>
        <ul className="chips">
          {schools.secondary.coreValues.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </ul>
      </div>

      <dl className="profile-facts">
        <div>
          <dt>Location</dt>
          <dd>{site.location}</dd>
        </div>
        <div>
          <dt>Postal address</dt>
          <dd>{site.address}</dd>
        </div>
        <div>
          <dt>Affiliation</dt>
          <dd>{site.membership}</dd>
        </div>
        <div>
          <dt>Theme for {site.theme.year}</dt>
          <dd>
            “{site.theme.text}” — {site.theme.reference}
          </dd>
        </div>
      </dl>
    </div>
  )
}

function Administration() {
  return (
    <div className="container">
      <header className="section-head">
        <p className="eyebrow">Founders and patron</p>
        <h2>The people behind New Beginning</h2>
      </header>
      <div className="people">
        {founders.map((person) => (
          <article className="person" key={person.name}>
            {person.photo ? (
              <img
                className="person__photo"
                src={person.photo}
                alt={person.name}
                loading="lazy"
                style={person.position ? { objectPosition: person.position } : undefined}
              />
            ) : (
              <span className="person__avatar">
                <UserRound size={34} aria-hidden="true" />
              </span>
            )}
            <h3>{person.name}</h3>
            <p>{person.role}</p>
          </article>
        ))}
      </div>
      <Pending what="The head teachers and administrative staff of both schools" />
    </div>
  )
}

function AboutSection({ page }) {
  const hero = heroes[page]

  return (
    <>
      <PageHero eyebrow="About us" title={hero.title} text={hero.text} />
      <AboutNav />

      <section className="section">
        {page === 'history' && <History />}
        {page === 'profile' && <Profile />}
        {page === 'administration' && <Administration />}
        {page === 'anthem' && (
          <div className="container">
            <Pending what="The words of our school anthem" />
          </div>
        )}
        {page === 'director' && (
          <div className="container">
            <DirectorMessage />
          </div>
        )}
      </section>

      <CTASection />
    </>
  )
}

export default AboutSection
