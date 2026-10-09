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

`/` home · `/about` · `/primary` · `/secondary` · `/admissions` · `/gallery` · `/contact`

## Enquiry form

The site has no server. The enquiry form opens the visitor's email app with the message
addressed to the school email in `src/data/site.js`.

## Deploying

`vercel.json` and `public/_redirects` send every path to `index.html`, so the site works on
Vercel and Netlify as-is. Set `VITE_SITE_URL` (see `.env.example`) to generate `sitemap.xml`.
