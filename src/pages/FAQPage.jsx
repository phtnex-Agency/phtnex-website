import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const categories = [
  {
    label: 'Getting Started',
    faqs: [
      {
        q: 'How exactly does the 7-day launch work?',
        a: 'Day 1 is your discovery call where we learn everything about your business. Day 2 we design a mockup for your approval. Days 3–4 we build and write all copy. Day 5 we set up Google Maps and on-page SEO. Day 6 is mobile polish and QA. Day 7 we go live — your site is indexed and customers can find you.',
      },
      {
        q: 'How do I get started?',
        a: "Click \"Book a Free Discovery Call\" anywhere on this page. It's a quick 20-minute call where we learn about your business and confirm we're a good fit. No pushy sales tactics — just a real conversation.",
      },
      {
        q: 'What types of businesses do you work with?',
        a: "We specialise in travel agencies, consultants, and local service businesses across Pakistan. If you're a business that depends on local customers finding you, we're a great fit.",
      },
    ],
  },
  {
    label: 'Deliverables & Process',
    faqs: [
      {
        q: 'Do I need to provide anything beforehand?',
        a: 'Just a few things: your logo (if you have one), some photos of your work or team, and your service area. We handle all the copywriting, design, and technical setup. No tech skills required on your end.',
      },
      {
        q: "I'm not tech-savvy. Will I be able to manage it?",
        a: 'Absolutely. We build on platforms that are easy for non-tech business owners to manage. We also record a short walkthrough video showing you exactly how to make basic edits yourself.',
      },
      {
        q: 'What does the website include?',
        a: 'Every site includes a fully custom design, professional copywriting, mobile optimisation, Google Maps integration, local SEO setup, contact forms, and a speed-optimised build. Everything a local business needs to get found and convert visitors into enquiries or bookings.',
      },
    ],
  },
  {
    label: 'SEO & Results',
    faqs: [
      {
        q: 'Will my site actually show up on Google?',
        a: 'Yes — Google Maps setup, local citations, and on-page SEO are included in every package. Most of our clients see their first Google-driven calls within the first 30 days of launch.',
      },
      {
        q: 'How long before I start getting leads from Google?',
        a: 'Most clients see movement within 2–4 weeks of launch. Local SEO timelines vary depending on your area and competition, but we set you up with everything needed to rank — and we track it.',
      },
      {
        q: 'Do you guarantee first-page Google rankings?',
        a: "No ethical agency guarantees rankings — Google's algorithm is outside anyone's full control. What we do guarantee is that your site will be properly optimised, indexed, and set up to compete effectively in your local market.",
      },
    ],
  },
  {
    label: 'Pricing & Payment',
    faqs: [
      {
        q: 'Is there a contract or long-term commitment?',
        a: 'No long-term contracts. Each project is a one-time engagement. If you want ongoing support or marketing retainers, those are optional add-ons — never forced.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfer, JazzCash, Easypaisa, and other methods as outlined in your invoice. A deposit is typically required before work begins, with the balance due on completion.',
      },
      {
        q: 'What if I need changes after launch?',
        a: "Every package includes a 14-day revision window after launch. Need ongoing updates? We offer a simple monthly retainer — just ask during your discovery call and we'll put together a custom plan.",
      },
    ],
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-border last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-display text-base lg:text-lg font-medium leading-snug transition-colors duration-300 ${
            isOpen ? 'text-gold' : 'text-ink group-hover:text-ink-muted'
          }`}
        >
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 flex items-center justify-center border transition-all duration-300 mt-0.5 ${
            isOpen
              ? 'border-gold bg-gold/10 text-gold'
              : 'border-border text-ink-muted group-hover:border-ink/40'
          }`}
        >
          <motion.svg
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-sm lg:text-base text-ink-muted leading-relaxed pb-6 pr-10">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQPage({ onContact }) {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleCategoryChange = (i) => {
    setActiveCategory(i)
    setOpenIndex(0)
  }

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Frequently Asked Questions | Phtnex</title>
        <meta name="description" content="Have questions about our web design process, 7-day launch, pricing, or support? Find all the answers you need in the Phtnex FAQ." />
      </Helmet>

      {/* ── Sticky top bar ── */}
      <header className="border-b border-border bg-surface/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300 group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to Home
            </Link>
            <Link
              to="/"
              className="font-display text-xl font-semibold text-ink tracking-tight hover:opacity-70 transition-opacity duration-300"
            >
              Pht<span className="text-gold">nex</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-ink text-surface py-20 lg:py-28">
        <div className="container-main">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label text-gold mb-4"
          >
            Support
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-4xl lg:text-6xl font-semibold text-surface leading-tight mb-6"
          >
            Frequently Asked{' '}
            <span className="italic text-gold">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-base text-surface/60 max-w-xl leading-relaxed"
          >
            Everything you need to know about working with Phtnex — from how the 7-day process works to what happens after launch.
          </motion.p>
        </div>
      </div>

      {/* Category tabs */}
      <div className="border-b border-border bg-surface sticky top-[64px] lg:top-[80px] z-40">
        <div className="container-main">
          <div className="flex items-center gap-0 overflow-x-auto scrollbar-none">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => handleCategoryChange(i)}
                className={`relative flex-shrink-0 px-5 py-4 text-sm font-medium transition-colors duration-300 ${
                  activeCategory === i
                    ? 'text-ink'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {cat.label}
                {activeCategory === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container-main py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* Accordion */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="section-label text-gold mb-8">
                  {categories[activeCategory].label}
                </p>
                {categories[activeCategory].faqs.map((faq, i) => (
                  <FAQItem
                    key={i}
                    faq={faq}
                    index={i}
                    isOpen={openIndex === i}
                    onToggle={() => toggle(i)}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sticky side card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 sticky top-36"
          >
            <div className="bg-ink text-surface p-8 lg:p-10">
              <div className="w-10 h-0.5 bg-gold mb-7" />
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-surface leading-snug mb-4">
                Still have a question?
              </h3>
              <p className="text-sm text-surface/60 leading-relaxed mb-8">
                Book a free 20-minute call and we'll walk you through everything — no pressure, no pitch.
              </p>

              <button
                onClick={onContact}
                className="btn-primary text-xs tracking-widest uppercase px-6 py-3 w-full text-center"
              >
                Book a Free Discovery Call
              </button>

              <div className="mt-8 flex flex-col gap-3">
                {[
                  '✓  No long-term contracts',
                  '✓  Live in exactly 7 days',
                  '✓  US home services specialists',
                ].map((item) => (
                  <p key={item} className="text-xs text-surface/50 font-medium tracking-wide">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="mt-6 border border-border p-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-ink-muted mb-4">
                Related Pages
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'View Pricing', to: '/#pricing' },
                  { label: 'See Our Work', to: '/#work' },
                  { label: 'Privacy Policy', to: '/privacy' },
                  { label: 'Terms of Service', to: '/terms' },
                ].map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300 group text-left"
                  >
                    <span className="arrow">→</span>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-border bg-surface-2">
        <div className="container-main py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">© 2026 Phtnex. All rights reserved.</p>
          <Link
            to="/"
            className="text-xs text-ink-muted hover:text-ink transition-colors duration-300 underline underline-offset-4"
          >
            ← Return to phtnex.com
          </Link>
        </div>
      </div>
    </div>
  )
}
