import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

const packages = [
  {
    name: 'Website Setup',
    price: '$140',
    billing: 'Single Flat Fee · 7-Day Launch',
    popular: false,
    description: 'Ideal for new or growing small businesses that need a clean, professional, high-converting web presence delivered fast.',
    features: [
      'Custom 5-page responsive design (Home, About, Services, Work, Contact)',
      'Mobile-first layout optimized for iPhones, Android & tablets',
      'Instant WhatsApp chat integration & custom lead capture forms',
      'On-page technical SEO & speed optimization',
      'Google Maps embedded location & direct click-to-call triggers',
      '2 full rounds of design revisions included',
      '1 year hosting setup & custom domain launch assistance',
    ],
    cta: 'Get Started ($140)',
    serviceLink: '/website-design',
  },
  {
    name: 'The 7-Day Complete Launch',
    price: '$270',
    billing: 'Single Flat Fee · Full Digital Footprint',
    popular: true,
    description: 'Our most comprehensive solution. Combines a 5-page custom site with complete Google Maps Pack optimization & review automation.',
    features: [
      'Everything included in the 5-Page Website Setup',
      'Google Business Profile setup, category optimization & claim verification',
      'Automated review request system setup for WhatsApp & email',
      'Google Maps Local Map Pack SEO setup & geo-tagging',
      'Social media profile creation & professional branding (FB & Instagram)',
      'First month of brand graphics & post content included',
      'Priority 7-day fast-track delivery window',
    ],
    cta: 'Get Found Everywhere ($270)',
    serviceLink: '/google-maps-seo',
  },
  {
    name: 'Ongoing Content & Social',
    price: '$150/mo',
    billing: 'Cancel Anytime · Zero Lock-In Contracts',
    popular: false,
    description: 'Keep your Google Maps profile and social media channels fresh, active, and consistently generating incoming customer reviews.',
    features: [
      'Monthly strategic social media posts built around your business',
      'Google Maps review campaign management & automated response templates',
      'Monthly Google Business Profile updates & photo additions',
      'Regular website content & promo updates',
      'Monthly local search performance & review report',
      'Priority support for fast website edits & changes',
    ],
    cta: 'Start Monthly Retainer ($150/mo)',
    serviceLink: '/social-media-management',
  },
]

const faqs = [
  {
    q: "What's included in the payment?",
    a: "Everything explicitly listed in your selected package description is covered with zero surprise fees. You get full end-to-end service including custom design, mobile responsiveness, lead form and WhatsApp integration, technical SEO setup, and complete domain launch assistance.",
  },
  {
    q: 'Can I upgrade later?',
    a: 'Absolutely. Many clients start with the Website Setup ($140) to launch quickly and later upgrade to the Complete Launch ($270) or add Ongoing Content & Social ($150/mo) as their customer base grows.',
  },
  {
    q: 'Do you offer custom quotes for bigger projects?',
    a: 'Yes. If you require custom e-commerce functionality, advanced web applications, multi-location Google Maps SEO, or specialized integrations, we provide tailored custom proposals after a quick discovery call.',
  },
  {
    q: "What's the payment schedule?",
    a: 'To keep progress transparent and aligned, our milestone payment structure is split into 3 steps: 20% upfront to initiate work, 50% upon design & functional preview handover, and the remaining 30% upon final domain launch and asset handover.',
  },
]

export default function PricingPage({ onContact }) {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Pricing | Phtnex</title>
        <meta
          name="description"
          content="Explore Phtnex transparent, flat-rate pricing for small business website design, Google Maps SEO, and ongoing social media management. Single flat fees, zero hidden retainers."
        />
        <link rel="canonical" href="https://www.phtnex.com/pricing" />
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
        <div className="container-main relative z-10 text-center max-w-3xl mx-auto">
          <span className="section-label text-gold block mb-4">Transparent Investment</span>
          <h1 className="font-display text-4xl lg:text-6xl font-medium text-surface leading-tight mb-6">
            Flat-Rate Pricing.<br />Zero Monthly Retainer BS.
          </h1>
          <p className="text-lg text-surface/70 leading-relaxed">
            We don't lock small businesses into bloated, mandatory retainers. Get your entire digital presence built and launched in guaranteed 7 days for clear, upfront pricing.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards Grid */}
      <section className="section-py bg-surface">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative flex flex-col p-8 lg:p-10 transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-ink text-surface border-2 border-gold shadow-2xl scale-[1.02] z-10'
                    : 'bg-surface-2 text-ink border border-border hover:border-border-dark'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-block bg-gold text-ink text-[11px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6 pt-2">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${pkg.popular ? 'text-gold' : 'text-ink-muted'}`}>
                    {pkg.name}
                  </span>
                  <div className="flex items-baseline gap-2 mt-3">
                    <span className={`font-display text-4xl lg:text-5xl font-medium tracking-tight ${pkg.popular ? 'text-surface' : 'text-ink'}`}>
                      {pkg.price}
                    </span>
                  </div>
                  <p className={`text-xs mt-2 ${pkg.popular ? 'text-surface/60' : 'text-ink-muted'}`}>
                    {pkg.billing}
                  </p>
                </div>

                <p className={`text-sm mb-8 pb-6 border-b leading-relaxed ${pkg.popular ? 'text-surface/80 border-surface/15' : 'text-ink-muted border-border'}`}>
                  {pkg.description}
                </p>

                <div className="mb-8 flex-1">
                  <h4 className={`text-xs font-semibold uppercase tracking-wider mb-4 ${pkg.popular ? 'text-gold' : 'text-ink'}`}>
                    What's Included:
                  </h4>
                  <ul className="space-y-3.5">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <span className="text-gold font-bold text-sm leading-none mt-0.5">✓</span>
                        <span className={`text-xs leading-relaxed ${pkg.popular ? 'text-surface/85' : 'text-ink-muted'}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-border/40 space-y-3">
                  <button
                    onClick={onContact}
                    className={`w-full py-3.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                      pkg.popular
                        ? 'btn-primary'
                        : 'border border-ink text-ink hover:bg-ink hover:text-surface'
                    }`}
                  >
                    {pkg.cta} →
                  </button>
                  <Link
                    to={pkg.serviceLink}
                    className={`block text-center text-xs underline underline-offset-4 transition-colors ${
                      pkg.popular ? 'text-surface/60 hover:text-gold' : 'text-ink-muted hover:text-ink'
                    }`}
                  >
                    Read full service details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing FAQ Section */}
          <div className="max-w-3xl mx-auto border-t border-border pt-16 mb-20">
            <div className="text-center mb-12">
              <span className="section-label text-gold block mb-2">Clear Answers</span>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-ink">
                Pricing Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={faq.q}
                  className="border border-border bg-surface-2 transition-colors duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-display text-lg font-medium text-ink hover:text-gold transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-gold text-xl leading-none">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6 text-sm text-ink-muted leading-relaxed border-t border-border/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Bar */}
          <div className="bg-ink text-surface p-10 lg:p-14 text-center max-w-4xl mx-auto relative overflow-hidden">
            <span className="section-label text-gold block mb-3">Ready to Launch?</span>
            <h3 className="font-display text-3xl lg:text-4xl font-medium text-surface mb-4">
              Get Your Project Started Today
            </h3>
            <p className="text-sm text-surface/70 max-w-xl mx-auto mb-8 leading-relaxed">
              Have questions or need a custom quote? Book a quick 15-minute discovery call or send us a message on WhatsApp.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button onClick={onContact} className="btn-primary text-xs uppercase tracking-widest px-8 py-4">
                Book a Free Discovery Call →
              </button>
              <a
                href="https://wa.me/923285324838"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-surface/30 text-surface hover:bg-surface hover:text-ink text-xs font-semibold tracking-widest uppercase px-8 py-4 transition-all duration-300"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>

          {/* Service Links Footnote */}
          <div className="mt-16 text-center">
            <p className="text-xs text-ink-muted">
              Looking for individual service breakdowns? Explore our dedicated pages:{' '}
              <Link to="/website-design" className="text-ink hover:text-gold underline underline-offset-4 font-medium">Website Design</Link>
              {' · '}
              <Link to="/google-maps-seo" className="text-ink hover:text-gold underline underline-offset-4 font-medium">Google Maps SEO</Link>
              {' · '}
              <Link to="/social-media-management" className="text-ink hover:text-gold underline underline-offset-4 font-medium">Social Media Management</Link>
            </p>
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
