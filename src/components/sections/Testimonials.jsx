import { motion } from 'framer-motion'

const testimonials = [
  {
    initials: 'WH',
    name: 'Wajid H.',
    role: 'Owner, Visa & Immigration Services',
    location: 'Karachi, Pakistan',
    quote:
      'I had no idea how many jobs I was losing because my website was broken. Phtnex rebuilt everything in a week, launched a custom review strategy that got us 45 glowing reviews, and now the phone doesn\'t stop ringing.',
  },
  {
    initials: 'JS',
    name: 'Jawad S.',
    role: 'Co-founder, Apex Consulting',
    location: 'Lahore, Pakistan',
    quote:
      'The Google review strategy alone doubled our ranking in local search. Homeowners call us directly because we have the most reviews in our area. The 7-day launch was seamless and highly professional.',
  },
  {
    initials: 'SA',
    name: 'Sarah A.',
    role: 'Founder, Tex Cleaners',
    location: 'Karachi, Pakistan',
    quote:
      'Having a premium professional site and a polished LinkedIn presence completely changed how commercial buyers see us. We have already secured three recurring commercial contracts. Outstanding work!',
  },
  {
    initials: 'AK',
    name: 'Ali K.',
    role: 'Owner, Sparky Fly Electrical',
    location: 'Peshawar, Pakistan',
    quote:
      'Fast, honest, and exactly what trade businesses need. They speak our language — no complex marketing jargon, just a solid website that converts traffic and gets us found on Google. Highly recommend.',
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

function TestimonialCard({ testimonial }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="flex flex-col p-8 lg:p-10 bg-white border border-border hover:border-border-dark transition-all duration-400 group"
    >
      {/* Quote mark */}
      <div className="font-display text-5xl text-gold/40 leading-none mb-6 select-none" aria-hidden="true">
        "
      </div>

      {/* Quote text */}
      <blockquote className="text-sm lg:text-base text-ink-muted leading-relaxed flex-1 mb-8">
        {testimonial.quote}
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-semibold text-surface tracking-wide">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
          <p className="text-xs text-ink-muted mt-0.5">
            {testimonial.role} · {testimonial.location}
          </p>
        </div>
      </div>
    </motion.article>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-py bg-surface-2" aria-label="Testimonials">
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
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14"
        >
          <div>
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="section-label">Client Stories</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl lg:text-5xl font-medium text-ink leading-tight">
              What Our<br />Clients Say
            </motion.h2>
          </div>
          <motion.div variants={fadeInUp} className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-gold"
                aria-hidden="true"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="text-xs text-ink-muted ml-2">98% satisfaction rate</span>
          </motion.div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
