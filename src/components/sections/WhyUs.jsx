import { motion, useScroll, useTransform } from 'framer-motion'
import ProcessTimeline from './ProcessTimeline'

/* ── Abstract Background Watermark ───────────────────────────────────────── */
function WatermarkBackground() {
  const { scrollYProgress } = useScroll()
  // As user scrolls down, the watermark rotates slightly
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45])
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <motion.div
        style={{ rotate }}
        className="absolute top-[-20%] right-[-10%] opacity-[0.03] text-ink"
      >
        <svg width="800" height="800" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="20" />
          <line x1="10" y1="50" x2="90" y2="50" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="21.7" y1="21.7" x2="78.3" y2="78.3" />
          <line x1="21.7" y1="78.3" x2="78.3" y2="21.7" />
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.03) 0%, transparent 70%)'
        }}
      />
    </div>
  )
}

const pillars = [
  {
    number: '01',
    title: 'You See It Before You Pay',
    description:
      "We build a working preview first. If you like it, we move forward — you're never buying based on a promise.",
  },
  {
    number: '02',
    title: 'You Only Pay For What You Need',
    description:
      'Just a website? Just Google Maps? Full setup? You choose — nothing is forced into a package.',
  },
  {
    number: '03',
    title: 'We Talk On WhatsApp, Not Tickets',
    description:
      "No client portals, no back-and-forth email chains — you reach us the way you'd reach anyone else.",
  },
  {
    number: '04',
    title: 'One Person, Full Accountability',
    description:
      'You work directly with the person building your site — nothing gets lost between departments.',
  },
  {
    number: '05',
    title: 'Built Around Local Search',
    description:
      "Google Maps and local visibility aren't an afterthought here — they're built in from day one.",
  },
  {
    number: '06',
    title: 'Clear Pricing, Clear Timeline',
    description:
      "You'll know the cost and the payment milestones before any work starts — no surprises later.",
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
      staggerChildren: 0.08,
    },
  },
  viewport: { once: true, margin: '-100px' },
}

function PillarCard({ pillar }) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group p-8 border border-border bg-white hover:border-border-dark transition-all duration-400"
    >
      <div className="flex items-start gap-4 mb-5">
        <span className="font-display text-xs font-medium text-gold tracking-widest pt-1">
          {pillar.number}
        </span>
        <div className="w-5 h-px bg-border mt-2.5 flex-shrink-0" />
      </div>
      <h3 className="font-display text-xl font-medium text-ink mb-3 leading-snug group-hover:text-ink transition-colors duration-300">
        {pillar.title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed">
        {pillar.description}
      </p>
    </motion.div>
  )
}

export default function WhyUs() {
  return (
    <section id="why-us" className="relative section-py bg-surface" aria-label="Why Choose Us">
      <WatermarkBackground />
      <div className="container-main relative z-10">

        {/* ── Two-column header area ───────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center mb-20">

          {/* LEFT — Animated process timeline */}
          <div className="hidden lg:flex justify-center">
            <ProcessTimeline />
          </div>

          {/* RIGHT — Text content */}
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
              initial: {},
              whileInView: { transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="section-label">Why Phtnex</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="font-display text-4xl lg:text-5xl font-medium text-ink leading-tight mb-16 max-w-2xl"
            >
              Not Just Another Web Designer.
            </motion.h2>

            {/* Pull Quote */}
            <motion.blockquote
              variants={fadeInUp}
              className="relative border-l-2 border-gold pl-8 py-2 mb-10"
            >
              <p className="font-display text-xl lg:text-2xl italic text-ink leading-relaxed mb-4">
                "Most of what makes this work isn't the code — it's how we work with you."
              </p>
              <footer className="section-label">— Phtnex Business Philosophy</footer>
            </motion.blockquote>

            {/* Body paragraph */}
            <motion.p
              variants={fadeInUp}
              className="text-sm text-ink-muted max-w-xl leading-relaxed"
            >
              We bridge the gap for travel agencies, consultants, and local businesses across Pakistan who are excellent at what they do but have no time or expertise to build a proper online presence.
            </motion.p>
          </motion.div>

        </div>

        {/* ── Pillars grid (full width) ────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {pillars.map((pillar) => (
            <PillarCard key={pillar.number} pillar={pillar} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
