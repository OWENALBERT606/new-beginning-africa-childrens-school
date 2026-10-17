import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Church,
  Clock,
  GraduationCap,
  Hammer,
  Heart,
  Images,
  Phone,
  Quote,
  School,
  ShieldCheck,
  Sprout,
  Star,
  Trophy,
  Users,
} from 'lucide-react'
import EnquiryForm from '../components/EnquiryForm.jsx'
import HeroSlides from '../components/HeroSlides.jsx'
import { schools, site, values } from '../data/site.js'

const heroSlides = [
  { src: '/images/reading.jpg', alt: 'Secondary students reading together outside a classroom block' },
  { src: '/images/primary-boys-tree.jpg', alt: 'Primary boys in checked shirts posing around a tree on the school compound' },
  { src: '/images/human-pyramid.jpg', alt: 'Pupils standing on the shoulders of three smiling visitors surrounded by schoolmates', position: 'center 30%' },
  { src: '/images/primary-running.jpg', alt: 'A young pupil in sports uniform running across the grass by the playground' },
  { src: '/images/students-praying.jpg', alt: 'Pupils kneeling and praying during a worship service' },
]

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
    icon: Church,
    title: 'Church',
    text: 'Worship with us on Sundays and Wednesdays.',
    to: '/church',
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
    photo: '/images/primary-sports.jpg',
    position: 'center 22%',
    alt: 'A primary pupil smiling in the school sports uniform',
    to: '/primary',
  },
  {
    tag: 'Primary',
    title: 'Upper Primary',
    text: 'Confident learners prepared carefully for the Primary Leaving Examination.',
    photo: '/images/primary-reading.jpg',
    position: 'center 48%',
    alt: 'A primary pupil in a checked uniform reading a textbook at his desk',
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
    text: 'Hands-on training such as tailoring and agriculture, to nurture self-dependable citizens.',
    photo: '/images/tailoring.jpg',
    alt: 'A student sewing at a tailoring machine during a hands-on training lesson',
    to: '/secondary',
  },
  {
    tag: 'Secondary',
    title: 'Computer Studies',
    text: 'ICT skills for study and work, taught in our own computer centre.',
    photo: '/images/computer-centre.jpg',
    alt: 'The Larry Bell Family Computer Centre seen across the lawn',
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
  { icon: School, title: 'Top in Buikwe', text: 'Our primary school ranked first in the district in the 2025 PLE.' },
  { icon: Users, title: 'Known by name', text: 'Teachers who notice and care for every learner.' },
  { icon: ShieldCheck, title: 'Faith & discipline', text: 'Good character at the centre of school life.' },
  { icon: Hammer, title: 'Skills for life', text: 'Practical and computer skills beside classwork.' },
]

const masonry = [
  { src: '/images/primary-girl-smile.jpg', alt: 'A young pupil in a checked dress laughing and looking up' },
  { src: '/images/girls-group.jpg', alt: 'A large group of secondary school girls in uniform on the school lawn' },
  { src: '/images/visitor-peace.jpg', alt: 'A smiling visitor crouching beside a young pupil, both making a peace sign' },
  { src: '/images/primary-seesaw.jpg', alt: 'Young pupils playing on a colourful seesaw' },
  { src: '/images/exam-hall.jpg', alt: 'Secondary students writing an examination in a large hall' },
  { src: '/images/cultural-dance.jpg', alt: 'Pupils in traditional skirts performing a cultural dance' },
  { src: '/images/piggyback.jpg', alt: 'A visitor giving a smiling pupil a piggyback ride' },
  { src: '/images/primary-peace.jpg', alt: 'A smiling young pupil in a checked dress making a peace sign' },
  { src: '/images/tailoring.jpg', alt: 'A student sewing at a tailoring machine' },
]

const explore = [
  {
    label: 'Primary School',
    title: schools.primary.name,
    text: 'A joyful, caring start from Primary One to Primary Seven, ranked first in Buikwe District.',
    photo: '/images/primary-boys-tree.jpg',
    alt: 'Primary boys in checked shirts posing around a tree',
    thumbs: ['/images/primary-slide.jpg', '/images/primary-writing.jpg', '/images/nursery-dance.jpg'],
    to: '/primary',
    cta: 'Visit the primary school',
  },
  {
    label: 'Secondary School',
    title: schools.secondary.name,
    text: 'A day and boarding school joining arts and sciences with tailoring, agriculture and ICT.',
    photo: '/images/reading.jpg',
    alt: 'Secondary students reading together outside a classroom block',
    thumbs: ['/images/exam-hall.jpg', '/images/tailoring.jpg', '/images/boys-computer-centre.jpg'],
    to: '/secondary',
    cta: 'Visit the secondary school',
  },
  {
    label: 'Church',
    title: 'Our church family',
    text: 'Worship, prayer and friends from near and far who stand with our learners.',
    photo: '/images/students-praying.jpg',
    alt: 'Pupils kneeling and praying during a worship service',
    thumbs: ['/images/human-pyramid.jpg', '/images/visitor-shoe.jpg', '/images/community-wheelchairs.jpg'],
    to: '/church',
    cta: 'Visit the church page',
  },
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
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <HeroSlides className="hero__slides" slides={heroSlides} />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__kicker">Welcome to New Beginning</p>
            <h1>
              Start your child’s beautiful and <em>bright future</em>
            </h1>
            <p className="hero__text">
              A primary school and a day and boarding vocational secondary school in Buikwe District — two schools,
              one family, walking the whole journey with every learner.
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

      {/* District ranking */}
      <section className="rank-section">
        <div className="container rank">
          <div className="rank__copy">
            <div className="rank__medal" aria-hidden="true">
              <Star className="rank__star rank__star--a" size={22} />
              <Star className="rank__star rank__star--b" size={16} />
              <Star className="rank__star rank__star--c" size={18} />
              <span className="rank__disc">
                <small>No.</small>1
              </span>
            </div>
            <p className="rank__kicker">
              <Trophy size={18} aria-hidden="true" /> In the news · Weekend Vision
            </p>
            <h2>
              Ranked the <em>best school</em> in Buikwe District
            </h2>
            <p>
              {schools.primary.name} was listed first in Buikwe in Weekend Vision’s “Top schools per district”
              table, published after the 2025 Primary Leaving Examination results.
            </p>
            <ul className="rank__facts">
              <li>1st in Buikwe District</li>
              <li>2025 PLE results</li>
              <li>31 Jan – 1 Feb 2026</li>
            </ul>
            <Link className="btn btn--light" to="/primary">
              Visit the primary school <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <figure className="rank__clip">
            <div className="rank__paper">
              <img
                src="/images/ple-ranking.jpg"
                alt="Newspaper table of top schools in Buikwe, with New Beginning African Children ranked first"
                loading="lazy"
              />
              <span className="rank__highlight" aria-hidden="true" />
            </div>
            <figcaption>Weekend Vision, 31 January – 1 February 2026</figcaption>
          </figure>
        </div>
      </section>

      {/* Explore: primary, secondary, church */}
      <section className="section section--sand">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Explore New Beginning</p>
            <h2>
              Two schools and a <em className="accent">church family</em>
            </h2>
            <p>Every part of New Beginning has its own page. Pick one to find out more.</p>
          </header>
          <div className="explore">
            {explore.map((item) => (
              <Link className="explore__card" to={item.to} key={item.to}>
                <span className="explore__photo">
                  <img src={item.photo} alt={item.alt} loading="lazy" />
                  <span className="explore__label">{item.label}</span>
                </span>
                <span className="explore__thumbs" aria-hidden="true">
                  {item.thumbs.map((src) => (
                    <img src={src} alt="" key={src} loading="lazy" />
                  ))}
                </span>
                <span className="explore__body">
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                  <span className="link-arrow">
                    {item.cta} <ArrowRight size={18} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            ))}
          </div>
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
              src="/images/primary-peace.jpg"
              alt="A smiling young pupil in a checked dress making a peace sign"
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
                  <img src={item.photo} alt={item.alt} loading="lazy" style={{ objectPosition: item.position }} />
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
              src="/images/block-front.jpg"
              alt="A long classroom block with orange pillars and blue walls behind a planted lawn"
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

      {/* Primary school spotlight */}
      <section className="section">
        <div className="container split">
          <div className="spot-photos">
            <img src="/images/primary-slide.jpg" alt="A teacher watching young pupils come down a playground slide" loading="lazy" />
            <img src="/images/primary-girl-smile.jpg" alt="A young pupil in a checked dress laughing" loading="lazy" />
            <img src="/images/cultural-dance.jpg" alt="Pupils performing a cultural dance" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">Primary school</p>
            <h2>
              A joyful start for our <em className="accent">youngest learners</em>
            </h2>
            <p>
              Reading and number in the classroom, play on the swings and slides, and music and dance on special
              days. Our pupils are guided by the motto “{schools.primary.motto}.”
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/primary">
                Visit the primary school <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a className="btn btn--outline" href={schools.primary.applyUrl} target="_blank" rel="noopener noreferrer">
                Apply online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Church spotlight */}
      <section className="section church-spot">
        <div className="container split">
          <div>
            <p className="eyebrow eyebrow--light">Church</p>
            <h2>
              Faith at the heart of <em className="accent-light">New Beginning</em>
            </h2>
            <p>
              Our schools are built on a born-again Christian foundation and welcome every denomination. Friends
              from near and far visit to pray, play and serve alongside our learners.
            </p>
            <ul className="hero__times">
              {site.services.map((service) => (
                <li key={service.day}>
                  <Clock size={16} aria-hidden="true" />
                  {service.day} · {service.time}
                </li>
              ))}
            </ul>
            <div className="hero__actions">
              <Link className="btn btn--light" to="/church">
                Visit the church page <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="spot-photos spot-photos--church">
            <img src="/images/students-praying.jpg" alt="Pupils kneeling and praying during a worship service" loading="lazy" />
            <img src="/images/visitor-shoe.jpg" alt="A visitor kneeling to fasten a young pupil’s shoe" loading="lazy" />
            <img src="/images/visitors-team-group.jpg" alt="Pupils gathered on the field around two seated visitors" loading="lazy" />
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
            <p>Moments from our primary school, our secondary school and our church family.</p>
          </header>
          <div className="masonry">
            {masonry.map((photo) => (
              <Link to="/gallery" key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </Link>
            ))}
          </div>
          <p className="home-links">
            <Link className="btn btn--outline" to="/primary">
              Primary School
            </Link>
            <Link className="btn btn--outline" to="/secondary">
              Secondary School
            </Link>
            <Link className="btn btn--outline" to="/church">
              Church
            </Link>
            <Link className="btn btn--primary" to="/gallery">
              Full gallery <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </p>
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
          <figure className="theme-card">
            <p className="theme-card__year">Our {site.theme.year} theme</p>
            <blockquote>“{site.theme.text}”</blockquote>
            <figcaption>
              <strong>{site.theme.reference}</strong>
              {site.theme.call}
            </figcaption>
          </figure>
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
