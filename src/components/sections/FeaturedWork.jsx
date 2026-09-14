import { motion } from 'framer-motion'

/* ── Scrolling Background Texture ────────────────────────────────────────── */
function BackgroundTexture() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <motion.div
        animate={{ x: [0, -100] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] opacity-[0.015]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, var(--ink) 0, var(--ink) 1px, transparent 1px, transparent 40px)',
          backgroundSize: '56px 56px'
        }}
      />
    </div>
  )
}

const caseStudies = [
  {
    number: '01',
    tags: ['TRAVEL AGENCY', 'LAHORE, PAKISTAN', 'COMPLETE LAUNCH'],
    headline: 'Turning a Walk-In Travel Agency Into a Searchable, Bookable Business',
    description:
      "Many travel agencies here run entirely on word-of-mouth and a WhatsApp number. Here, we build a clean, mobile-first site around package listings and a one-tap WhatsApp enquiry — the kind of site that turns a browser into a booking before you ever answer the phone.",
    results: ['Mobile-first 4–5 page site', 'Google Maps setup', 'WhatsApp enquiry flow'],
  },
  {
    number: '02',
    tags: ['CONSULTANT', 'KARACHI, PAKISTAN', 'Website Only'],
    headline: 'Giving a Consultant a Credible First Impression Online',
    description:
      'A consultant with real expertise but no web presence loses trust before the first call happens. Here, we build a clear services and credentials page with a simple, low-friction way to book a consultation — the kind of site that does the convincing before you ever pick up the phone.',
    results: ['Services showcase', 'Booking contact page', 'Fast, mobile-first build'],
  },
  {
    number: '03',
    tags: ['CONSULTANT', 'ISLAMABAD, PAKISTAN', 'COMPLETE DIGITAL PRESENCE'],
    headline: 'Helping an Immigration Consultant Get Found Before the Competition',
    description:
      'Immigration and visa consultants are one of the most heavily searched categories on Google Maps. Here, we build a trust-first site with clear service breakdowns, optimize their Google Business Profile to match what people actually search for, and keep it active with a monthly content plan.',
    results: ['Trust-First services ', 'Google Maps setup', 'Ongoing monthly content'],
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
      staggerChildren: 0.15,
    },
  },
  viewport: { once: true, margin: '-100px' },
}

function CaseStudyCard({ study }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group grid grid-cols-1 lg:grid-cols-12 border border-border hover:border-border-dark transition-all duration-500 bg-white overflow-hidden"
    >
      {/* Number */}
      <div className="lg:col-span-1 bg-surface-2 flex items-start justify-center pt-8 lg:pt-10 pb-4 lg:pb-0 px-6 lg:px-0 border-b lg:border-b-0 lg:border-r border-border">
        <span className="font-display text-xs font-medium text-ink-light tracking-widest">{study.number}</span>
      </div>

      {/* Content */}
      <div className="lg:col-span-8 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border">
        <div className="flex flex-wrap gap-2 mb-6">
          {study.tags.map((tag) => (
            <span key={tag} className="section-label px-3 py-1.5 border border-border text-[10px]">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-2xl lg:text-3xl font-medium text-ink leading-snug mb-5">
          {study.headline}
        </h3>
        <p className="text-sm lg:text-base text-ink-muted leading-relaxed">{study.description}</p>
      </div>

      {/* Results */}
      <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center bg-surface-2/50">
        <span className="section-label mb-5">Results</span>
        <ul className="flex flex-col gap-4">
          {study.results.map((r, i) => (
            <li key={r} className="flex items-start gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 16 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="h-px bg-gold mt-2.5 flex-shrink-0"
              />
              <span className="text-sm font-medium text-ink leading-snug">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}

export default function FeaturedWork() {
  return (
    <section id="work" className="relative section-py bg-surface overflow-hidden" aria-label="Featured Work">
      <BackgroundTexture />
      <div className="container-main relative z-10">
        {/* Header with reveal animation */}
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
            <span className="section-label">Featured Work</span>
          </motion.div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <motion.h2 variants={fadeInUp} className="font-display text-4xl lg:text-5xl font-medium text-ink leading-tight max-w-lg">
              What<br />We're Building
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-sm text-ink-muted max-w-sm lg:text-right leading-relaxed">
              We focus on what matters: phone calls, local search visibility, and trust. 
              Here's the kind of work we take on for Pakistani travel agencies and consultants.
            </motion.p>
          </div>
        </motion.div>

        {/* Cards grid list with staggered reveal */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col gap-5"
        >
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.number} study={study} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
