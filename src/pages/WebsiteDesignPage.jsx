import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function WebsiteDesignPage({ onContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Website Design for Small Business | Phtnex</title>
        <meta
          name="description"
          content="Custom 5-page high-converting website design for travel agencies, consultants, and small businesses worldwide. 7-day launch & mobile optimized."
        />
        <link rel="canonical" href="https://www.phtnex.com/website-design" />
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
            <span className="section-label text-gold block mb-4">Core Service · High-Converting Web Design</span>
            <h1 className="font-display text-4xl lg:text-6xl font-medium text-surface leading-tight mb-6">
              Website Design for Growing Small Businesses &amp; Consultants
            </h1>
            <p className="text-lg text-surface/70 leading-relaxed mb-8">
              A local business website shouldn't just be an online business card. It should be an automated 24/7 engine that turns search visitors into booked calls and direct client enquiries. We deliver custom, mobile-optimised 5-page websites in guaranteed 7-day turnarounds.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button onClick={onContact} className="btn-primary text-xs uppercase tracking-widest px-8 py-4">
                Get Your 7-Day Website ($140) →
              </button>
              <Link to="/google-maps-seo" className="text-sm text-surface/80 hover:text-gold transition-colors font-medium">
                Explore Google Maps SEO →
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
                  Why High-Converting Website Design Matters
                </h2>
                <p>
                  Over 85% of potential clients search online before booking a travel package, consulting call, or local service. When potential clients find a slow, outdated site—or worse, no website at all—they immediately click back and move to a competitor.
                </p>
                <p className="mt-4">
                  At Phtnex, we design modern, lightning-fast 5-page websites built specifically for conversion. Every page is crafted with strategic copy, clear click-to-call buttons, seamless WhatsApp integration, and phone-call optimization so prospective clients reach you effortlessly.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  What's Included in the $140 Website Setup Package
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>5 Custom Page Layouts:</strong> Homepage, About Us, Services Showcase, Portfolio/Case Studies, and Contact Page.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Mobile-First Responsiveness:</strong> Flawless rendering on iPhones, Android devices, tablets, and desktop browsers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Lead Capture Integration:</strong> Click-to-call buttons, custom lead enquiry forms, and instant WhatsApp chat buttons.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>On-Page Technical SEO:</strong> Fast page load speeds, clean HTML semantics, metadata setup, and index readiness.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>2 Revision Rounds &amp; Hosting Setup:</strong> Full assistance linking your custom domain and launching on secure hosting.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Who This Service Is Built For
                </h2>
                <p>
                  Our website design package is ideal for businesses that require high trust and immediate customer contact:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">Travel Agencies &amp; Tour Operators</h3>
                    <p className="text-xs text-ink-muted">Showcase tour packages, visa assistance details, and fast booking enquiry triggers.</p>
                  </div>
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">Consultants &amp; Advisory Firms</h3>
                    <p className="text-xs text-ink-muted">Establish professional credibility, highlight past client wins, and let clients schedule strategy calls.</p>
                  </div>
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">Trade &amp; Local Services</h3>
                    <p className="text-xs text-ink-muted">Provide quick quote request options and build emergency contact access for local clients.</p>
                  </div>
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">B2B Service Providers</h3>
                    <p className="text-xs text-ink-muted">Present clear service breakdowns and project portfolios to commercial partners.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Package Card */}
            <div className="space-y-6">
              <div className="bg-ink text-surface p-8 border border-ink sticky top-28">
                <span className="section-label text-gold block mb-2">Package Details</span>
                <h3 className="font-display text-3xl font-medium text-surface mb-2">$140</h3>
                <p className="text-xs text-surface/60 border-b border-surface/15 pb-4 mb-6">
                  Single flat fee · 7-day guaranteed delivery
                </p>
                <ul className="space-y-3 text-xs text-surface/80 mb-8">
                  <li>• Custom 5-page design</li>
                  <li>• Mobile &amp; speed optimized</li>
                  <li>• WhatsApp &amp; lead form integration</li>
                  <li>• 2 revision rounds</li>
                  <li>• Hosting &amp; domain launch assistance</li>
                </ul>
                <button onClick={onContact} className="w-full btn-primary py-3.5 text-xs uppercase tracking-widest">
                  Start Website Project →
                </button>
              </div>
            </div>
          </div>

          {/* Internal Navigation Links */}
          <div className="border-t border-border pt-12 mt-12">
            <h3 className="font-display text-xl font-medium text-ink mb-6">Explore Other Digital Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/google-maps-seo" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">Next Service →</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">Google Maps SEO &amp; Local Pack Ranking</h4>
                <p className="text-xs text-ink-muted mt-2">Rank higher in local Google search results and automate client review campaigns.</p>
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
