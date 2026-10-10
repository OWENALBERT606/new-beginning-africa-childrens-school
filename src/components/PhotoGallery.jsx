import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

// A grid of photos that open in a full-screen viewer (arrow keys and Esc work).
function PhotoGallery({ photos, className = '' }) {
  const [active, setActive] = useState(null)

  const step = useCallback(
    (delta) => setActive((index) => (index + delta + photos.length) % photos.length),
    [photos.length],
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

  const photo = active === null ? null : photos[active]

  return (
    <>
      <div className={`gallery ${className}`}>
        {photos.map((item, index) => (
          <button className="gallery__item" type="button" key={item.src} onClick={() => setActive(index)}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span className="gallery__caption">
              <small>{item.school}</small>
              {item.caption}
            </span>
          </button>
        ))}
      </div>

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
    </>
  )
}

export default PhotoGallery
