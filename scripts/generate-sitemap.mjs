// Regenerates public/sitemap.xml from the route table in App.jsx.
//
// The official domain is not published yet: set VITE_SITE_URL (or SITE_URL)
// before building. Without it the sitemap is skipped rather than published with
// an unverified domain.
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outFile = resolve(__dirname, '../public/sitemap.xml')

const SITE_URL = (process.env.VITE_SITE_URL || process.env.SITE_URL || '').trim().replace(/\/+$/, '')
const today = new Date().toISOString().slice(0, 10)

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.8' },
  { path: '/about/history', priority: '0.6' },
  { path: '/about/anthem', priority: '0.5' },
  { path: '/about/profile', priority: '0.6' },
  { path: '/about/directors-message', priority: '0.5' },
  { path: '/about/principals-message', priority: '0.5' },
  { path: '/about/administration', priority: '0.6' },
  { path: '/primary', priority: '0.9' },
  { path: '/secondary', priority: '0.9' },
  { path: '/admissions', priority: '0.9' },
  { path: '/church', priority: '0.6' },
  { path: '/gallery', priority: '0.6' },
  { path: '/contact', priority: '0.8' },
  { path: '/donate', priority: '0.6' },
]

if (!SITE_URL) {
  console.warn('sitemap.xml: VITE_SITE_URL is not set — sitemap not generated. Set it in .env before building.')
  process.exit(0)
}

const urls = routes
  .map(
    ({ path, priority }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(outFile, xml)
console.log(`sitemap.xml generated with ${routes.length} URLs`)
