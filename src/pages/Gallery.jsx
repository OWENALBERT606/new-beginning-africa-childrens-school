import { useState } from 'react'
import CTASection from '../components/CTASection.jsx'
import PageHero from '../components/PageHero.jsx'
import PhotoGallery from '../components/PhotoGallery.jsx'
import { usePageMeta } from '../components/usePageMeta.js'
import { gallery } from '../data/site.js'

// Each tab lists the gallery tags it shows; campus photos appear under "All".
const tabs = [
  { id: 'all', label: 'All', tags: null },
  { id: 'primary', label: 'Primary', tags: ['Primary'] },
  { id: 'secondary', label: 'Secondary', tags: ['Secondary'] },
  { id: 'church', label: 'Church', tags: ['Church', 'Community'] },
]

const photosFor = (tab) => (tab.tags ? gallery.filter((photo) => tab.tags.includes(photo.school)) : gallery)

function Gallery() {
  usePageMeta('Gallery', 'Photographs of pupils, students, staff and campus life at New Beginning.')
  const [active, setActive] = useState('all')
  const tab = tabs.find((item) => item.id === active)
  const photos = photosFor(tab)

  return (
    <>
      <PageHero eyebrow="Gallery" title="Life at New Beginning" text="A look at our learners, our teachers and our campus." />

      <section className="section">
        <div className="container">
          <div className="tabs" role="tablist" aria-label="Filter photos">
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={item.id === active}
                className={`tabs__btn${item.id === active ? ' is-active' : ''}`}
                onClick={() => setActive(item.id)}
              >
                {item.label}
                <span className="tabs__count">{photosFor(item).length}</span>
              </button>
            ))}
          </div>
          {/* Keyed by tab so the photos fade in again when the filter changes. */}
          <div className="tabs__panel" key={active} role="tabpanel">
            <PhotoGallery photos={photos} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default Gallery
