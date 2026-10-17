import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Award,
  BookOpen,
  Calculator,
  CalendarCheck,
  FlaskConical,
  Globe,
  GraduationCap,
  Heart,
  Music,
  Palette,
  Pencil,
  Quote,
  School,
  ShieldCheck,
  Smile,
  Sprout,
  Trophy,
  Users,
} from 'lucide-react'
import HeroSlides from '../components/HeroSlides.jsx'
import PhotoGallery from '../components/PhotoGallery.jsx'
import { usePageMeta } from '../components/usePageMeta.js'
import { gallery, schools, site } from '../data/site.js'

const school = schools.primary
const primaryPhotos = gallery.filter((photo) => photo.school === 'Primary')

const heroSlides = [
  { src: '/images/primary-girl-smile.jpg', alt: 'A young pupil in a checked dress laughing and looking up' },
  { src: '/images/primary-peace.jpg', alt: 'A smiling young pupil in a checked dress making a peace sign' },
  { src: '/images/primary-reading.jpg', alt: 'A primary pupil in a checked uniform reading a textbook at his desk' },
  { src: '/images/primary-meal.jpg', alt: 'Young pupils in checked dresses seated at a table with plates of food' },
  { src: '/images/primary-smile.jpg', alt: 'A young primary pupil in a checked uniform smiling at his desk' },
  { src: '/images/primary-girl.jpg', alt: 'A primary pupil in a checked dress posing with a hand on her hip' },
  { src: '/images/primary-sports.jpg', alt: 'A primary pupil smiling in the school sports uniform' },
]

const heroFeatures = [
  { icon: BookOpen, label: 'Strong foundations' },
  { icon: Users, label: 'Caring teachers' },
  { icon: Heart, label: 'Character & faith' },
  { icon: ShieldCheck, label: 'Safe & nurturing' },
  { icon: Sprout, label: 'Room to grow' },
]

const classes = ['Primary One', 'Primary Two', 'Primary Three', 'Primary Four', 'Primary Five', 'Primary Six', 'Primary Seven']

const facts = [
  { icon: School, value: 'P1 – P7', label: 'Seven primary classes' },
  { icon: Award, value: 'PLE', label: 'National exam preparation' },
  { icon: BookOpen, value: 'National', label: 'Uganda primary curriculum' },
  { icon: Trophy, value: 'No. 1', label: 'In Buikwe District, 2025 PLE' },
  { icon: Heart, value: 'Prov. 22:6', label: 'The verse behind our motto' },
  { icon: GraduationCap, value: 'One campus', label: 'Secondary school next door' },
]

const stages = [
  {
    icon: Smile,
    photo: '/images/primary-smile.jpg',
    alt: 'A young primary pupil in a checked uniform smiling at his desk',
    title: 'Lower Primary',
    tagline: 'Primary One – Three',
    text: 'Reading, writing and number skills, taught through themes young children enjoy.',
  },
  {
    icon: Pencil,
    photo: '/images/primary-girl.jpg',
    alt: 'A primary pupil in a checked dress posing with a hand on her hip',
    title: 'Transition Year',
    tagline: 'Primary Four',
    text: 'A careful step up to subject-based learning, with English as the language of class.',
  },
  {
    icon: BookOpen,
    photo: '/images/primary-classroom.jpg',
    alt: 'Primary pupils in checked uniforms clapping at their desks in a bright classroom',
    title: 'Upper Primary',
    tagline: 'Primary Five – Seven',
    text: 'Deeper subject knowledge and steady preparation for the Primary Leaving Examination.',
  },
  {
    icon: GraduationCap,
    photo: '/images/reading.jpg',
    alt: 'Secondary students reading together outside a classroom block',
    title: 'After Primary Seven',
    tagline: 'On to secondary',
    text: 'Pupils can continue at New Beginning Vocational Secondary School.',
    to: '/secondary',
  },
]

const subjects = [
  { icon: Pencil, label: 'English' },
  { icon: Calculator, label: 'Mathematics' },
  { icon: FlaskConical, label: 'Integrated Science' },
  { icon: Globe, label: 'Social Studies' },
  { icon: Heart, label: 'Religious Education' },
]

const activities = [
  { icon: Smile, label: 'Play & games' },
  { icon: Trophy, label: 'Sport & PE' },
  { icon: Music, label: 'Music' },
  { icon: Palette, label: 'Creative arts' },
  { icon: Heart, label: 'Faith & values' },
  { icon: BookOpen, label: 'Reading' },
]

const applySteps = [
  { title: 'Apply online', text: 'Fill in the primary school application form.' },
  { title: 'Visit the school', text: 'See the campus and meet the teachers.' },
  { title: 'Join the family', text: 'We guide you through uniform and the first day.' },
]

// Like the main enquiry form, this hands the message to the visitor's email
// app: there is no server behind the site.
function QuickEnquiry() {
  const [values, setValues] = useState({ name: '', phone: '', level: classes[0] })
  const update = (event) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }))

  const submit = (event) => {
    event.preventDefault()
    const body = `Name: ${values.name}\nPhone: ${values.phone}\nInterested in: Primary School\nClass: ${values.level}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Primary school enquiry — ${values.name}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="pp-enquiry" onSubmit={submit}>
      <div className="pp-enquiry__head">
        <h2>Enquire now</h2>
        <p>We will get in touch with you.</p>
      </div>
      <div className="pp-enquiry__body">
        <label className="field">
          <span className="sr-only">Parent’s name</span>
          <input name="name" value={values.name} onChange={update} placeholder="Parent’s name" autoComplete="name" required />
        </label>
        <label className="field">
          <span className="sr-only">Phone number</span>
          <input
            name="phone"
            type="tel"
            value={values.phone}
            onChange={update}
            placeholder="Phone number"
            autoComplete="tel"
            required
          />
        </label>
        <label className="field">
          <span className="sr-only">Class applying for</span>
          <select name="level" value={values.level} onChange={update}>
            {classes.map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </label>
        <button className="btn btn--primary" type="submit">
          Submit enquiry
        </button>
        <p className="form__note">Opens your email app with the message ready to send.</p>
      </div>
    </form>
  )
}

function Primary() {
  usePageMeta(school.name, school.summary)

  return (
    <div className="pp theme-primary">
      {/* Hero */}
      <section className="pp-hero">
        <div className="container pp-hero__inner">
          <div className="pp-hero__copy hero__copy">
            <p className="pp-hero__kicker">Our motto</p>
            <h1>
              Train up a child <em>in a way he should go.</em>
            </h1>
            <p className="pp-hero__text">
              {school.name} gives every child a joyful, caring start — and the knowledge, values and confidence to
              go far.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href={school.applyUrl} target="_blank" rel="noopener noreferrer">
                Admissions open — apply
              </a>
              <Link className="btn btn--outline" to="/contact">
                Arrange a visit
              </Link>
            </div>
            <ul className="pp-hero__features">
              {heroFeatures.map((item) => (
                <li key={item.label}>
                  <item.icon size={30} strokeWidth={1.5} aria-hidden="true" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <HeroSlides className="pp-hero__photo" slides={heroSlides} interval={4000} />
          <QuickEnquiry />
        </div>
      </section>

      {/* Welcome + facts */}
      <section className="section pp-welcome">
        <div className="container pp-welcome__inner">
          <div className="pp-welcome__badge">
            <img src={school.logo} alt={`${school.name} logo`} width="260" height="260" />
          </div>
          <div>
            <p className="eyebrow">Welcome to our primary school</p>
            <h2>A place where every child can shine</h2>
            <p>
              Our pupils are known by name, encouraged every day, and taught by teachers who believe that every
              child can do well. We care about good results and good character together.
            </p>
            <Link className="btn btn--outline btn--sm" to="/about">
              Know more about us
            </Link>
          </div>
          <ul className="pp-facts">
            {facts.map((item) => (
              <li className="pp-fact" key={item.label}>
                <item.icon size={34} strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* District ranking */}
      <section className="pp-rank-wrap">
        <div className="container pp-rank">
          <div className="pp-rank__paper">
            <img
              src="/images/ple-ranking.jpg"
              alt="Newspaper table of top schools in Buikwe, with New Beginning African Children ranked first"
              loading="lazy"
            />
            <span className="rank__highlight" aria-hidden="true" />
          </div>
          <div>
            <p className="eyebrow">In the news</p>
            <h2>Ranked the top primary school in Buikwe District</h2>
            <p>
              Weekend Vision listed New Beginning African Children’s School first in Buikwe in its “Top schools per
              district” table, published on 31 January 2026 after the 2025 Primary Leaving Examination results.
            </p>
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="section pp-stages">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Our classes</p>
            <h2>A programme for every stage</h2>
          </header>
          <div className="pp-stage-grid">
            {stages.map((stage) => (
              <article className="pp-stage" key={stage.title}>
                <div className="pp-stage__art">
                  <span className="pp-stage__badge">
                    <stage.icon size={22} aria-hidden="true" />
                  </span>
                  <img src={stage.photo} alt={stage.alt} loading="lazy" />
                </div>
                <div className="pp-stage__body">
                  <h3>{stage.title}</h3>
                  <p className="pp-stage__tagline">{stage.tagline}</p>
                  <p>{stage.text}</p>
                  {stage.to ? (
                    <Link className="link-arrow" to={stage.to}>
                      Read more <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  ) : (
                    <a className="link-arrow" href={school.applyUrl} target="_blank" rel="noopener noreferrer">
                      Apply <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects band */}
      <section className="pp-band">
        <ul className="container pp-band__grid">
          {subjects.map((item) => (
            <li className="pp-band__item" key={item.label}>
              <item.icon size={40} strokeWidth={1.4} aria-hidden="true" />
              <div>
                <strong>{item.label}</strong>
                <span>Core subject</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Activities */}
      <section className="section">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Beyond the classroom</p>
            <h2>Growing the whole child</h2>
          </header>
          <div className="pp-activities">
            <img
              src="/images/primary-seesaw.jpg"
              alt="Young pupils playing on a colourful seesaw"
              loading="lazy"
            />
            <ul>
              {activities.map((item) => (
                <li className="pp-activity" key={item.label}>
                  <span>
                    <item.icon size={24} aria-hidden="true" />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Motto, how to apply, visit */}
      <section className="section pp-bottom-wrap">
        <div className="container pp-bottom">
          <article className="pp-panel">
            <h2>Our motto</h2>
            <Quote className="pp-panel__quote" size={34} aria-hidden="true" />
            <blockquote>“{school.motto}.”</blockquote>
            <div className="pp-panel__by">
              <img src={school.logo} alt="" width="52" height="52" loading="lazy" />
              <span>
                <strong>Proverbs 22:6</strong>
                The verse our school is built on
              </span>
            </div>
          </article>

          <article className="pp-panel">
            <h2>How to join</h2>
            <ol className="pp-steps">
              {applySteps.map((step, index) => (
                <li key={step.title}>
                  <span className="pp-steps__num">
                    <small>Step</small>
                    {index + 1}
                  </span>
                  <div>
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </div>
                </li>
              ))}
            </ol>
            <a className="link-arrow" href={school.applyUrl} target="_blank" rel="noopener noreferrer">
              Apply online <ArrowRight size={16} aria-hidden="true" />
            </a>
          </article>

          <article className="pp-tour">
            <h2>Come and visit us</h2>
            <p>See the school for yourself, meet our teachers and ask every question you have.</p>
            <Link className="btn btn--light" to="/contact">
              Arrange your visit <CalendarCheck size={18} aria-hidden="true" />
            </Link>
            <a className="pp-tour__phone" href={site.phones[0].href}>
              or call {site.phones[0].label}
            </a>
          </article>
        </div>
      </section>

      {/* Primary school gallery */}
      <section className="section section--sand">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Gallery</p>
            <h2>Life in our primary school</h2>
            <p>Tap any photo to see it larger.</p>
          </header>
          <PhotoGallery photos={primaryPhotos} className="gallery--portrait" />
          <p className="pp-gallery-more">
            <Link className="btn btn--outline" to="/gallery">
              See the full gallery <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Primary
