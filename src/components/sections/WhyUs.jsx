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
    title: 'Delivered in 7 Days',
    description:
      'No months of waiting or endless back-and-forth. We work fast and launch your complete professional online presence in exactly one week.',
  },
  {
    number: '02',
    title: 'Zero Marketing Fluff',
    description:
      "We don't talk about useless metrics or corporate synergy. We build high-converting sites that make your phone ring and help you capture local reviews.",
  },
  {
    number: '03',
    title: 'Optimized for Phone Calls',
    description:
      'Most homeowners search for services on their phones. We design clear, easy tap-to-call buttons and booking forms that turn traffic into actual jobs.',
  },
  {
    number: '04',
    title: 'Built-in Local SEO',
    description:
      'We structure your site and Google Maps strategy to capture local demand, making sure your business shows up when local customers search for your trade.',
  },
  {
    number: '05',
    title: 'Trade-Specific Copywriting',
    description:
      "You don't need to write a single line of text. We handle all the copywriting, tailoring it specifically to explain your craftsmanship and build trust.",
  },
  {
    number: '06',
    title: 'Commercial Credibility',
    description:
      'A polished website and professional LinkedIn presence make you look credible to commercial partners, property managers, and insurance contractors.',
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
              A Complete Marketing Footprint.<br />Built Specifically for Local Trades.
            </motion.h2>

            {/* Pull Quote */}
            <motion.blockquote
              variants={fadeInUp}
              className="relative border-l-2 border-gold pl-8 py-2 mb-10"
            >
              <p className="font-display text-xl lg:text-2xl italic text-ink leading-relaxed mb-4">
                "Most agencies charge contractors high monthly retainers and deliver zero results. We build your entire local presence in one week, then give you the keys."
              </p>
              <footer className="section-label">— Phtnex Business Philosophy</footer>
            </motion.blockquote>

            {/* Body paragraph */}
            <motion.p
              variants={fadeInUp}
              className="text-sm text-ink-muted max-w-xl leading-relaxed"
            >
              We bridge the gap for local business owners who excel at their physical trade but lack the time or tools to build a premium online reputation.
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
