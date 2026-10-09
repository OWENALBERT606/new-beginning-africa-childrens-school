import { useEffect } from 'react'
import { site } from '../data/site.js'

// Sets the tab title and meta description for the current page.
export function usePageMeta(title, description = site.description) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} | ${site.strapline}`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
