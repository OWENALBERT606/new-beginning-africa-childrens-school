import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import CTASection from '../components/CTASection.jsx'
import PageHero from '../components/PageHero.jsx'
import { usePageMeta } from '../components/usePageMeta.js'
import { gallery } from '../data/site.js'

function Gallery() {
  usePageMeta('Gallery', 'Photographs of pupils, students, staff and campus life at New Beginning.')
  const [active, setActive] = useState(null)

  const step = useCallback(
    (delta) => setActive((index) => (index + delta + gallery.length) % gallery.length),
    [],
  )

  useEffect(() => {
    if (active === null) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, step])

  const photo = active === null ? null : gallery[active]

  return (
    <>
      <PageHero eyebrow="Gallery" title="Life at New Beginning" text="A look at our learners, our teachers and our campus." />

      <section className="section">
        <div className="container gallery">
          {gallery.map((item, index) => (
            <button className="gallery__item" type="button" key={item.src} onClick={() => setActive(index)}>
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery__caption">
                <small>{item.school}</small>
                {item.caption}
              </span>
            </button>
          ))}
        </div>
      </section>

      {photo && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={photo.caption} onClick={() => setActive(null)}>
          <button className="lightbox__btn lightbox__btn--close" type="button" aria-label="Close" autoFocus>
            <X size={24} aria-hidden="true" />
          </button>
          <button
            className="lightbox__btn lightbox__btn--prev"
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation()
              step(-1)
            }}
          >
            <ChevronLeft size={28} aria-hidden="true" />
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={photo.src} alt={photo.alt} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
          <button
            className="lightbox__btn lightbox__btn--next"
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation()
              step(1)
            }}
          >
            <ChevronRight size={28} aria-hidden="true" />
          </button>
        </div>
      )}

      <CTASection />
    </>
  )
}

export default Gallery
