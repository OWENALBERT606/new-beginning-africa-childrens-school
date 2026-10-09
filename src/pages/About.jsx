import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CTASection from '../components/CTASection.jsx'
import PageHero from '../components/PageHero.jsx'
import { usePageMeta } from '../components/usePageMeta.js'
import { schools, values } from '../data/site.js'

function About() {
  usePageMeta('About us', 'Who we are: a primary and a vocational secondary school sharing one campus and one set of values.')

  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Two schools. One family. One purpose."
        text="New Beginning brings a primary school and a vocational secondary school together, so a child can grow up in one community that knows them well."
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>A place to start well and finish strong</h2>
            <p>
              New Beginning is made up of two schools: {schools.primary.name}, our primary school, and{' '}
              {schools.secondary.name}, our secondary school. Each has its own badge and motto, and both share the
              same heart.
            </p>
            <p>
              We believe education is more than passing examinations. It is about raising young people who know
              they are valued, who think for themselves, who work with their hands as well as their minds, and who
              treat others well.
            </p>
            <p>
              That is why our name matters to us. Whatever a child’s background, joining us is a new beginning.
            </p>
          </div>
          <div className="split__media">
            <img
              src="/images/staff-students.jpg"
              alt="Students standing with teachers and staff on the steps of the school hall"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Our mottos</p>
            <h2>Words we live by</h2>
          </header>
          <div className="motto-grid">
            {[schools.primary, schools.secondary].map((school) => (
              <article className={`motto ${school.theme}`} key={school.slug}>
                <img src={school.logo} alt={`${school.name} logo`} width="120" height="120" loading="lazy" />
                <div>
                  <p className="school-card__label">{school.label}</p>
                  <h3>“{school.motto}”</h3>
                  <p>{school.name}</p>
                  <Link className="link-arrow" to={`/${school.slug}`}>
                    Learn more <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Our values</p>
            <h2>Belong. Believe. Behave.</h2>
          </header>
          <div className="feature-grid feature-grid--three">
            {values.map((value, index) => (
              <article className="feature" key={value.word}>
                <span className="feature__icon feature__icon--num">{index + 1}</span>
                <h3>{value.word}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container split">
          <div className="split__media">
            <img
              src="/images/girls-computer-centre.jpg"
              alt="Secondary school girls standing in front of the Larry Bell Family Computer Centre"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">With thanks</p>
            <h2>Built with the help of friends</h2>
            <p>
              Our campus has grown through the generosity of people who believe in our learners. We are grateful
              to the Larry Bell family, whose name our computer centre carries, and to the Behring Global
              Educational Foundation, recognised on our classroom block.
            </p>
            <p>
              To every parent, teacher, friend and partner who has stood with us: thank you.
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Come and see for yourself" text="The best way to know a school is to visit it. Get in touch and we will arrange a time." />
    </>
  )
}

export default About
