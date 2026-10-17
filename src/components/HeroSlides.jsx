import { useEffect, useState } from 'react'

// Cross-fading photo carousel used behind / beside hero copy. It advances on
// its own, restarts its timer when a dot is clicked, and stays on the first
// photo for visitors who prefer reduced motion.
function HeroSlides({ slides, interval = 5000, className = '' }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (slides.length < 2) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const timer = setTimeout(() => setActive((index) => (index + 1) % slides.length), interval)
    return () => clearTimeout(timer)
  }, [active, interval, slides.length])

  return (
    <div className={`slides ${className}`}>
      {slides.map((slide, index) => (
        <img
          key={slide.src}
          className={`slides__img${index === active ? ' is-active' : ''}`}
          src={slide.src}
          alt={index === active ? slide.alt : ''}
          aria-hidden={index !== active}
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'low'}
          decoding="async"
          style={slide.position ? { objectPosition: slide.position } : undefined}
        />
      ))}
      <div className="slides__dots">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={index === active ? 'is-active' : ''}
            aria-label={`Show photo ${index + 1} of ${slides.length}`}
            aria-current={index === active}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlides
