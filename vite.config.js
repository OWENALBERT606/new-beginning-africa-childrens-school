import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env }
  const vercel = env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : ''
  // The site's public address, used for canonical links and structured data
  // (same rule as scripts/prerender-seo.mjs). Empty means "use the current address".
  const siteUrl = (env.VITE_SITE_URL || env.SITE_URL || vercel).trim().replace(/\/+$/, '')

  return {
    plugins: [react()],
    define: { __SITE_URL__: JSON.stringify(siteUrl) },
  }
})
