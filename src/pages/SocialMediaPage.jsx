import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

export default function SocialMediaPage({ onContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Social Media Management for Small Business | Phtnex</title>
        <meta
          name="description"
          content="Establish trust with partners and commercial clients. Professional social media profile setup, monthly content creation, and brand management."
        />
        <link rel="canonical" href="https://www.phtnex.com/social-media-management" />
      </Helmet>

      {/* Shared Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-ink pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-5 z-0"
          style={{
            backgroundImage: 'linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container-main relative z-10">
          <div className="max-w-3xl">
            <span className="section-label text-gold block mb-4">Core Service · Brand Authority &amp; Social Presence</span>
            <h1 className="font-display text-4xl lg:text-6xl font-medium text-surface leading-tight mb-6">
              Social Media Management &amp; B2B Partner Credibility
            </h1>
            <p className="text-lg text-surface/70 leading-relaxed mb-8">
              Commercial partners, property managers, and high-ticket clients check your social media profiles before signing contracts or approving proposals. We set up, polish, and manage active professional social profiles that build trust, project scale, and convert interest into partnerships.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <button onClick={onContact} className="btn-primary text-xs uppercase tracking-widest px-8 py-4">
                Start Monthly Plan ($150/mo) →
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
                  Why Social Media Presence Matters for Business Trust
                </h2>
                <p>
                  A dead social media account with zero recent updates tells potential clients that your business might no longer be active. On the other hand, clean, well-branded social channels signal active operations, client satisfaction, and professional authority.
                </p>
                <p className="mt-4">
                  Whether you are bidding on B2B commercial contracts or securing high-value consulting clients, your social channels provide social proof that reinforces your website's value proposition.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  What's Included in Ongoing Content &amp; Social Management
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Professional Account Setup &amp; Branding:</strong> Cohesive profile graphics, optimized bios, custom banners, and contact button configuration on LinkedIn, Instagram, and Facebook.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Monthly Social Media Posts:</strong> Designed graphic assets, industry-focused copywriting, and targeted hashtags relevant to your core audience.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Google Business Profile Updates:</strong> Regular posts and photo uploads to keep your Google Maps profile fresh in Google's ranking algorithm.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Google Maps Review Management:</strong> Monitoring new client reviews and providing strategic response guidelines.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Priority Support &amp; Simple Edits:</strong> Fast turnaround on text or image updates whenever your business offers new services or packages.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Who Benefits Most from Ongoing Social Management?
                </h2>
                <p>
                  Our monthly content retainer is tailored for business owners who want a consistent, active brand without wasting hours each week making graphics:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">Travel Agencies &amp; Tour Guides</h3>
                    <p className="text-xs text-ink-muted">Keep clients excited with featured holiday destinations, tour itineraries, and seasonal promotions.</p>
                  </div>
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">Consultants &amp; Advisory Agencies</h3>
                    <p className="text-xs text-ink-muted">Publish thought leadership highlights, client testimonials, and industry insights on LinkedIn.</p>
                  </div>
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">Commercial Service Providers</h3>
                    <p className="text-xs text-ink-muted">Showcase completed commercial projects to build trust during corporate contract bidding.</p>
                  </div>
                  <div className="p-4 bg-surface-2 border border-border">
                    <h3 className="font-semibold text-ink text-sm mb-1">Growing Local Brands</h3>
                    <p className="text-xs text-ink-muted">Maintain an active digital presence without hiring full-time internal social media managers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Package Card */}
            <div className="space-y-6">
              <div className="bg-ink text-surface p-8 border border-ink sticky top-28">
                <span className="section-label text-gold block mb-2">Monthly Retainer</span>
                <h3 className="font-display text-3xl font-medium text-surface mb-2">$150/mo</h3>
                <p className="text-xs text-surface/60 border-b border-surface/15 pb-4 mb-6">
                  No long-term contracts · Cancel anytime
                </p>
                <ul className="space-y-3 text-xs text-surface/80 mb-8">
                  <li>• Monthly social media posts</li>
                  <li>• Google Maps review management</li>
                  <li>• Monthly Google Business updates</li>
                  <li>• Custom content for your business</li>
                  <li>• Priority ongoing edits &amp; support</li>
                </ul>
                <button onClick={onContact} className="w-full btn-primary py-3.5 text-xs uppercase tracking-widest">
                  Start Monthly Plan →
                </button>
              </div>
            </div>
          </div>

          {/* Internal Navigation Links */}
          <div className="border-t border-border pt-12 mt-12">
            <h3 className="font-display text-xl font-medium text-ink mb-6">Explore Other Digital Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link to="/website-design" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">← Explore Service</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">High-Converting Website Design</h4>
                <p className="text-xs text-ink-muted mt-2">Custom 5-page fast loading websites built for phone-call conversion.</p>
              </Link>
              <Link to="/google-maps-seo" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">← Explore Service</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">Google Maps SEO &amp; Local Pack Ranking</h4>
                <p className="text-xs text-ink-muted mt-2">Rank higher in local Google search results and automate client review campaigns.</p>
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
