import { motion } from 'framer-motion'

const services = [
  {
    symbol: '◱',
    name: 'Professional Website',
    tagline: 'Built to convert visitors into calls and bookings.',
    description:
      "A local business website isn't a digital brochure. It's your lead engine. We design custom, blazing-fast 5-page websites built specifically for trade businesses. Complete with clear click-to-call buttons, mobile-ready layout, and high-converting copy tailored to homeowners.",
    ideal: ['Travel agencies', 'Consultants', 'Local service businesses'],
    price: 'Delivered in 7 Days',
    popular: true,
    cta: 'Get Your Professional Website',
  },
  {
    symbol: '★',
    name: 'Google Maps Strategy',
    tagline: 'Rank higher in local search with more reviews.',
    description:
      "When homeowners need help fast, they search on Google and choose the one with the most reviews. We launch a custom, automated Google Maps review campaign to get your past clients to leave glowing 5-star reviews. More reviews = better visibility = more calls.",
    ideal: ['Local SEO growth', 'Review automation', 'Map pack ranking'],
    price: 'Included in Launch Pack',
    popular: false,
    cta: 'Boost Google Reviews',
  },
  {
    symbol: '◲',
    name: 'Social Media & Content',
    tagline: 'Look professional to commercial partners and clients.',
    description:
      "If you want to secure lucrative commercial contracts, insurance work, or high-value residential projects, a generic Facebook page isn't enough. We set up and polish a professional Social Media page that establishes trust and authority with property managers and partners.",
    ideal: ['B2B contract bidding', 'Commercial building bids', 'Partner credibility'],
    price: 'Included in Launch Pack',
    popular: false,
    cta: 'Setup Social Media',
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

function ServiceCard({ service }) {
  const handleClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.div
      variants={fadeInUp}
      className={`relative flex flex-col p-8 lg:p-10 border transition-all duration-500 group ${
        service.popular
          ? 'bg-ink text-surface border-ink'
          : 'bg-white text-ink border-border hover:border-border-dark hover:-translate-y-0.5'
      }`}
    >
      {/* Subtle hover gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"
        style={{
          background: service.popular
            ? 'radial-gradient(circle at center, rgba(201,169,110,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle at center, rgba(10,10,10,0.02) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {service.popular && (
        <div className="absolute -top-px left-8 z-10">
          <span className="inline-block bg-gold text-ink text-[10px] font-semibold tracking-widest uppercase px-3 py-1">
            Most Popular
          </span>
        </div>
      )}

      <div className={`relative z-10 text-3xl mb-6 mt-4 transition-transform duration-500 group-hover:scale-110 group-hover:origin-left ${service.popular ? 'text-surface/30' : 'text-border-dark'}`}>
        {service.symbol}
      </div>

      <h3 className={`relative z-10 font-display text-2xl font-medium mb-2 leading-snug ${service.popular ? 'text-surface' : 'text-ink'}`}>
        {service.name}
      </h3>
      <p className="relative z-10 text-sm font-medium mb-5 text-gold">{service.tagline}</p>

      <p className={`relative z-10 text-sm leading-relaxed mb-7 flex-1 ${service.popular ? 'text-surface/70' : 'text-ink-muted'}`}>
        {service.description}
      </p>

      <div className="relative z-10 mb-8">
        <span className={`section-label text-[10px] block mb-3 ${service.popular ? 'text-surface/40' : 'text-ink-muted'}`}>
          Ideal for
        </span>
        <div className="flex flex-wrap gap-2">
          {service.ideal.map((item) => (
            <span
              key={item}
              className={`text-xs px-2.5 py-1 border ${
                service.popular ? 'border-surface/20 text-surface/60' : 'border-border text-ink-muted'
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={`relative z-10 pt-7 border-t ${service.popular ? 'border-surface/15' : 'border-border'}`}>
        <div className={`font-display text-2xl font-medium mb-5 ${service.popular ? 'text-surface' : 'text-ink'}`}>
          {service.price}
        </div>
        <button
          onClick={handleClick}
          className={`w-full py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
            service.popular
              ? 'bg-surface text-ink hover:bg-surface/90'
              : 'border border-ink text-ink hover:bg-ink hover:text-surface'
          }`}
        >
          {service.cta} →
        </button>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-py bg-surface-2" aria-label="Services">
      <div className="container-main">
        {/* Header section with Framer Motion */}
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            initial: {},
            whileInView: { transition: { staggerChildren: 0.08 } },
          }}
          className="mb-14"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="section-label">Our Services</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl lg:text-5xl font-medium text-ink leading-tight mb-5">
            The Three Pillars of Your<br />Complete Digital Presence
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-sm text-ink-muted max-w-md leading-relaxed">
            We don't offer complex marketing retainers. We deliver the three exact assets local service and trade businesses need to capture local demand.
          </motion.p>
        </motion.div>

        {/* Staggered cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border"
        >
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
