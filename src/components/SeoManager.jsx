import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { headTags, pageJsonLd, siteJsonLd } from '../data/seo.js'

const upsert = (selector, create) => {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

const setJsonLd = (id, data) => {
  const el = upsert(`script#${id}`, () => {
    const script = document.createElement('script')
    script.id = id
    script.type = 'application/ld+json'
    return script
  })
  el.textContent = JSON.stringify(data)
}

// Keeps the title, description, canonical link, social preview tags and
// structured data in step with the current page (see data/seo.js).
function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Prefer the configured public address so every copy of the site points at the same canonical URLs.
    const origin = __SITE_URL__ || window.location.origin
    const tags = headTags(pathname, origin)
    document.title = tags.title

    for (const tag of tags.meta) {
      const [key, value] = tag.name ? ['name', tag.name] : ['property', tag.property]
      const el = upsert(`meta[${key}="${value}"]`, () => {
        const meta = document.createElement('meta')
        meta.setAttribute(key, value)
        return meta
      })
      el.setAttribute('content', tag.content)
    }

    const canonical = document.head.querySelector('link[rel="canonical"]')
    if (tags.canonical) {
      upsert('link[rel="canonical"]', () => {
        const link = document.createElement('link')
        link.rel = 'canonical'
        return link
      }).href = tags.canonical
    } else {
      canonical?.remove()
    }

    setJsonLd('ld-site', siteJsonLd(origin))
    setJsonLd('ld-page', pageJsonLd(pathname, origin))
  }, [pathname])

  return null
}

export default SeoManager
