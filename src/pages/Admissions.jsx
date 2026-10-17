import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import ContactList from '../components/ContactList.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import PageHero from '../components/PageHero.jsx'
import { schools } from '../data/site.js'

const steps = [
  { title: 'Apply online', text: 'Choose the primary or the secondary school above and fill in its online application form.' },
  { title: 'Visit the school', text: 'Come and see the campus, meet the teachers and ask every question you have.' },
  { title: 'Bring your documents', text: 'Our office will tell you which documents to bring and confirm the fees for your child’s class.' },
  { title: 'Join the family', text: 'Once a place is confirmed, we will guide you through uniform, requirements and the first day.' },
]

const documents = [
  "A copy of the child's birth certificate",
  'The most recent school report',
  'Recent passport-size photographs',
]

function Admissions() {
  return (
    <>
      <PageHero
        eyebrow="Admissions"
        title="Joining New Beginning"
        text="We welcome new learners into both the primary and the secondary school. Apply online in a few minutes."
      />

      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">Apply online</p>
            <h2>Choose your school to start</h2>
            <p>Each school has its own application form. It opens in a new tab.</p>
          </header>
          <div className="motto-grid">
            {[schools.primary, schools.secondary].map((school) => (
              <article className={`motto ${school.theme}`} key={school.slug}>
                <img src={school.logo} alt={`${school.name} logo`} width="120" height="120" />
                <div>
                  <p className="school-card__label">{school.label}</p>
                  <h3>{school.name}</h3>
                  <p>{school.levels}</p>
                  <a className="btn btn--primary" href={school.applyUrl} target="_blank" rel="noopener noreferrer">
                    Apply online <ArrowRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <header className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>Four simple steps</h2>
          </header>
          <ol className="steps">
            {steps.map((step, index) => (
              <li className="step" key={step.title}>
                <span className="step__num">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container split split--top">
          <div>
            <p className="eyebrow">Before you apply</p>
            <h2>What you will usually need</h2>
            <ul className="checklist">
              {documents.map((item) => (
                <li key={item}>
                  <Check size={18} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="note">
              Requirements, school fees and term dates differ between the primary and the secondary school. Please
              contact the office for the current details for your child’s class. Secondary school fees are listed
              on the <Link to="/secondary">secondary school page</Link>.
            </p>
            <ContactList />
          </div>

          <div className="card">
            <h2 className="card__title">Have a question first?</h2>
            <EnquiryForm subject="Admissions enquiry" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Admissions
