import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'

/* ─── Icons ─────────────────────────────────────────────── */
const icons = {
  website: (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
      <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 14h32" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="11" r="1.2" fill="currentColor" />
      <circle cx="14" cy="11" r="1.2" fill="currentColor" />
      <path d="M10 20h8M10 25h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="24" y="18" width="8" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  maps: (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
      <path d="M20 5C14.477 5 10 9.477 10 15c0 8.25 10 20 10 20s10-11.75 10-20c0-5.523-4.477-10-10-10z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="20" cy="15" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 32c2-1.5 6-2.5 12-2.5s10 1 12 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  social: (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
      <circle cx="20" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="9" cy="28" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="31" cy="28" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M20 16L9.5 24.5M20 16l10.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
      <circle cx="18" cy="18" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path d="M25.5 25.5L34 34" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 18h10M18 13v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  automation: (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
      <rect x="6" y="14" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <rect x="24" y="14" width="10" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 20h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 17l4 3-4 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 9v5M11 26v5M29 9v5M29 26v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  agent: (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
      <rect x="8" y="10" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15" cy="19" r="2" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="25" cy="19" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M14 25c1.5 2 10.5 2 12 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M15 10V7M25 10V7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M8 22H5M35 22h-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  assistant: (
    <svg viewBox="0 0 40 40" fill="none" className="w-full h-full" aria-hidden>
      <path d="M6 8h28a2 2 0 012 2v14a2 2 0 01-2 2H22l-6 6v-6H8a2 2 0 01-2-2V10a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="14" cy="17" r="1.5" fill="currentColor" />
      <circle cx="20" cy="17" r="1.5" fill="currentColor" />
      <circle cx="26" cy="17" r="1.5" fill="currentColor" />
    </svg>
  ),
}

/* ─── Data ───────────────────────────────────────────────── */
const coreServices = [
  {
    index: '01', icon: 'website',
    title: 'Website Design', to: '/website-design',
    badge: 'Core Service', price: 'From $140',
    blurb: 'Custom, mobile-optimized 5-page websites built for high conversion, phone-call triggers, and guaranteed 7-day delivery. Your business online, fast.',
    tags: ['Travel Agencies', 'Consultants', 'Local Businesses'],
  },
  {
    index: '02', icon: 'maps',
    title: 'Google Maps SEO', to: '/google-maps-seo',
    badge: 'Local Visibility', price: 'Included in Launch Pack',
    blurb: 'Rank in the top 3 of local Google Map Pack results, fully optimize your Google Business Profile, and automate glowing 5-star review campaigns.',
    tags: ['Map Pack Ranking', 'Review Automation', 'Local Authority'],
  },
  {
    index: '03', icon: 'social',
    title: 'Social Media Management', to: '/social-media-management',
    badge: 'Brand Credibility', price: '$150 / mo',
    blurb: 'Establish B2B authority with commercial partners and property managers using polished monthly content and professionally managed social profiles.',
    tags: ['B2B Contracts', 'Content Calendar', 'Brand Authority'],
  },
  {
    index: '04', icon: 'seo',
    title: 'Organic SEO Services', to: '/seo',
    badge: 'Search Authority', price: 'Custom Quote — Book a Call',
    blurb: 'Technical SEO audits, keyword architecture, on-page optimization, and JSON-LD schema to rank for high-intent terms nationally and globally — distinct from local map-pack ranking.',
    tags: ['Technical Audits', 'Keyword Strategy', 'Content SEO'],
  },
]

const advancedServices = [
  {
    index: '05', icon: 'automation',
    title: 'Workflow Automation (n8n)', to: '/n8n-automation',
    badge: 'Operations', price: 'Custom Quote — Book a Call',
    blurb: 'Connect your business tools, automate lead routing, sync CRM records, and eliminate repetitive manual data entry using powerful self-hosted n8n pipelines.',
    tags: ['CRM Integration', 'Lead Routing', 'API Connections'],
  },
  {
    index: '06', icon: 'agent',
    title: 'AI Agent Development', to: '/ai-agents',
    badge: 'Autonomous AI', price: 'Custom Quote — Book a Call',
    blurb: 'Deploy custom, goal-driven AI agents with vector knowledge bases, document parsing, and multi-step execution capabilities for complex business operations.',
    tags: ['Document Processing', 'RAG Architecture', 'Autonomous Tasks'],
  },
  {
    index: '07', icon: 'assistant',
    title: 'AI Assistant for Business', to: '/ai-assistant',
    badge: '24/7 Engagement', price: 'Custom Quote — Book a Call',
    blurb: 'Brand-trained conversational AI assistants that greet website visitors around the clock, qualify leads in natural language, and schedule discovery calls automatically.',
    tags: ['24/7 Lead Capture', 'WhatsApp & Web', 'Multilingual'],
  },
]

/* ─── Animation variants ─────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  viewport: { once: true, margin: '-60px' },
}

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.09 } },
  viewport: { once: true, margin: '-60px' },
}

/* ─── ServiceRow ─────────────────────────────────────────── */
function ServiceRow({ service }) {
  return (
    <motion.div variants={fadeUp}>
      <Link
        to={service.to}
        className="group relative flex flex-col sm:flex-row items-start gap-6 lg:gap-10 py-9 lg:py-11 border-b border-border -mx-6 lg:-mx-8 px-6 lg:px-8 transition-all duration-400 hover:bg-surface-2"
      >
        {/* Gold left-edge accent on hover */}
        <span className="absolute left-0 top-0 h-full w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 rounded-none" />

        {/* Index + Icon column */}
        <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-3 shrink-0 sm:w-28 lg:w-32">
          <span className="font-display text-4xl lg:text-6xl font-medium text-border-dark group-hover:text-gold/60 transition-colors duration-500 leading-none select-none tabular-nums">
            {service.index}
          </span>
          {/* Icon box */}
          <div className="relative flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 border border-border group-hover:border-gold/50 bg-surface-2 group-hover:bg-ink transition-all duration-400 shrink-0">
            <span className="w-6 h-6 lg:w-7 lg:h-7 text-ink-muted group-hover:text-gold transition-colors duration-400">
              {icons[service.icon]}
            </span>
            {/* corner dot */}
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold border border-gold/40 px-2.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
              {service.badge}
            </span>
            <span className="text-xs text-ink-muted font-medium">{service.price}</span>
          </div>

          <h3 className="font-display text-2xl lg:text-3xl xl:text-4xl font-medium text-ink group-hover:text-ink transition-colors duration-300 leading-tight mb-3">
            {service.title}
          </h3>

          <p className="text-sm lg:text-[15px] text-ink-muted leading-relaxed max-w-2xl mb-5">
            {service.blurb}
          </p>

          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 border border-border/70 text-ink-muted group-hover:border-gold/30 transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Arrow CTA */}
        <div className="shrink-0 self-center sm:self-auto sm:mt-10 lg:mt-12">
          <span className="flex items-center justify-center w-10 h-10 border border-border group-hover:border-gold group-hover:bg-gold transition-all duration-300">
            <span className="text-sm text-ink-muted group-hover:text-ink group-hover:translate-x-0.5 transition-all duration-300">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

/* ─── Page ───────────────────────────────────────────────── */
export default function ServicesOverviewPage({ onContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Digital Services Overview | Phtnex</title>
        <meta
          name="description"
          content="Explore the complete suite of Phtnex services: Website Design, Google Maps SEO, Social Media Management, Organic SEO, n8n Automation, AI Agents, and AI Assistants."
        />
        <link rel="canonical" href="https://www.phtnex.com/services" />
      </Helmet>

      <Navbar />

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="bg-ink pt-28 pb-0 lg:pt-36 relative overflow-hidden">
        {/* Grid bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
          style={{
            backgroundImage:
              'linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Decorative concentric rings — top right */}
        <div className="absolute right-0 top-0 w-[600px] h-[600px] pointer-events-none z-0 opacity-10 translate-x-1/3 -translate-y-1/4">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border border-gold"
              style={{ margin: `${i * 48}px` }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.12, duration: 1.2, ease: 'easeOut' }}
            />
          ))}
          {/* Gold dot centre */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-gold opacity-60" />
          </div>
        </div>

        {/* Floating service count badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="absolute right-8 bottom-8 lg:right-16 lg:bottom-12 hidden lg:flex flex-col items-end gap-1 z-10"
        >
          <span className="font-display text-[80px] leading-none font-medium text-surface/5 select-none">7</span>
          <span className="text-[10px] text-gold/60 uppercase tracking-widest">Services</span>
        </motion.div>

        <div className="container-main relative z-10 pb-16 lg:pb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label text-gold block mb-5"
          >
            Complete Suite · 7 Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium text-surface leading-[1.04] mb-8 max-w-4xl"
          >
            Digital, Automation<br />
            <span className="text-gold italic">&amp; AI Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-base lg:text-lg text-surface/60 leading-relaxed max-w-2xl mb-10"
          >
            From a high-converting website live in 7 days to autonomous AI agents working around the clock —
            every service below is engineered to grow your business, not pad an agency's retainer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <button onClick={onContact} className="btn-primary text-xs uppercase tracking-widest px-8 py-4">
              Book a Free Discovery Call →
            </button>
            <a href="#services-list" className="text-sm text-surface/60 hover:text-gold transition-colors font-medium">
              Browse all 7 services ↓
            </a>
          </motion.div>
        </div>

        {/* Bottom visual bar — service icon strip */}
        <div className="border-t border-surface/10 bg-surface/[0.03]">
          <div className="container-main">
            <div className="flex items-stretch divide-x divide-surface/10 overflow-x-auto">
              {[...coreServices, ...advancedServices].map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group flex flex-col items-center gap-2 py-5 px-6 lg:px-8 shrink-0 hover:bg-surface/5 transition-colors duration-200"
                >
                  <span className="w-5 h-5 text-surface/30 group-hover:text-gold transition-colors duration-300">
                    {icons[s.icon]}
                  </span>
                  <span className="text-[10px] text-surface/30 group-hover:text-surface/70 uppercase tracking-wider font-medium whitespace-nowrap transition-colors">
                    {s.index}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ════════════════════════════════════════ */}
      <section className="bg-surface-2 border-b border-border">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {[
              { val: '7', label: 'Total Services' },
              { val: '7-Day', label: 'Website Launch' },
              { val: '24/7', label: 'AI Coverage' },
              { val: '$140', label: 'Starts From' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                {...fadeUp}
                className="py-8 px-6 lg:px-10 text-center"
              >
                <p className="font-display text-3xl lg:text-4xl font-medium text-ink mb-1">{stat.val}</p>
                <p className="text-[10px] text-ink-muted uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE SERVICES ════════════════════════════════════ */}
      <section id="services-list" className="section-py bg-surface">
        <div className="container-main">
          <motion.div {...fadeUp} className="mb-10 flex items-end justify-between">
            <div>
              <span className="section-label block mb-2">Foundation</span>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-ink">Core Services</h2>
            </div>
            <span className="hidden sm:block font-display text-7xl font-medium text-border/60 select-none leading-none">
              01–04
            </span>
          </motion.div>

          <motion.div {...stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            {coreServices.map((s) => (
              <ServiceRow key={s.to} service={s} />
            ))}
          </motion.div>

          {/* ── Advanced divider ── */}
          <motion.div {...fadeUp} className="mt-24 mb-12">
            <div className="relative flex items-center gap-0 mb-10">
              <div className="flex-1 h-px bg-border" />
              <div className="flex items-center gap-3 px-6 py-2.5 bg-ink">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-[10px] text-gold uppercase tracking-widest font-semibold whitespace-nowrap">
                  Advanced Tech
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              </div>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-ink mb-3">
                  Automation &amp; AI Services
                </h2>
                <p className="text-sm text-ink-muted max-w-xl leading-relaxed">
                  Intelligent, custom-built solutions that run operations, capture leads,
                  and process data while you sleep.
                </p>
              </div>
              <span className="hidden sm:block font-display text-7xl font-medium text-border/60 select-none leading-none">
                05–07
              </span>
            </div>
          </motion.div>

          <motion.div {...stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            {advancedServices.map((s) => (
              <ServiceRow key={s.to} service={s} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ FULL-WIDTH CTA ═══════════════════════════════════ */}
      <section className="bg-ink relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        {/* Decorative gold ring */}
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full border border-gold/10 translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="absolute right-12 bottom-12 w-64 h-64 rounded-full border border-gold/10 translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container-main relative z-10 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.span {...fadeUp} className="section-label text-gold block mb-4">
                Not Sure Where to Start?
              </motion.span>
              <motion.h2
                {...fadeUp}
                className="font-display text-4xl lg:text-5xl font-medium text-surface leading-tight mb-6"
              >
                Let's Build the Right Package for Your Business
              </motion.h2>
              <motion.p {...fadeUp} className="text-base text-surface/55 leading-relaxed mb-10">
                Tell us what your business needs in a quick 20-minute call. We'll map out exactly
                which combination of services gets you the fastest results.
              </motion.p>
              <motion.div {...fadeUp} className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={onContact}
                  className="btn-primary bg-gold text-ink hover:opacity-90 text-xs uppercase tracking-widest px-10 py-4"
                >
                  Book a Free Call →
                </button>
                <Link to="/pricing" className="text-sm text-surface/60 hover:text-gold transition-colors font-medium">
                  View fixed-rate pricing →
                </Link>
              </motion.div>
            </div>

            {/* Visual: icon grid */}
            <motion.div
              {...fadeUp}
              className="hidden lg:grid grid-cols-4 gap-3"
            >
              {[...coreServices, ...advancedServices].map((s, i) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group flex flex-col items-center justify-center gap-3 aspect-square border border-surface/10 hover:border-gold/50 hover:bg-surface/5 transition-all duration-300"
                >
                  <span className="w-7 h-7 text-surface/25 group-hover:text-gold transition-colors duration-300">
                    {icons[s.icon]}
                  </span>
                  <span className="text-[9px] text-surface/20 group-hover:text-surface/50 uppercase tracking-wider text-center font-medium leading-tight px-1 transition-colors">
                    {s.title.split(' ').slice(0, 2).join(' ')}
                  </span>
                </Link>
              ))}
              {/* 8th cell — filler */}
              <div className="aspect-square border border-surface/5 flex items-center justify-center">
                <span className="text-gold/30 text-xl">+</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
