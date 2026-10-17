import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

function NotFound() {
  return (
    <PageHero eyebrow="404" title="We could not find that page" text="It may have moved, or the address may be mistyped.">
      <div className="hero__actions">
        <Link className="btn btn--light" to="/">
          Back to the home page
        </Link>
        <Link className="btn btn--ghost-light" to="/contact">
          Contact the office
        </Link>
      </div>
    </PageHero>
  )
}

export default NotFound
