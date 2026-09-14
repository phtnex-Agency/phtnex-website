import { motion, useScroll, useTransform } from 'framer-motion'
import HeroVisual from './HeroVisual'

/* ── Subtle Background Animation ───────────────────────────────────────── */
function BackgroundAnimations() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 200])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Huge subtle glow in top-left */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-[40%] -left-[20%] w-[120%] h-[120%]"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.02) 0%, transparent 60%)',
        }}
      />
      
      {/* Floating gold dots */}
      <motion.div style={{ y }} className="absolute inset-0">
        {[
          { top: '15%', left: '8%', size: 4, delay: 0 },
          { top: '65%', left: '15%', size: 3, delay: 2 },
          { top: '25%', left: '85%', size: 5, delay: 1 },
          { top: '75%', left: '80%', size: 3, delay: 3 },
          { top: '45%', left: '50%', size: 2, delay: 1.5 },
        ].map((dot, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: dot.delay,
            }}
            className="absolute rounded-full"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              background: 'var(--gold)',
              boxShadow: '0 0 10px rgba(201,169,110,0.4)',
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

/**
 * Hero Section
 * Two-column layout: left = copy/CTAs, right = animated visual.
 * Content animates in immediately on mount using Framer Motion.
 */
export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <BackgroundAnimations />

      <motion.div
        className="container-main relative z-10"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        {/* ── Two-column grid ───────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* LEFT — Text content */}
          <div>
            {/* Eyebrow label */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">
              <span className="section-label">
                7-DAY DIGITAL LAUNCH · FOR PAKISTANI AGENCIES &amp; CONSULTANTS
              </span>
              <span className="block w-8 h-px bg-ink-muted" aria-hidden="true" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-[58px] leading-[1.05] tracking-tight text-ink mb-8 text-balance"
            >
              Every customer starts with a search.<br />
              Make{' '}
              <em className="not-italic italic" style={{ color: 'var(--ink-muted)' }}>sure they find</em>
              <br />
              you.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-ink-muted leading-relaxed max-w-xl mb-10 text-balance"
            >
              We build websites, Google Maps visibility, and social presence for travel agencies, consultants, and growing businesses across Pakistan.
              — so the customers already looking for you can actually find you.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-primary px-8 py-4 text-sm group"
              >
                Get Your 7-Day Launch
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <button
                onClick={() => handleScroll('#work')}
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors duration-300"
              >
                <span>View Trade Case Studies</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
              </button>
            </motion.div>

            {/* Trust micro-copy */}
            <motion.p variants={itemVariants} className="text-xs text-ink-light mb-14">
              Guaranteed 7-day launch · Custom design for local trades · Phone-call optimized
            </motion.p>

            {/* Divider */}
            <motion.div variants={itemVariants} className="w-full h-px bg-border mb-12" />

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 lg:gap-10 max-w-sm">
              {[
                { value: '7 Days', label: 'Guaranteed Delivery' },
                { value: '100%', label: 'Visible Local Reach' },
                { value: '5-Star', label: 'Google Review Plan' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-display text-3xl lg:text-4xl font-semibold mb-1.5"
                    style={{ color: 'var(--gold)' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-ink-muted leading-snug">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Animated visual (hidden on mobile) */}
          <div className="hidden lg:flex items-center justify-center">
            <HeroVisual />
          </div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25" aria-hidden="true">
        <span className="text-[10px] tracking-widest uppercase text-ink-muted font-medium">Scroll</span>
        <div className="w-px h-10 bg-ink-muted animate-pulse" />
      </div>
    </section>
  )
}
