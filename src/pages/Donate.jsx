import { BedDouble, HandHeart, Mail, Monitor, Phone } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import { usePageMeta } from '../components/usePageMeta.js'
import { site } from '../data/site.js'

const donateWhatsApp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  'Hello New Beginning, I would like to support the school. Please share how I can give.',
)}`

const impact = [
  {
    icon: BedDouble,
    title: 'A place to sleep and learn',
    text: 'Our secondary school is a sponsored school, and every boarder receives a mattress and blanket free.',
  },
  {
    icon: Monitor,
    title: 'Tools for learning',
    text: 'Friends of the school stand behind our computer centre and classroom block.',
  },
  {
    icon: HandHeart,
    title: 'Care for the community',
    text: 'Our campus has hosted a wheelchair distribution day for our neighbours.',
  },
]

function Donate() {
  usePageMeta('Donate', 'Support the pupils and students of New Beginning. Contact the school office for how to give.')

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Help a child begin again"
        text="Your gift helps us give more children a place to belong, believe and learn."
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Why give</p>
            <h2>Generosity built this school</h2>
            <p>
              New Beginning has grown through people who believe in our learners. Every gift, large or small, goes
              towards giving children a sense of belonging and a holistic education.
            </p>
            <div className="donate-actions">
              <a className="btn btn--primary" href={donateWhatsApp} target="_blank" rel="noopener noreferrer">
                <HandHeart size={18} aria-hidden="true" /> Give via WhatsApp chat
              </a>
              <a className="btn btn--outline" href={site.phones[0].href}>
                <Phone size={18} aria-hidden="true" /> {site.phones[0].label}
              </a>
            </div>
          </div>
          <div className="split__media">
            <img
              src="/images/boarding-welcome.jpg"
              alt="Students wrapped in new blankets standing beside new mattresses in front of a school building"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">What giving has done</p>
            <h2>Gifts you can see on our campus</h2>
          </header>
          <div className="feature-grid feature-grid--three">
            {impact.map((item) => (
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

      <section className="sp-cta">
        <div className="container sp-cta__inner">
          <div>
            <p className="sp-cta__kicker">How to give</p>
            <h2>Talk to our office and we will guide you</h2>
            <p>Online giving is not set up on this website yet. The school office shares giving details directly.</p>
          </div>
          <div className="sp-cta__actions">
            <a className="btn btn--primary" href={donateWhatsApp} target="_blank" rel="noopener noreferrer">
              <HandHeart size={18} aria-hidden="true" /> Message us on WhatsApp
            </a>
            <a className="btn btn--ghost-light" href={`mailto:${site.email}?subject=${encodeURIComponent('Supporting New Beginning')}`}>
              <Mail size={18} aria-hidden="true" /> {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Donate
