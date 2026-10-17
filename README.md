# New Beginning Schools website

One website for two schools on one campus:

- **New Beginning African Children's School** — primary (`/primary`)
- **New Beginning Vocational Secondary School** — secondary (`/secondary`)

Built with React, React Router and Vite.

## Run it

```bash
npm install
npm run dev      # local development
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Where to edit things

| What | Where |
| --- | --- |
| Phone numbers, email, address | `src/data/site.js` → `site` |
| Text for each school (intro, subjects, highlights) | `src/data/site.js` → `schools` |
| Gallery photos and captions | `src/data/site.js` → `gallery` |
| Menu links | `src/data/site.js` → `navigation` |
| Colours and fonts | top of `src/index.css` |
| Photos and logos | `public/images/` |

To add a gallery photo, drop the file in `public/images/` and add an entry to `gallery` in `src/data/site.js`.

## Pages

`/` home · `/about` (+ history, anthem, profile, directors-message, administration) · `/primary` · `/secondary` · `/admissions` · `/church` · `/gallery` · `/contact` · `/donate`

## Enquiry form

The site has no server. The enquiry form opens the visitor's email app with the message
addressed to the school email in `src/data/site.js`.

## Search engines (SEO)

Every page's title, description, social preview image and breadcrumb live in `src/data/seo.js`.

- `npm run build` writes a separate HTML file for each page (`dist/church.html`, `dist/about/history.html` …)
  with that page's tags already in place, so Google and WhatsApp/Facebook link previews see them.
- It also writes `sitemap.xml`, `robots.txt` and a `404.html`, and adds schema.org structured data
  (the organisation, both schools, address, map location, breadcrumbs).
- **Set the site's address** with `VITE_SITE_URL` (see `.env.example`) so links are absolute and the sitemap
  is generated. On Vercel this happens automatically from the project's production domain.

After going live, add the site to [Google Search Console](https://search.google.com/search-console),
submit `/sitemap.xml`, and create a [Google Business Profile](https://business.google.com) for the school.

## Deploying

`vercel.json` (Vercel) and `public/_redirects` (Netlify) serve each page's HTML file at its clean address and
return a real 404 for unknown addresses.
