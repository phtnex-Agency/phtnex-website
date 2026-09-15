import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How exactly does the 7-day launch work?',
    a: 'Day 1 is your discovery call where we learn everything about your business. Day 2 we design a mockup for your approval. Days 3–4 we build and write all copy. Day 5 we set up Google Maps and on-page SEO. Day 6 is mobile polish and QA. Day 7 we go live — your site is indexed and customers can find you.',
  },
  {
    q: 'What if I need changes after launch?',
    a: 'Every package includes a 14-day revision window after launch. Need ongoing updates? We offer a simple monthly retainer — just ask during your discovery call and we\'ll put together a custom plan.',
  },
  {
    q: 'Do I need to provide anything beforehand?',
    a: 'Just a few things: your logo (if you have one), some photos of your work or team, and your service area. We handle all the copywriting, design, and technical setup. No tech skills required on your end.',
  },
  {
    q: 'Will my site actually show up on Google?',
    a: 'Yes — Google Maps setup, local citations, and on-page SEO are included in every package. Most of our clients see their first Google-driven calls within the first 30 days of launch.',
  },
  {
    q: 'I\'m not tech-savvy. Will I be able to manage it?',
    a: 'Absolutely. We build on platforms that are easy for non-tech business owners to manage. We also record a short walkthrough video showing you exactly how to make basic edits yourself.',
  },
  {
    q: 'What types of businesses do you work with?',
    a: "We specialise in travel agencies, consultants, and local service businesses across Pakistan. If you're a business that depends on local customers finding you, we're a great fit.",
  },
  {
    q: 'Is there a contract or long-term commitment?',
    a: 'No long-term contracts. Each project is a one-time engagement. If you want ongoing support or marketing retainers, those are optional add-ons — never forced.',
  },
  {
    q: 'How do I get started?',
    a: 'Click "Book a Free Discovery Call" anywhere on this page. It\'s a quick 20-minute call where we learn about your business and confirm we\'re a good fit. No pushy sales tactics — just a real conversation.',
  },
]

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
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
        {/* Icon */}
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faqs" className="section-py bg-surface-2" aria-label="FAQs">
      <div className="container-main">
        {/* Header */}
        <div className="max-w-2xl mb-14 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="section-label text-gold mb-4"
          >
            FAQs
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="heading-2 text-ink"
          >
            Questions we hear{' '}
            <span className="font-display italic text-gold">all the time</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Accordion */}
          <div className="lg:col-span-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>

          {/* Side card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 sticky top-28"
          >
            <div className="bg-ink text-surface p-8 lg:p-10">
              {/* Gold accent */}
              <div className="w-10 h-0.5 bg-gold mb-7" />
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-surface leading-snug mb-4">
                Still have a question?
              </h3>
              <p className="text-sm text-surface/60 leading-relaxed mb-8">
                Book a free 20-minute call and we'll walk you through everything — no pressure, no pitch.
              </p>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="btn-primary inline-block text-xs tracking-widest uppercase px-6 py-3 w-full text-center"
              >
                Book a Free Discovery Call
              </a>

              {/* Trust micro-badges */}
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}
