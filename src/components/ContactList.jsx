import { Mail, MapPin, Phone } from 'lucide-react'
import { site } from '../data/site.js'

function ContactList() {
  return (
    <ul className="contact-list">
      <li>
        <span className="contact-list__icon">
          <Phone size={20} aria-hidden="true" />
        </span>
        <div>
          <strong>Call the office</strong>
          {site.phones.map((phone) => (
            <a key={phone.href} href={phone.href}>
              {phone.label}
            </a>
          ))}
        </div>
      </li>
      <li>
        <span className="contact-list__icon">
          <Mail size={20} aria-hidden="true" />
        </span>
        <div>
          <strong>Email us</strong>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </li>
      <li>
        <span className="contact-list__icon">
          <MapPin size={20} aria-hidden="true" />
        </span>
        <div>
          <strong>Find us</strong>
          <span>{site.location}</span>
          <span>{site.address}</span>
        </div>
      </li>
    </ul>
  )
}

export default ContactList
