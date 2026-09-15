import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Website Setup',
    price: '₹35,000',
    scope: 'Guaranteed 7-day launch · 5-Page Site',
    popular: false,
    features: [
      'Custom design for your business',
      'Mobile-friendly & fast-loading',
      'WhatsApp & contact integration',
      '2 rounds of revisions',
      '1 year hosting setup assistance',
    ],
    cta: 'Start with a Website',
    ctaHref: '#contact',
  },
  {
    name: 'The 7-Day Complete Launch',
    price: '₹46,000',
    scope: 'Full Digital Footprint · Most Popular',
    popular: true,
    features: [
      'Everything in Starter Presence',
      'Google Maps review campaign setup',
      'Automated review request workflow',
      'Social media account setup & optimization',
      'Google Map Pack SEO setup',
      'First month of content included',
    ],
    cta: 'Get Found Everywhere',
    ctaHref: '#contact',
  },
  {
    name: 'Ongoing Content & Social',
    price: '₹15,000',
    scope: 'Cancel anytime',
    popular: false,
    features: [
      'Monthly social media posts',
      'Google Maps review management',
      'Content built around your business',
      'Monthly Google Business updates',
      'Simple monthly update',
      'Priority ongoing edits & support',
    ],
    cta: 'Keep Growing',
    ctaHref: '#contact',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  viewport: { once: true, margin: '-100px' },
}

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true, margin: '-100px' },
}

function PricingCard({ plan }) {
  const handleClick = () => {
    const el = document.querySelector(plan.ctaHref)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.div
      variants={fadeInUp}
      className={`relative flex flex-col transition-all duration-500 ${
        plan.popular
          ? 'bg-ink text-surface border border-ink shadow-2xl scale-[1.02] z-10'
          : 'bg-white text-ink border border-border hover:border-border-dark'
      }`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-px left-1/2 -translate-x-1/2">
          <span className="inline-block bg-gold text-ink text-[10px] font-semibold tracking-widest uppercase px-4 py-1">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 lg:p-10">
        {/* Name */}
        <div className="mb-8 pt-2">
          <span className={`section-label ${plan.popular ? 'text-surface/40' : 'text-ink-muted'}`}>
            {plan.name}
          </span>
        </div>

        {/* Price */}
        <div className="mb-2">
          <span className={`font-display text-4xl lg:text-5xl font-medium tracking-tight ${plan.popular ? 'text-surface' : 'text-ink'}`}>
            {plan.price}
          </span>
        </div>

        {/* Scope */}
        <p className={`text-xs mb-10 pb-8 border-b ${plan.popular ? 'text-surface/50 border-surface/15' : 'text-ink-muted border-border'}`}>
          {plan.scope}
        </p>

        {/* Features */}
        <ul className="flex flex-col gap-4 mb-10 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span className="w-4 h-px mt-2.5 bg-gold flex-shrink-0" />
              <span className={`text-sm leading-snug ${plan.popular ? 'text-surface/80' : 'text-ink-muted'}`}>
                {f}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="px-8 lg:px-10 pb-8 lg:pb-10 mt-auto">
        <button
          onClick={handleClick}
          className={`w-full py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${
            plan.popular
              ? 'bg-surface text-ink hover:bg-surface/90'
              : 'border border-ink text-ink hover:bg-ink hover:text-surface'
          }`}
        >
          {plan.cta} →
        </button>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="section-py bg-surface" aria-label="Pricing">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            initial: {},
            whileInView: { transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-16"
        >
          <div>
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="section-label">Pricing</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl lg:text-5xl font-medium text-ink leading-tight max-w-xl">
              Flat-Rate Pricing.<br />Zero Monthly Retainer BS.
            </motion.h2>
          </div>
          <motion.p variants={fadeInUp} className="text-sm text-ink-muted max-w-sm leading-relaxed lg:text-right">
            We don't lock you into expensive monthly contracts. We build your entire local search presence in 7 days for a single flat fee.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border items-start"
        >
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-12 text-center max-w-2xl mx-auto"
        >
          <p className="text-sm text-ink-muted leading-relaxed">
            Final pricing is confirmed after a discovery call, where we understand your scope, goals, and timeline.
          </p>
          <p className="text-sm text-ink-muted mt-2">
            We only take on projects we're confident we can deliver exceptionally.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
