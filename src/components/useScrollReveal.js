import { useEffect } from 'react'

// Blocks that fade up as they scroll into view. Listed here rather than marked
// up page by page, so new sections animate without any extra work.
const SELECTOR = [
  '.section-head',
  '.school-card',
  '.split > *',
  '.feature',
  '.step',
  '.chips li',
  '.photo-row img',
  '.next-step',
  '.motto',
  '.gallery__item',
  '.cta__inner > *',
  '.footer__grid > *',
  '.hero-card',
  '.counter',
  '.programme',
  '.campus > *',
  '.why__item',
  '.masonry a',
  '.offer__box',
  '.stand li',
  '.quote-card',
  '.partner',
].join(',')

const STAGGER_MS = 90
const MAX_STAGGER_STEPS = 5
// An element reveals once its top edge is this far up the viewport.
const TRIGGER_LINE = 0.92

// Elements are only hidden once this hook has measured them and found them
// below the fold, so anything it has not reached (no JavaScript, reduced
// motion, content still suspended) simply stays visible.
export function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const check = () => {
      // At the very bottom nothing can scroll further up, so reveal whatever is left.
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      const limit = atBottom ? Infinity : window.innerHeight * TRIGGER_LINE

      for (const el of document.querySelectorAll(SELECTOR)) {
        const state = el.dataset.reveal
        if (state === 'in') continue
        // Not laid out yet (e.g. inside a suspended route): leave it alone for now.
        if (el.getClientRects().length === 0) continue

        const inView = el.getBoundingClientRect().top < limit
        if (state === undefined) {
          const index = Array.prototype.indexOf.call(el.parentElement.children, el)
          el.style.setProperty('--reveal-delay', `${Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS}ms`)
        }
        el.dataset.reveal = inView ? 'in' : ''
      }
    }

    let frame = 0
    const schedule = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(check)
    }

    check()
    // Pages are lazy-loaded and swapped on navigation, so measure new content as it arrives.
    const mo = new MutationObserver(check)
    mo.observe(document.body, { childList: true, subtree: true })
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('load', schedule)

    return () => {
      cancelAnimationFrame(frame)
      mo.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('load', schedule)
      // Un-hide anything still waiting, so nothing is left invisible once the
      // listeners are gone (React StrictMode runs this effect twice in development).
      for (const el of document.querySelectorAll("[data-reveal='']")) {
        el.removeAttribute('data-reveal')
      }
    }
  }, [])
}
