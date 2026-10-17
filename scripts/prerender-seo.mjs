// Runs after `vite build`. For every page in src/data/seo.js it writes a copy of
// dist/index.html whose <head> already carries that page's title, description,
// canonical link, social preview tags and structured data, so crawlers and link
// previews see them without running JavaScript. It also writes sitemap.xml,
// robots.txt and a 404.html.
//
// Absolute URLs need the site's address: set VITE_SITE_URL (e.g. in .env), or
// deploy on Vercel, which provides VERCEL_PROJECT_PRODUCTION_URL automatically.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { loadEnv } from 'vite'
import { headTags, pageJsonLd, pages, siteJsonLd } from '../src/data/seo.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = resolve(root, 'dist')
const env = { ...loadEnv('production', root, ''), ...process.env }
const vercel = env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : ''
const origin = (env.VITE_SITE_URL || env.SITE_URL || vercel).trim().replace(/\/+$/, '')

const escape = (text) =>
  String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const jsonLd = (id, data) =>
  `<script id="${id}" type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

function head(path) {
  const tags = headTags(path, origin)
  const lines = [
    `<title>${escape(tags.title)}</title>`,
    ...tags.meta.map((tag) =>
      tag.name
        ? `<meta name="${tag.name}" content="${escape(tag.content)}" />`
        : `<meta property="${tag.property}" content="${escape(tag.content)}" />`,
    ),
  ]
  if (tags.canonical) lines.push(`<link rel="canonical" href="${tags.canonical}" />`)
  if (origin) lines.push(jsonLd('ld-site', siteJsonLd(origin)), jsonLd('ld-page', pageJsonLd(path, origin)))
  return lines.map((line) => `    ${line}`).join('\n')
}

const template = readFileSync(resolve(dist, 'index.html'), 'utf8')
const START = '<!-- seo:start -->'
const END = '<!-- seo:end -->'
if (!template.includes(START) || !template.includes(END)) throw new Error('index.html is missing the seo markers')
const render = (path) => {
  const [before, rest] = template.split(START)
  const after = rest.split(END)[1]
  return `${before}${START}\n${head(path)}\n    ${END}${after}`
}

// "/about/history" -> dist/about/history.html, served at /about/history by Vercel (cleanUrls) and Netlify.
for (const path of Object.keys(pages)) {
  const file = path === '/' ? resolve(dist, 'index.html') : resolve(dist, `${path.slice(1)}.html`)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, render(path))
}
writeFileSync(resolve(dist, '404.html'), render('/__not-found__'))

const robots = ['User-agent: *', 'Allow: /', '']
if (origin) {
  const today = new Date().toISOString().slice(0, 10)
  const urls = Object.entries(pages)
    .map(
      ([path, page]) =>
        `  <url>\n    <loc>${origin}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${page.priority}</priority>\n  </url>`,
    )
    .join('\n')
  writeFileSync(
    resolve(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  )
  robots.push(`Sitemap: ${origin}/sitemap.xml`, '')
}
writeFileSync(resolve(dist, 'robots.txt'), robots.join('\n'))

console.log(
  origin
    ? `SEO: ${Object.keys(pages).length} pages prerendered for ${origin}, sitemap.xml and robots.txt written.`
    : `SEO: ${Object.keys(pages).length} pages prerendered without a site address — set VITE_SITE_URL to add canonical links, structured data and sitemap.xml.`,
)
