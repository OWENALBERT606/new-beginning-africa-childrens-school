import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import { useScrollReveal } from './components/useScrollReveal.js'
import Home from './pages/Home.jsx'

// Home ships in the main bundle; every other route is split so the first load
// only pays for what the visitor actually opens.
const About = lazy(() => import('./pages/About.jsx'))
const Primary = lazy(() => import('./pages/Primary.jsx'))
const School = lazy(() => import('./pages/School.jsx'))
const Admissions = lazy(() => import('./pages/Admissions.jsx'))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function RouteFallback() {
  return (
    <div className="route-loader" role="status" aria-live="polite">
      <span className="route-loader__spinner" aria-hidden="true" />
      <span>Loading…</span>
    </div>
  )
}

function App() {
  const { pathname } = useLocation()
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <ScrollManager />
      <Header />

      <main id="main">
        <Suspense fallback={<RouteFallback />}>
          {/* Keyed by path so each page plays its entrance animation on navigation. */}
          <div className="page" key={pathname}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/primary" element={<Primary />} />
              <Route path="/secondary" element={<School school="secondary" />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Suspense>
      </main>

      <Footer />
    </>
  )
}

export default App
