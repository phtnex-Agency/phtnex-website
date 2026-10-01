import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

export default function SeoPage({ onContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>SEO Services | Phtnex</title>
        <meta
          name="description"
          content="Comprehensive technical, on-page, and content SEO services for businesses worldwide. Rank higher organically across global search results."
        />
        <link rel="canonical" href="https://www.phtnex.com/seo" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-ink pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-5 z-0"
          style={{
            backgroundImage:
              'linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container-main relative z-10 max-w-3xl">
          <span className="section-label text-gold block mb-4">Organic Growth · Organic Search Engine Optimization</span>
          <h1 className="font-display text-4xl lg:text-6xl font-medium text-surface leading-tight mb-6">
            Comprehensive Organic &amp; Technical SEO Services
          </h1>
          <p className="text-lg text-surface/70 leading-relaxed mb-8">
            Rank higher in broad search engine results, attract high-intent non-brand organic traffic, and establish long-term authority in your industry.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <button onClick={onContact} className="btn-primary text-xs uppercase tracking-widest px-8 py-4">
              Book a Strategy Call →
            </button>
            <Link to="/google-maps-seo" className="text-sm text-surface/80 hover:text-gold transition-colors font-medium">
              Looking for Local Google Maps Pack ranking? Click here →
            </Link>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="section-py bg-surface">
        <div className="container-main max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8 text-ink-muted leading-relaxed text-base">
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  How General SEO Differs From Local Google Maps SEO
                </h2>
                <p>
                  While our <Link to="/google-maps-seo" className="text-ink hover:text-gold underline underline-offset-4">Google Maps SEO service</Link> specifically targets hyper-local "near me" map pack visibility and review accumulation for local business queries, general Organic SEO focuses on broad search rankings nationwide or globally.
                </p>
                <p className="mt-4">
                  General SEO builds your site’s domain authority through comprehensive keyword architecture, technical performance audits, high-quality content strategies, structured data schema, and semantic search optimization so clients find you for high-value informational and transactional searches.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  What Our Full SEO Service Includes
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Technical SEO Audits &amp; Fixes:</strong> Resolving crawl errors, indexing issues, canonical tags, XML sitemaps, and Core Web Vitals page speed performance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Keyword Strategy &amp; Mapping:</strong> Identifying high-intent search terms tailored to your travel, consulting, or service offerings and mapping them to dedicated landing pages.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>On-Page Content Optimization:</strong> Enhancing H1–H3 header tags, semantic keyword density, meta descriptions, image alt attributes, and internal linking structures.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Structured Data &amp; Rich Snippets:</strong> Implementing JSON-LD schema (FAQPage, Article, Service, ProfessionalService) to earn visually prominent rich search results.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Why Invest in Organic Search Authority?
                </h2>
                <p>
                  Paid advertisements stop generating leads the second your budget runs out. Organic search engine optimization builds permanent digital equity. By consistently ranking at the top of search engine results pages, your business commands instant trust, attracts qualified leads 24/7, and dramatically reduces customer acquisition costs over time.
                </p>
              </div>
            </div>

            {/* Sidebar Pricing Card */}
            <div className="space-y-6">
              <div className="bg-ink text-surface p-8 border border-ink sticky top-28">
                <span className="section-label text-gold block mb-2">Service Pricing</span>
                <h3 className="font-display text-2xl font-medium text-surface mb-2">Custom Quote</h3>
                <p className="text-xs text-surface/60 border-b border-surface/15 pb-4 mb-6">
                  Tailored based on site size, technical scope &amp; competitive landscape
                </p>
                <ul className="space-y-3 text-xs text-surface/80 mb-8">
                  <li>• Technical &amp; speed audit</li>
                  <li>• Keyword architecture &amp; mapping</li>
                  <li>• On-page content &amp; meta optimization</li>
                  <li>• JSON-LD rich schema markup</li>
                  <li>• Monthly performance tracking</li>
                </ul>
                <button onClick={onContact} className="w-full btn-primary py-3.5 text-xs uppercase tracking-widest">
                  Book a Strategy Call →
                </button>
              </div>
            </div>
          </div>

          {/* Internal Navigation */}
          <div className="border-t border-border pt-12 mt-12">
            <h3 className="font-display text-xl font-medium text-ink mb-6">Explore Other Digital Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/google-maps-seo" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">Local SEO →</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">Google Maps SEO</h4>
                <p className="text-xs text-ink-muted mt-2">Rank in local Google Map Packs and automate client reviews.</p>
              </Link>
              <Link to="/website-design" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">Web Design →</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">Website Design</h4>
                <p className="text-xs text-ink-muted mt-2">Custom 5-page fast loading websites built for phone-call conversion.</p>
              </Link>
              <Link to="/services" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">All Offerings →</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">All Services Overview</h4>
                <p className="text-xs text-ink-muted mt-2">View our complete suite of digital, automation, and AI services.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface-2 py-8">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">© 2026 Phtnex. All rights reserved.</p>
          <Link to="/" className="text-xs text-ink-muted hover:text-ink transition-colors underline underline-offset-4">
            ← Return to phtnex.com
          </Link>
        </div>
      </footer>
    </div>
  )
}
