import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, CalendarDays, Clock, HandHeart, Users } from 'lucide-react'
import HeroSlides from '../components/HeroSlides.jsx'
import PhotoGallery from '../components/PhotoGallery.jsx'
import { usePageMeta } from '../components/usePageMeta.js'
import { gallery, schools, site } from '../data/site.js'

const communityPhotos = gallery.filter((photo) => photo.school === 'Church' || photo.school === 'Community')

const heroSlides = [
  {
    src: '/images/students-praying.jpg',
    alt: 'Pupils in checked uniforms kneeling and praying during a worship service',
    position: 'center 40%',
  },
  {
    src: '/images/human-pyramid.jpg',
    alt: 'Three pupils standing on the shoulders of three smiling visitors surrounded by schoolmates',
    position: 'center 30%',
  },
  {
    src: '/images/visitors-team-group.jpg',
    alt: 'Pupils gathered on the field around two seated visitors and a football',
    position: 'center 60%',
  },
  {
    src: '/images/community-wheelchairs.jpg',
    alt: 'A large group of community members seated in new wheelchairs with visitors standing behind them at the school',
    position: 'center 62%',
  },
  {
    src: '/images/staff-team.jpg',
    alt: 'A long row of staff standing in front of a school building marked African Children Schools',
    position: 'center 78%',
  },
  {
    src: '/images/aerial-campus.jpg',
    alt: 'Aerial view of red-roofed school buildings, lawns and paths surrounded by trees',
    position: 'center 55%',
  },
]

const pillars = [
  {
    icon: BookOpen,
    title: 'Built on faith',
    text: 'Our schools stand on a born-again Christian foundation.',
  },
  {
    icon: Users,
    title: 'Open to all',
    text: 'We embrace families of all religious denominations.',
  },
  {
    icon: HandHeart,
    title: 'Serving others',
    text: 'Compassion and servanthood are two of our core values.',
  },
]

function Church() {
  usePageMeta('Church', 'The faith behind New Beginning, and the people and community we serve.')

  return (
    <div className="church">
      {/* Hero */}
      <section className="hero hero--page">
        <HeroSlides className="hero__slides" slides={heroSlides} />
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="hero__kicker">Our church</p>
            <h1>
              Faith at the heart of <em>New Beginning</em>
            </h1>
            <p className="hero__text">The church family behind our schools, and the community we serve together.</p>
            <ul className="hero__times">
              {site.services.map((service) => (
                <li key={service.day}>
                  <Clock size={16} aria-hidden="true" />
                  {service.day} · {service.time}
                </li>
              ))}
            </ul>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/contact">
                Get in touch <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="btn btn--ghost-light" to="/about">
                About our schools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Our foundation</p>
            <h2>A school family rooted in the church</h2>
            <p>
              New Beginning was started by Bishop Edward Ssemango and Pastor Eva Nabaggala Ssemango, under the
              patronage of Dr. Peter Nalos.
            </p>
            <p>
              Its mission is to nurture a generation that honours God, lives to love, loves to learn and strives for
              excellence.
            </p>
          </div>
          <div className="split__media">
            <img
              src="/images/students-praying.jpg"
              alt="Pupils in checked uniforms kneeling and praying during a worship service"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Friends of the school */}
      <section className="section section--sand">
        <div className="container split">
          <div className="friend-photo">
            <img
              src="/images/friend-with-pupil.jpg"
              alt="A smiling man in a cap holding a young pupil in a checked school dress"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">Friends of the school</p>
            <h2>Love that crosses oceans</h2>
            <p>
              Friends and partners from near and far stand with our learners. They visit, pray, play and give, so
              that every child at New Beginning knows they are loved and valued.
            </p>
            <p>Our schools are under the patronage of Dr. Peter Nalos.</p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/donate">
                Stand with our children <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link className="btn btn--outline" to="/about/administration">
                Meet our founders
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scriptures */}
      <section className="verse-band">
        <div className="container verse-band__grid">
          <blockquote>
            “{site.theme.text}.”
            <cite>
              {site.theme.reference} · our theme for {site.theme.year}
            </cite>
          </blockquote>
          <blockquote>
            “{schools.primary.motto}.”
            <cite>Proverbs 22:6 · our primary school motto</cite>
          </blockquote>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">What we believe</p>
            <h2>Faith that shows in how we live</h2>
          </header>
          <div className="feature-grid feature-grid--three">
            {pillars.map((item) => (
              <article className="feature" key={item.title}>
                <span className="feature__icon">
                  <item.icon size={24} aria-hidden="true" />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community service */}
      <section className="section section--sand">
        <div className="container split">
          <div className="split__media">
            <img
              src="/images/wheelchair-fitting.jpg"
              alt="Visitors and helpers fitting an elderly man into a new wheelchair"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">Serving our community</p>
            <h2>Love in action</h2>
            <p>
              Our campus has welcomed neighbours and visiting friends for a wheelchair distribution day, where
              members of the community were fitted with new wheelchairs.
            </p>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Our people</p>
            <h2>Worship, friends and community</h2>
          </header>
          <PhotoGallery photos={communityPhotos} className="gallery--four" />
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <header className="section-head section-head--center section-head--light">
            <p className="sp-cta__kicker">Worship with us</p>
            <h2>Church services</h2>
            <p>Everyone is welcome to join us.</p>
          </header>
          <div className="services__grid">
            {site.services.map((service) => (
              <article className="service" key={service.day}>
                <span className="service__icon">
                  <CalendarDays size={26} aria-hidden="true" />
                </span>
                <h3>{service.day}</h3>
                <p className="service__time">
                  <Clock size={18} aria-hidden="true" />
                  {service.time}
                </p>
                <p>{service.name}</p>
              </article>
            ))}
          </div>
          <p className="services__more">
            <Link className="btn btn--primary" to="/contact">
              Ask for directions <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Church
