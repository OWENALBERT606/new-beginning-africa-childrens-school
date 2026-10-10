import CTASection from '../components/CTASection.jsx'
import PageHero from '../components/PageHero.jsx'
import PhotoGallery from '../components/PhotoGallery.jsx'
import { usePageMeta } from '../components/usePageMeta.js'
import { gallery } from '../data/site.js'

function Gallery() {
  usePageMeta('Gallery', 'Photographs of pupils, students, staff and campus life at New Beginning.')

  return (
    <>
      <PageHero eyebrow="Gallery" title="Life at New Beginning" text="A look at our learners, our teachers and our campus." />

      <section className="section">
        <div className="container">
          <PhotoGallery photos={gallery} />
        </div>
      </section>

      <CTASection />
    </>
  )
}

export default Gallery
