// Search and social metadata for every page. Used in two places:
//   - components/SeoManager.jsx updates the <head> as visitors move between pages;
//   - scripts/prerender-seo.mjs writes a static HTML file per page at build time,
//     so search engines and link previews (WhatsApp, Facebook, X) see the right
//     title, description and image without running JavaScript.
import { schools, site } from './site.js'

const brand = site.name
const area = 'Buikwe, Uganda'

export const defaultImage = '/images/reading.jpg'

// path -> page metadata. `crumbs` are the breadcrumb trail above the page itself.
export const pages = {
  '/': {
    title: `Primary & Secondary School in ${area} | New Beginning`,
    description:
      'A Christian primary school and a day and boarding vocational secondary school in Buikwe District, Uganda. Ranked first in Buikwe for PLE. Admissions open.',
    image: '/images/reading.jpg',
    priority: '1.0',
  },
  '/about': {
    title: `About Us | ${brand}`,
    description:
      'Who we are: a primary and a vocational secondary school in Buikwe District, Uganda, built on a Christian foundation and growing together as one family.',
    image: '/images/staff-students.jpg',
    priority: '0.8',
  },
  '/about/history': {
    title: `Our History | ${brand}`,
    description:
      'How New Beginning started, from the founding of the vocational secondary school in 2025 to being ranked the top primary school in Buikwe District.',
    image: '/images/aerial-classroom-block.jpg',
    crumbs: [{ name: 'About', path: '/about' }],
    priority: '0.6',
  },
  '/about/anthem': {
    title: `School Anthem | ${brand}`,
    description: 'The school anthem of New Beginning African Children Schools in Buikwe District, Uganda.',
    image: '/images/primary-choir.jpg',
    crumbs: [{ name: 'About', path: '/about' }],
    priority: '0.4',
  },
  '/about/profile': {
    title: `School Profile | ${brand}`,
    description:
      'Key facts about our primary and secondary schools in Buikwe: classes, day and boarding, mission, vision, core values and location.',
    image: '/images/campus-buildings.jpg',
    crumbs: [{ name: 'About', path: '/about' }],
    priority: '0.6',
  },
  '/about/directors-message': {
    title: `Director’s Message | ${brand}`,
    description:
      'A welcome from Bishop Edward Ssemango, director and founder of New Beginning African Children Schools in Buikwe, Uganda.',
    image: '/images/director.jpg',
    crumbs: [{ name: 'About', path: '/about' }],
    priority: '0.5',
  },
  '/about/administration': {
    title: `Administration | ${brand}`,
    description:
      'Meet the founders and patron of New Beginning: Bishop Edward Ssemango, Pastor Eva Nabaggala Ssemango and Dr. Peter Nalos.',
    image: '/images/staff-team.jpg',
    crumbs: [{ name: 'About', path: '/about' }],
    priority: '0.5',
  },
  '/primary': {
    title: `${schools.primary.name} | Primary, Buikwe`,
    description:
      'A caring Christian primary school in Buikwe District, Uganda, from Primary One to Primary Seven. Ranked first in Buikwe for the 2025 PLE. Apply online.',
    image: '/images/primary-girl-smile.jpg',
    priority: '0.9',
  },
  '/secondary': {
    title: `${schools.secondary.name} | Buikwe`,
    description:
      'An inclusive day and boarding secondary school in Buikwe, Uganda: arts and sciences with tailoring, agriculture and ICT. See fees and apply online.',
    image: '/images/girls-computer-centre.jpg',
    priority: '0.9',
  },
  '/admissions': {
    title: `Admissions | ${brand}`,
    description:
      'Apply online to New Beginning primary or secondary school in Buikwe, Uganda. How admissions work, documents to bring and how to reach the office.',
    image: '/images/girls-group.jpg',
    priority: '0.9',
  },
  '/church': {
    title: `Church | ${brand}`,
    description: `Worship with us in Buikwe: ${site.services
      .map((service) => `${service.day} ${service.time}`)
      .join(' and ')}. The church family, prayer and friends behind New Beginning.`,
    image: '/images/students-praying.jpg',
    priority: '0.7',
  },
  '/gallery': {
    title: `Photo Gallery | ${brand}`,
    description:
      'Photos of pupils, students, worship, visitors and campus life at New Beginning primary and secondary schools in Buikwe, Uganda.',
    image: '/images/primary-boys-tree.jpg',
    priority: '0.6',
  },
  '/contact': {
    title: `Contact Us | ${brand}`,
    description: `Call ${site.phones[0].label}, email ${site.email} or visit us at ${site.location}. Map and directions to New Beginning.`,
    image: '/images/block-front.jpg',
    priority: '0.8',
  },
  '/donate': {
    title: `Donate | ${brand}`,
    description:
      'Support the pupils and students of New Beginning in Buikwe, Uganda. Help a child begin again: contact our office to give.',
    image: '/images/boarding-welcome.jpg',
    priority: '0.6',
  },
}

export const notFound = {
  title: `Page not found | ${brand}`,
  description: site.description,
  image: defaultImage,
  noindex: true,
}

export const pageFor = (path) => pages[path.replace(/\/+$/, '') || '/'] ?? notFound

const crumbName = (path, page) => (path === '/' ? 'Home' : page.title.split(' | ')[0])

// Structured data (schema.org JSON-LD). `origin` is the site's absolute address.
export function siteJsonLd(origin) {
  const org = `${origin}/#organization`
  const address = {
    '@type': 'PostalAddress',
    streetAddress: site.location,
    addressLocality: 'Buikwe',
    addressRegion: 'Buikwe District',
    addressCountry: 'UG',
  }
  const geo = { '@type': 'GeoCoordinates', latitude: site.map.lat, longitude: site.map.lng }
  const school = (key, type) => ({
    '@type': type,
    '@id': `${origin}/${key}#school`,
    name: schools[key].name,
    url: `${origin}/${key}`,
    logo: `${origin}${schools[key].logo}`,
    image: `${origin}${pages[`/${key}`].image}`,
    description: pages[`/${key}`].description,
    slogan: schools[key].motto,
    address,
    geo,
    parentOrganization: { '@id': org },
  })
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        name: brand,
        url: `${origin}/`,
        inLanguage: 'en',
        publisher: { '@id': org },
      },
      {
        '@type': 'EducationalOrganization',
        '@id': org,
        name: brand,
        url: `${origin}/`,
        logo: `${origin}${schools.secondary.logo}`,
        image: `${origin}${defaultImage}`,
        description: site.description,
        email: site.email,
        telephone: site.phones.map((phone) => phone.href.replace('tel:', '')),
        address,
        geo,
        hasMap: site.map.link,
        founder: [
          { '@type': 'Person', name: 'Bishop Edward Ssemango' },
          { '@type': 'Person', name: 'Pastor Eva Nabaggala Ssemango' },
        ],
        subOrganization: [{ '@id': `${origin}/primary#school` }, { '@id': `${origin}/secondary#school` }],
      },
      school('primary', 'ElementarySchool'),
      school('secondary', 'HighSchool'),
    ],
  }
}

export function pageJsonLd(path, origin) {
  const page = pageFor(path)
  const url = `${origin}${path === '/' ? '/' : path}`
  const trail = [{ name: 'Home', path: '/' }, ...(page.crumbs ?? []), ...(path === '/' ? [] : [{ name: crumbName(path, page), path }])]
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': path === '/about' || path.startsWith('/about/') ? 'AboutPage' : path === '/contact' ? 'ContactPage' : 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        inLanguage: 'en',
        isPartOf: { '@id': `${origin}/#website` },
        about: { '@id': `${origin}/#organization` },
        primaryImageOfPage: { '@type': 'ImageObject', url: `${origin}${page.image}` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: trail.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${origin}${item.path === '/' ? '/' : item.path}`,
        })),
      },
    ],
  }
}

// The <head> tags for one page, as plain data both the browser and the build script can apply.
export function headTags(path, origin) {
  const page = pageFor(path)
  const url = origin ? `${origin}${path === '/' ? '/' : path}` : null
  const image = origin ? `${origin}${page.image}` : page.image
  return {
    title: page.title,
    meta: [
      { name: 'description', content: page.description },
      { name: 'robots', content: page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: brand },
      { property: 'og:locale', content: 'en_UG' },
      { property: 'og:title', content: page.title },
      { property: 'og:description', content: page.description },
      { property: 'og:image', content: image },
      { property: 'og:image:alt', content: page.title },
      ...(url ? [{ property: 'og:url', content: url }] : []),
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: page.title },
      { name: 'twitter:description', content: page.description },
      { name: 'twitter:image', content: image },
    ],
    canonical: page.noindex ? null : url,
  }
}
