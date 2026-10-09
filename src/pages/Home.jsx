import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Hammer,
  Heart,
  Images,
  Monitor,
  Phone,
  Quote,
  School,
  ShieldCheck,
  Sprout,
  Users,
} from 'lucide-react'
import EnquiryForm from '../components/EnquiryForm.jsx'
import { usePageMeta } from '../components/usePageMeta.js'
import { schools, site, values } from '../data/site.js'

const heroCards = [
  {
    icon: Sprout,
    title: 'Primary School',
    text: 'A caring start from Primary One to Primary Seven.',
    to: '/primary',
  },
  {
    icon: GraduationCap,
    title: 'Secondary School',
    text: 'Academic learning joined with skills for life.',
    to: '/secondary',
  },
  {
    icon: Hammer,
    title: 'Vocational Skills',
    text: 'Practical, hands-on training alongside classwork.',
    to: '/secondary',
  },
  {
    icon: Monitor,
    title: 'Computer Centre',
    text: 'ICT lessons in the Larry Bell Family Computer Centre.',
    to: '/secondary',
  },
]

const counters = [
  { icon: School, number: '2', label: 'Schools on one campus' },
  { icon: BookOpen, number: '7', label: 'Primary classes, P1 – P7' },
  { icon: Heart, number: '3', label: 'Values we live by' },
  { icon: Users, number: '1', label: 'New Beginning family' },
]

const programmes = [
  {
    tag: 'Primary',
    title: 'Lower Primary',
    text: 'Reading, writing and number skills built steadily from the very first class.',
    photo: '/images/primary-pupils.jpg',
    alt: 'Primary pupils in colourful uniforms on the school compound',
    to: '/primary',
  },
  {
    tag: 'Primary',
    title: 'Upper Primary',
    text: 'Confident learners prepared carefully for the Primary Leaving Examination.',
    photo: '/images/campus-students.jpg',
    alt: 'Students in two rows in front of a brightly painted school building',
    to: '/primary',
  },
  {
    tag: 'Secondary',
    title: 'Secondary Academics',
    text: 'Sciences, humanities and languages taught with focus and steady revision.',
    photo: '/images/reading.jpg',
    alt: 'Secondary students reading together outside a classroom block',
    to: '/secondary',
  },
  {
    tag: 'Secondary',
    title: 'Vocational Skills',
    text: 'Hands-on training that gives students something practical they can do.',
    photo: '/images/boys-computer-centre.jpg',
    alt: 'Secondary school boys lined up outside the computer centre',
    to: '/secondary',
  },
  {
    tag: 'Secondary',
    title: 'Computer Studies',
    text: 'ICT skills for study and work, taught in our own computer centre.',
    photo: '/images/girls-computer-centre.jpg',
    alt: 'Secondary school girls in front of the Larry Bell Family Computer Centre',
    to: '/secondary',
  },
  {
    tag: 'Both schools',
    title: 'Character & Faith',
    text: 'Discipline, respect and belief shape every school day, in class and out.',
    photo: '/images/staff-students.jpg',
    alt: 'Students standing with teachers on the steps of the school hall',
    to: '/about',
  },
]

const reasons = [
  { icon: School, title: 'One campus', text: 'From Primary One through secondary school.' },
  { icon: Users, title: 'Known by name', text: 'Teachers who notice and care for every learner.' },
  { icon: ShieldCheck, title: 'Faith & discipline', text: 'Good character at the centre of school life.' },
  { icon: Hammer, title: 'Skills for life', text: 'Practical and computer skills beside classwork.' },
]

const masonry = [
  { src: '/images/girls-group.jpg', alt: 'A large group of secondary school girls in uniform on the school lawn' },
  { src: '/images/primary-pupils.jpg', alt: 'Primary pupils in colourful uniforms smiling on the school compound' },
  { src: '/images/prize-giving.jpg', alt: 'Students holding wrapped gifts during a school ceremony' },
  { src: '/images/students-lounge.jpg', alt: 'Seven secondary students in uniform seated together' },
  { src: '/images/class-photo.jpg', alt: 'Students and teachers holding up a framed class photograph' },
  { src: '/images/girls-line.jpg', alt: 'Secondary school girls in uniform standing in a line on the lawn' },
]

const partners = ['Larry Bell Family', 'Behring Global Educational Foundation']

function SchoolCard({ school }) {
  return (
    <article className={`school-card ${school.theme}`}>
      <div className="school-card__photo">
        <img src={school.photo} alt={school.photoAlt} loading="lazy" />
        <img className="school-card__logo" src={school.logo} alt={`${school.name} logo`} loading="lazy" />
      </div>
      <div className="school-card__body">
        <p className="school-card__label">{school.label}</p>
        <h3>{school.name}</h3>
        <p className="school-card__motto">“{school.motto}”</p>
        <p>{school.summary}</p>
        <div className="school-card__foot">
          <span>{school.levels}</span>
          <Link className="link-arrow" to={`/${school.slug}`}>
            Visit the {school.label.toLowerCase()} <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}

function Home() {
  usePageMeta()

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__kicker">Welcome to New Beginning</p>
            <h1>
              Start your child’s beautiful and <em>bright future</em>
            </h1>
            <p className="hero__text">
              A primary school and a vocational secondary school on one campus — two schools, one family, walking
              the whole journey with every learner.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/admissions">
                Apply for a place <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="btn btn--ghost-light" to="/about">
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cards overlapping the hero */}
      <section className="hero-cards">
        <div className="container hero-cards__grid">
          {heroCards.map((card, index) => (
            <Link className="hero-card" to={card.to} key={card.title}>
              <span className="hero-card__num">0{index + 1}</span>
              <span className="hero-card__icon">
                <card.icon size={26} aria-hidden="true" />
              </span>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container split">
          <div className="about-media">
            <img
              className="about-media__main"
              src="/images/staff-students.jpg"
              alt="Students standing with teachers and staff on the steps of the school hall"
              loading="lazy"
            />
            <img
              className="about-media__round"
              src="/images/primary-pupils.jpg"
              alt="Primary pupils smiling on the school compound"
              loading="lazy"
            />
            <p className="about-media__badge">
              <strong>2</strong> schools,
              <br />
              one family
            </p>
          </div>

          <div>
            <p className="eyebrow">About us</p>
            <h2>
              Our schools <em className="accent">inspire</em> every child to do more
            </h2>
            <p>
              New Beginning brings a primary school and a vocational secondary school together, so a child can grow
              up in one community that knows them well and expects their best.
            </p>

            <div className="about-points">
              <div className="about-points__list">
                <div className="about-point">
                  <img src={schools.primary.logo} alt="" width="56" height="56" loading="lazy" />
                  <div>
                    <h3>Primary School</h3>
                    <p>{schools.primary.name} — strong foundations in a joyful, caring setting.</p>
                  </div>
                </div>
                <div className="about-point">
                  <img src={schools.secondary.logo} alt="" width="56" height="56" loading="lazy" />
                  <div>
                    <h3>Secondary School</h3>
                    <p>{schools.secondary.name} — academics joined with practical skills.</p>
                  </div>
                </div>
              </div>
              <blockquote className="about-quote">
                <Quote size={28} aria-hidden="true" />
                Whatever a child’s background, joining us is a new beginning.
              </blockquote>
            </div>

            <div className="about-actions">
              <Link className="btn btn--primary" to="/about">
                Discover more <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="call" href={site.phones[0].href}>
                <span className="call__icon">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <span>
                  <small>Call the office</small>
                  <strong>{site.phones[0].label}</strong>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="counters">
        <div className="container counters__grid">
          {counters.map((item) => (
            <div className="counter" key={item.label}>
              <span className="counter__icon">
                <item.icon size={30} aria-hidden="true" />
              </span>
              <div>
                <strong>{item.number}</strong>
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programmes */}
      <section className="section">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">What we offer</p>
            <h2>
              Let’s look at our <em className="accent">programmes</em>
            </h2>
            <p>From a child’s first class to the day they leave secondary school with skills for life.</p>
          </header>
          <div className="programme-grid">
            {programmes.map((item) => (
              <article className="programme" key={item.title}>
                <div className="programme__photo">
                  <img src={item.photo} alt={item.alt} loading="lazy" />
                  <span>{item.tag}</span>
                </div>
                <div className="programme__body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link className="link-arrow" to={item.to}>
                    Learn more <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Campus feature */}
      <section className="section section--sand">
        <div className="container campus">
          <div>
            <p className="eyebrow">Our campus</p>
            <h2>
              Take a look at <em className="accent">life</em> at New Beginning
            </h2>
            <p>
              Bright classrooms, green lawns, a computer centre and a school hall — and learners who are proud to
              wear the uniform.
            </p>
            <Link className="btn btn--primary" to="/gallery">
              Open the gallery <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <Link className="campus__media" to="/gallery" aria-label="Open the photo gallery">
            <img
              src="/images/girls-computer-centre.jpg"
              alt="Secondary school girls standing in rows in front of the Larry Bell Family Computer Centre"
              loading="lazy"
            />
            <span className="campus__button">
              <Images size={28} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section why">
        <div className="container split">
          <div>
            <p className="eyebrow eyebrow--light">Why choose us</p>
            <h2>
              We care deeply, and we expect <em className="accent-light">your child’s best</em>
            </h2>
            <p>
              Parents want two things from a school: that their child is safe and loved, and that their child is
              stretched. We work hard at both.
            </p>
            <div className="why__grid">
              {reasons.map((item) => (
                <div className="why__item" key={item.title}>
                  <span className="why__icon">
                    <item.icon size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why__media">
            <img
              src="/images/reading.jpg"
              alt="Secondary students in uniform reading together outside a classroom block"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="section">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Gallery</p>
            <h2>
              Our photo <em className="accent">gallery</em>
            </h2>
            <p>Moments from our learners, our teachers and our campus.</p>
          </header>
          <div className="masonry">
            {masonry.map((photo) => (
              <Link to="/gallery" key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions banner */}
      <section className="offer">
        <img
          src="/images/girls-group.jpg"
          alt="A large group of secondary school girls in uniform on the school lawn"
          loading="lazy"
        />
        <div className="container offer__inner">
          <div className="offer__box">
            <p className="eyebrow eyebrow--light">Admissions</p>
            <h2>Places are open — join the New Beginning family today</h2>
            <p>We welcome new learners into both the primary and the secondary school.</p>
            <div className="offer__actions">
              {[schools.primary, schools.secondary].map((school) => (
                <a
                  className="btn btn--light"
                  href={school.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={school.slug}
                >
                  Apply — {school.label} <ArrowRight size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry form + values */}
      <section className="section section--sand">
        <div className="container split split--top">
          <div className="enquiry">
            <div className="enquiry__head">
              <h2>Start your enrolment</h2>
              <p>Tell us about your child and we will get back to you.</p>
            </div>
            <div className="enquiry__body">
              <EnquiryForm subject="Admissions enquiry" />
            </div>
          </div>

          <div>
            <p className="eyebrow">What we stand for</p>
            <h2>
              Three words every <em className="accent">learner</em> carries
            </h2>
            <p>The motto of our secondary school is lived out by the whole New Beginning family.</p>
            <ol className="stand">
              {values.map((value, index) => (
                <li key={value.word}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{value.word}</h3>
                    <p>{value.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* The two schools */}
      <section className="section">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Two schools, one family</p>
            <h2>
              Browse our <em className="accent">schools</em>
            </h2>
            <p>Each school has its own name, badge and motto. They share one campus and one set of values.</p>
          </header>
          <div className="school-grid">
            <SchoolCard school={schools.primary} />
            <SchoolCard school={schools.secondary} />
          </div>
        </div>
      </section>

      {/* Mottos */}
      <section className="section section--sand">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Our mottos</p>
            <h2>
              Words we <em className="accent">live by</em>
            </h2>
          </header>
          <div className="quote-grid">
            {[schools.primary, schools.secondary].map((school) => (
              <figure className={`quote-card ${school.theme}`} key={school.slug}>
                <Quote size={34} aria-hidden="true" />
                <blockquote>“{school.motto}”</blockquote>
                <figcaption>
                  <img src={school.logo} alt="" width="52" height="52" loading="lazy" />
                  <span>
                    <strong>{school.label}</strong>
                    {school.name}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="partners">
        <div className="container partners__inner">
          <p>With thanks to our friends and partners</p>
          <ul>
            {partners.map((name) => (
              <li className="partner" key={name}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Home
