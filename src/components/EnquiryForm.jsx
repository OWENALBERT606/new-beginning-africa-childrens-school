import { useState } from 'react'
import { Send } from 'lucide-react'
import { site } from '../data/site.js'

const initial = { name: '', phone: '', school: 'Primary School', level: '', message: '' }

// There is no server behind this site, so the form hands the enquiry to the
// visitor's own email app, addressed to the school office.
function EnquiryForm({ subject = 'School enquiry' }) {
  const [values, setValues] = useState(initial)

  const update = (event) => setValues((current) => ({ ...current, [event.target.name]: event.target.value }))

  const submit = (event) => {
    event.preventDefault()
    const body = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Interested in: ${values.school}`,
      values.level && `Class: ${values.level}`,
      '',
      values.message,
    ]
      .filter((line) => line !== false && line !== undefined)
      .join('\n')

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${subject} — ${values.name}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="form" onSubmit={submit}>
      <div className="form__row">
        <label className="field">
          <span>Your name</span>
          <input name="name" value={values.name} onChange={update} autoComplete="name" required />
        </label>
        <label className="field">
          <span>Phone number</span>
          <input name="phone" type="tel" value={values.phone} onChange={update} autoComplete="tel" required />
        </label>
      </div>

      <div className="form__row">
        <label className="field">
          <span>Which school?</span>
          <select name="school" value={values.school} onChange={update}>
            <option>Primary School</option>
            <option>Secondary School</option>
            <option>Both schools</option>
          </select>
        </label>
        <label className="field">
          <span>
            Class your child is joining <em>(optional)</em>
          </span>
          <input name="level" value={values.level} onChange={update} placeholder="e.g. Primary Four or Senior One" />
        </label>
      </div>

      <label className="field">
        <span>Your message</span>
        <textarea name="message" rows="5" value={values.message} onChange={update} required />
      </label>

      <button className="btn btn--primary" type="submit">
        <Send size={18} aria-hidden="true" /> Send enquiry
      </button>
      <p className="form__note">
        This opens your email app with the message ready to send to {site.email}. Prefer to talk? Call{' '}
        <a href={site.phones[0].href}>{site.phones[0].label}</a>.
      </p>
    </form>
  )
}

export default EnquiryForm
