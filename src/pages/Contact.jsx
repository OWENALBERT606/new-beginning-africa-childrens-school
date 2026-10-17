import { MapPin } from 'lucide-react'
import ContactList from '../components/ContactList.jsx'
import EnquiryForm from '../components/EnquiryForm.jsx'
import PageHero from '../components/PageHero.jsx'
import { site } from '../data/site.js'

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would love to hear from you"
        text="Questions about either school, admissions, or arranging a visit — our office is glad to help."
      />

      <section className="section">
        <div className="container split split--top">
          <div>
            <p className="eyebrow">Reach the office</p>
            <h2>Talk to us</h2>
            <p>One office serves both the primary and the secondary school.</p>
            <ContactList />
          </div>

          <div className="card">
            <h2 className="card__title">Send a message</h2>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Find us</p>
            <h2>Visit our campus</h2>
            <p>{site.location}</p>
          </header>
          <div className="map">
            <iframe
              title="Map showing the location of New Beginning schools"
              src={site.map.embed}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="home-links">
            <a className="btn btn--primary" href={site.map.link} target="_blank" rel="noopener noreferrer">
              <MapPin size={18} aria-hidden="true" /> Get directions
            </a>
          </p>
        </div>
      </section>
    </>
  )
}

export default Contact
