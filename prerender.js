import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const routesToPrerender = ['/', '/privacy', '/terms', '/faqs']

async function prerender() {
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

    const targetDir = url === '/'
      ? path.resolve(__dirname, 'dist')
      : path.resolve(__dirname, `dist${url}`)

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
