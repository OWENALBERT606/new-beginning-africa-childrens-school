import { Link } from 'react-router-dom'
import { ArrowRight, FileClock } from 'lucide-react'

// Shown where the school has not yet supplied the words for a page or section.
function Pending({ title = 'This page is being prepared', what }) {
  return (
    <div className="pending">
      <span className="pending__icon">
        <FileClock size={28} aria-hidden="true" />
      </span>
      <h2>{title}</h2>
      <p>{what} will be published here soon. In the meantime, our office will gladly answer any question.</p>
      <Link className="btn btn--primary" to="/contact">
        Contact the office <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </div>
  )
}

export default Pending
