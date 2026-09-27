import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function GoogleMapsSEOPage({ onContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Google Maps SEO &amp; Local Search Ranking | Phtnex</title>
        <meta
          name="description"
          content="Rank higher on Google Maps and drive local customer calls. Google Map Pack optimization, review automation, and local SEO for growing businesses."
        />
        <link rel="canonical" href="https://www.phtnex.com/google-maps-seo" />
      </Helmet>

      {/* Sticky Top Header */}
      <header className="border-b border-border bg-surface/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300 group"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </Link>
            <Link to="/" className="font-display text-xl font-semibold text-ink tracking-tight hover:opacity-70 transition-opacity duration-300">
              Pht<span className="text-gold">nex</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-ink py-20 lg:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-5 z-0"
          style={{
            backgroundImage: 'linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container-main relative z-10">
          <div className="max-w-3xl">
            <span className="section-label text-gold block mb-4">Core Service · Local Search Visibility</span>
            <h1 className="font-display text-4xl lg:text-6xl font-medium text-surface leading-tight mb-6">
              Google Maps SEO &amp; Local Map Pack Optimization
            </h1>
            <p className="text-lg text-surface/70 leading-relaxed mb-8">
              When customers need travel agencies, consultants, or local services, they search on Google and pick from the top 3 Google Maps listings. We optimize your Google Business Profile, structure your local keywords, and automate glowing 5-star review collection to put your business at the top.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button onClick={onContact} className="btn-primary text-xs uppercase tracking-widest px-8 py-4">
                Boost Your Google Maps Ranking →
              </button>
              <Link to="/website-design" className="text-sm text-surface/80 hover:text-gold transition-colors font-medium">
                Explore Website Design →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="section-py bg-surface">
        <div className="container-main max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8 text-ink-muted leading-relaxed text-base">
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Why Google Maps Ranking Drives Highest Intent Leads
                </h2>
                <p>
                  Local search traffic is the highest-converting traffic on the internet. Prospective clients searching "travel agency near me" or "best tax consultant in [city]" are ready to hire immediately. Over 70% of those search clicks go directly to the top 3 listings in the Google Map Pack.
                </p>
                <p className="mt-4">
                  If your Google Business Profile is incomplete, unoptimized, or lacks recent 5-star reviews, you are handing warm client leads directly to your local competitors every single day.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Our Complete Google Maps SEO Strategy
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Google Business Profile Optimization:</strong> Full category selection, service area setup, geo-targeted keyword descriptions, and verified business citations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>5-Star Review Automation:</strong> Automated review request workflows so past satisfied clients easily leave 5-star Google reviews.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Local Citation &amp; NAP Consistency:</strong> Aligning Name, Address, and Phone numbers across directories to signal trust to Google's ranking algorithm.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Website-to-Map Pack Interlinking:</strong> Embedding schema structured data and geo-optimized landing copy on your site to reinforce local authority.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Who Needs Google Maps SEO?
                </h2>
                <p>
                  Google Maps SEO is essential for any business operating locally or serving clients within defined geographic regions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">Travel Agencies &amp; Tour Specialists</h3>
                    <p className="text-xs text-ink-muted">Capture local walk-ins and phone calls from travelers seeking visa assistance or holiday packages.</p>
                  </div>
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">Consulting &amp; Professional Firms</h3>
                    <p className="text-xs text-ink-muted">Stand out as the top-rated local expert for legal, financial, or business consultations.</p>
                  </div>
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">Local Trade &amp; Service Companies</h3>
                    <p className="text-xs text-ink-muted">Dominate emergency searches when clients need immediate on-site assistance.</p>
                  </div>
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">Clinics, Studios &amp; Academies</h3>
                    <p className="text-xs text-ink-muted">Drive appointment bookings and student enquiries directly from nearby searches.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Package Card */}
            <div className="space-y-6">
              <div className="bg-ink text-surface p-8 border border-ink sticky top-28">
                <span className="section-label text-gold block mb-2">Complete Launch Pack</span>
                <h3 className="font-display text-3xl font-medium text-surface mb-2">$270</h3>
                <p className="text-xs text-surface/60 border-b border-surface/15 pb-4 mb-6">
                  Includes full website + Google Maps SEO + Review setup
                </p>
                <ul className="space-y-3 text-xs text-surface/80 mb-8">
                  <li>• Everything in Website Setup</li>
                  <li>• Google Business Profile optimization</li>
                  <li>• Automated review request workflow</li>
                  <li>• Google Map Pack SEO setup</li>
                  <li>• 1st month social content included</li>
                </ul>
                <button onClick={onContact} className="w-full btn-primary py-3.5 text-xs uppercase tracking-widest">
                  Get Complete 7-Day Pack →
                </button>
              </div>
            </div>
          </div>

          {/* Internal Navigation Links */}
          <div className="border-t border-border pt-12 mt-12">
            <h3 className="font-display text-xl font-medium text-ink mb-6">Explore Other Digital Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/website-design" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">← Previous Service</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">High-Converting Website Design</h4>
                <p className="text-xs text-ink-muted mt-2">Custom 5-page fast loading websites built for phone-call conversion.</p>
              </Link>
              <Link to="/social-media-management" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">Next Service →</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">Social Media Management &amp; Branding</h4>
                <p className="text-xs text-ink-muted mt-2">Establish authority with commercial partners and keep profiles active monthly.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
