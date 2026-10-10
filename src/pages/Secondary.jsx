import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BedDouble,
  BookOpen,
  CalendarCheck,
  Check,
  Eye,
  FlaskConical,
  GraduationCap,
  Hammer,
  Heart,
  Images,
  Monitor,
  Presentation,
  Scissors,
  School,
  Sprout,
  Target,
} from 'lucide-react'
import HeroSlides from '../components/HeroSlides.jsx'
import PhotoGallery from '../components/PhotoGallery.jsx'
import { usePageMeta } from '../components/usePageMeta.js'
import { gallery, schools, site } from '../data/site.js'

const school = schools.secondary
const secondaryPhotos = gallery.filter((photo) => photo.school === 'Secondary').slice(0, 12)

const heroSlides = [
  { src: '/images/reading.jpg', alt: 'Secondary students reading together outside a classroom block' },
  { src: '/images/girls-computer-centre.jpg', alt: 'Secondary school girls in front of the Larry Bell Family Computer Centre' },
  { src: '/images/exam-hall.jpg', alt: 'Secondary students writing an examination in a large hall' },
  { src: '/images/boys-computer-centre.jpg', alt: 'Secondary school boys lined up outside the computer centre' },
  { src: '/images/girls-group.jpg', alt: 'A large group of secondary school girls in uniform on the school lawn' },
]

const heroFeatures = [
  { icon: BookOpen, label: 'Arts & sciences' },
  { icon: Hammer, label: 'Hands-on skills' },
  { icon: BedDouble, label: 'Day & boarding' },
  { icon: Heart, label: 'Godly character' },
]

const stats = [
  { icon: School, value: '2025', label: 'Year founded' },
  { icon: GraduationCap, value: 'S.1 – S.3', label: 'Classes offered' },
  { icon: BedDouble, value: 'Day & Boarding', label: 'An inclusive school' },
  { icon: Heart, value: '7', label: 'Core values' },
]

const programmes = [
  {
    title: 'Arts & Sciences',
    tagline: 'A comprehensive curriculum',
    text: 'Taught by vibrant, qualified staff.',
    photo: '/images/exam-hall.jpg',
    alt: 'Secondary students writing an examination in a large hall',
  },
  {
    title: 'Vocational Skills',
    tagline: 'Hands-on training',
    text: 'Tailoring and agriculture for self-reliance.',
    photo: '/images/tailoring.jpg',
    alt: 'A student sewing at a tailoring machine during a hands-on training lesson',
  },
  {
    title: 'ICT & Computing',
    tagline: 'Ready for a digital world',
    text: 'Lessons in the Larry Bell Family Computer Centre.',
    photo: '/images/computer-centre.jpg',
    alt: 'The Larry Bell Family Computer Centre seen across the lawn',
  },
  {
    title: 'Day & Boarding',
    tagline: 'An inclusive school',
    text: 'A mattress and blanket are provided free.',
    photo: '/images/boarding-welcome.jpg',
    alt: 'Students wrapped in new blankets standing beside new mattresses in front of a school building',
  },
]

const facilities = [
  { icon: Presentation, label: 'Smart classrooms' },
  { icon: FlaskConical, label: 'Science laboratory' },
  { icon: Monitor, label: 'Computer centre' },
  { icon: Scissors, label: 'Tailoring workshop' },
  { icon: Sprout, label: 'School garden' },
]

const life = [
  {
    label: 'Friendship',
    photo: '/images/students-lounge.jpg',
    alt: 'Seven secondary students in uniform seated together',
  },
  {
    label: 'Fun days',
    photo: '/images/fun-day-secondary.jpg',
    alt: 'A secondary student smiling between two mascots in bear and panda costumes',
  },
  {
    label: 'Community service',
    photo: '/images/community-wheelchairs.jpg',
    alt: 'Community members seated in new wheelchairs with visitors standing behind them at the school',
  },
  {
    label: 'Celebrations',
    photo: '/images/prize-giving.jpg',
    alt: 'Students in uniform holding wrapped gifts during a school ceremony',
  },
]

function Secondary() {
  usePageMeta(school.name, school.summary)

  return (
    <div className="sp theme-secondary">
      {/* Hero */}
      <section className="sp-hero">
        <HeroSlides className="sp-hero__slides" slides={heroSlides} />
        <p className="sp-hero__note" aria-hidden="true">
          Belong.
          <br />
          Believe.
          <br />
          Behave.
        </p>
        <p className="sp-hero__pill">
          <img src={school.logo} alt="" width="46" height="46" />
          <span>
            <strong>Day &amp; Boarding</strong>
            Senior One – Senior Three
          </span>
        </p>

        <div className="container sp-hero__inner">
          <div className="sp-hero__copy hero__copy">
            <p className="sp-hero__kicker">Belong · Believe · Behave</p>
            <h1>
              Holistic education for the <em>transformation of Africa</em>
            </h1>
            <p className="sp-hero__text">
              {school.name} – Buikwe is an inclusive day and boarding school that joins academic learning with
              hands-on skills.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={school.applyUrl} target="_blank" rel="noopener noreferrer">
                Apply for admission <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="btn btn--outline" href="#fees">
                See school fees
              </a>
            </div>
            <ul className="sp-hero__features">
              {heroFeatures.map((item) => (
                <li key={item.label}>
                  <item.icon size={30} strokeWidth={1.5} aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="sp-stats">
        <ul className="container sp-stats__grid">
          {stats.map((item) => (
            <li className="sp-stat" key={item.label}>
              <item.icon size={40} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Programmes */}
      <section className="section">
        <div className="container">
          <header className="section-head section-head--row sp-head">
            <div>
              <p className="eyebrow">Our programmes</p>
              <h2>A strong foundation for a brighter future</h2>
            </div>
            <p>Academic learning and practical training side by side, so students leave with something they can do.</p>
            <a className="link-arrow" href={school.applyUrl} target="_blank" rel="noopener noreferrer">
              Apply online <ArrowRight size={18} aria-hidden="true" />
            </a>
          </header>
          <div className="sp-prog-grid">
            {programmes.map((item) => (
              <article className="sp-prog" key={item.title}>
                <div className="sp-prog__photo">
                  <img src={item.photo} alt={item.alt} loading="lazy" />
                </div>
                <div className="sp-prog__body">
                  <h3>{item.title}</h3>
                  <p className="sp-prog__tagline">{item.tagline}</p>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="sp-subjects">
            <h3>{school.subjectsTitle}</h3>
            <ul className="chips">
              {school.subjects.map((subject) => (
                <li key={subject}>{subject}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Campus */}
      <section className="section section--sand">
        <div className="container sp-campus">
          <Link className="campus__media" to="/gallery" aria-label="Open the photo gallery">
            <img
              src="/images/aerial-classroom-block.jpg"
              alt="Aerial view of an L-shaped classroom block around a lawn, with hills beyond"
              loading="lazy"
            />
            <span className="campus__button">
              <Images size={28} aria-hidden="true" />
            </span>
          </Link>
          <div>
            <p className="eyebrow">Our campus</p>
            <h2>A spacious, modern place to learn</h2>
            <p>
              Smart classes with projectors, spacious classrooms, a science laboratory and green grounds in Buikwe
              District.
            </p>
            <ul className="sp-facilities">
              {facilities.map((item) => (
                <li className="sp-facility" key={item.label}>
                  <item.icon size={30} strokeWidth={1.5} aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
            <ul className="checklist sp-offers">
              {school.offers.items.map((item, index) => (
                <li key={item} style={{ '--i': index }}>
                  <Check size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* A look inside */}
      <section className="section">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Our facilities</p>
            <h2>A look inside the school</h2>
          </header>
          <div className="peek">
            {school.inside.map((item) => (
              <figure className="peek__item" key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Life at school */}
      <section className="section section--sand">
        <div className="container sp-life">
          <div className="sp-life__copy">
            <p className="eyebrow">Life at New Beginning</p>
            <h2>More than just academics</h2>
            <p>
              We believe in a balanced education: making friends for life, serving the community, celebrating
              together and carrying yourself with character.
            </p>
            <Link className="btn btn--primary" to="/gallery">
              Explore the gallery <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="sp-life__tiles">
            {life.map((item) => (
              <Link className="sp-life__tile" to="/gallery" key={item.label}>
                <img src={item.photo} alt={item.alt} loading="lazy" />
                <span>
                  {item.label}
                  <i>
                    <ArrowRight size={14} aria-hidden="true" />
                  </i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="section">
        <div className="container split split--top">
          <div>
            <p className="eyebrow">Our background</p>
            <h2>About the secondary school</h2>
            {school.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="glance">
            <h3>At a glance</h3>
            <dl>
              {school.glance.map((item, index) => (
                <div key={item.term} style={{ '--i': index }}>
                  <dt>{item.term}</dt>
                  <dd>{item.detail}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Mission, vision, values */}
      <section className="section section--sand">
        <div className="container sp-values">
          <div className="sp-values__head">
            <p className="eyebrow">What we stand for</p>
            <h2>Real purpose. Real values.</h2>
          </div>
          <article className="sp-value">
            <span className="feature__icon">
              <Target size={24} aria-hidden="true" />
            </span>
            <h3>Our mission</h3>
            <p>{school.mission}</p>
          </article>
          <article className="sp-value">
            <span className="feature__icon">
              <Eye size={24} aria-hidden="true" />
            </span>
            <h3>Our vision</h3>
            <p>{school.vision}</p>
          </article>
          <article className="sp-value">
            <span className="feature__icon">
              <Heart size={24} aria-hidden="true" />
            </span>
            <h3>Our core values</h3>
            <ul>
              {school.coreValues.map((value, index) => (
                <li key={value} style={{ '--i': index }}>
                  <Check size={16} aria-hidden="true" />
                  {value}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Fees and contact */}
      <section className="section" id="fees">
        <div className="container split split--top">
          <div>
            <p className="eyebrow">Fees structure</p>
            <h2>School fees are affordable</h2>
            <table className="fees">
              <tbody>
                {school.fees.rows.map((row, index) => (
                  <tr key={row.item} style={{ '--i': index }}>
                    <th scope="row">{row.item}</th>
                    <td>{row.amount}/=</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="note">{school.fees.note}</p>
          </div>

          <aside className="glance">
            <h3>Contact the secondary school</h3>
            <dl>
              <div>
                <dt>Phone</dt>
                {school.contact.phones.map((phone) => (
                  <dd key={phone.href}>
                    <a href={phone.href}>{phone.label}</a>
                  </dd>
                ))}
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${school.contact.email}`}>{school.contact.email}</a>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{site.location}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="container">
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

      {/* Secondary school gallery */}
      <section className="section section--sand">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Gallery</p>
            <h2>Life in our secondary school</h2>
            <p>Tap any photo to see it larger.</p>
          </header>
          <PhotoGallery photos={secondaryPhotos} className="gallery--four" />
          <p className="pp-gallery-more">
            <Link className="btn btn--outline" to="/gallery">
              See the full gallery <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* Admissions band */}
      <section className="sp-cta">
        <div className="container sp-cta__inner">
          <div>
            <p className="sp-cta__kicker">Admissions open</p>
            <h2>Give your child the right start</h2>
            <p>Join a community that helps every student belong, believe and behave.</p>
          </div>
          <div className="sp-cta__actions">
            <a className="btn btn--primary" href={school.applyUrl} target="_blank" rel="noopener noreferrer">
              Apply for admission <ArrowRight size={18} aria-hidden="true" />
            </a>
            <Link className="btn btn--ghost-light" to="/contact">
              <CalendarCheck size={18} aria-hidden="true" /> Schedule a campus visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Secondary
