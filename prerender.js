import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { blogPosts } from './src/data/blogPosts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseRoutes = [
  { url: '/', priority: '1.0', changefreq: 'weekly' },
  { url: '/website-design', priority: '0.9', changefreq: 'weekly' },
  { url: '/google-maps-seo', priority: '0.9', changefreq: 'weekly' },
  { url: '/social-media-management', priority: '0.9', changefreq: 'weekly' },
  { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { url: '/blog', priority: '0.8', changefreq: 'daily' },
  { url: '/faqs', priority: '0.8', changefreq: 'monthly' },
  { url: '/privacy', priority: '0.5', changefreq: 'monthly' },
  { url: '/terms', priority: '0.5', changefreq: 'monthly' },
]

const postRoutes = blogPosts.map((post) => ({
  url: `/blog/${post.slug}`,
  priority: '0.8',
  changefreq: 'weekly',
}))

const allRoutes = [...baseRoutes, ...postRoutes]
const routesToPrerender = allRoutes.map((r) => r.url)

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0]
  const xmlEntries = allRoutes.map(
    (r) => `  <url>
    <loc>https://www.phtnex.com${r.url === '/' ? '/' : r.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries.join('\n')}
</urlset>
`

  // Write to public/ and dist/
  const publicDir = path.resolve(__dirname, 'public')
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true })
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8')

  const distDir = path.resolve(__dirname, 'dist')
  if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true })
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8')

  console.log(`[sitemap] Dynamically generated sitemap.xml with ${allRoutes.length} URLs.`)
}

async function prerender() {
  // Generate sitemap first
  generateSitemap()

  const templatePath = path.resolve(__dirname, 'dist/index.html')
  const template = fs.readFileSync(templatePath, 'utf-8')

  // Import built SSR entry
  const ssrModulePath = path.resolve(__dirname, 'dist/server/entry-server.js')
  const { render } = await import(ssrModulePath)

  for (const url of routesToPrerender) {
    const helmetContext = {}
    const { html } = render(url, helmetContext)
    const { helmet } = helmetContext

    let routeHtml = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`)

    if (helmet) {
      const titleStr = helmet.title ? helmet.title.toString() : ''
      const metaStr = helmet.meta ? helmet.meta.toString() : ''
      const linkStr = helmet.link ? helmet.link.toString() : ''

      if (titleStr) {
        routeHtml = routeHtml.replace(/<title>.*?<\/title>/s, titleStr)
      }

      if (linkStr) {
        // Remove default index.html canonical link if helmet provides one
        routeHtml = routeHtml.replace(/<link rel="canonical"[^>]*\/?>/gi, '')
        routeHtml = routeHtml.replace('</head>', `  ${linkStr}\n</head>`)
      }

      if (metaStr) {
        // If meta contains description, replace standard description tag
        if (metaStr.includes('name="description"')) {
          routeHtml = routeHtml.replace(/<meta name="description"[^>]*\/?>/gi, '')
        }
        routeHtml = routeHtml.replace('</head>', `  ${metaStr}\n</head>`)
      }
    }

    const targetDir =
      url === '/' ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, `dist${url}`)

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true })
    }

    const filePath = path.join(targetDir, 'index.html')
    fs.writeFileSync(filePath, routeHtml, 'utf-8')
    console.log(`[prerender] Pre-rendered: ${url} -> ${filePath}`)
  }

  // Remove temporary SSR directory
  fs.rmSync(path.resolve(__dirname, 'dist/server'), { recursive: true, force: true })
  console.log('[prerender] Static prerendering complete!')
}

prerender().catch((err) => {
  console.error('[prerender] Error during prerendering:', err)
  process.exit(1)
})
