import { useState } from 'react'
import { motion } from 'framer-motion'

const trustPoints = [
  'Free 30-minute local strategy session',
  'Complete setup delivered in 7 days',
  'No monthly retainers or hidden fees',
  'Honest local SEO and review advice',
]

const serviceOptions = [
  'The 7-Day Complete Launch (₹46,000)',
  'Website Setup (₹35,000)',
  'Ongoing Content & Social (₹15,000/mo)',
  'Not sure / Custom Inquiry',
]

const tradeOptions = [
  'Travel Agencies & Tour Operators',
  'Immigration Consultants',
  'Tax & Financial Consultants',
  'Business Consultants',
  'Legal Consultants',
  'Real Estate Agents',
  'Wedding & Event Planners',
  'Clinics & Dental Practices',
  'Salons & Beauty Studios',
  'Gyms & Fitness Trainers',
  'Auto Workshops & Detailing',
  'Educational Academies & Tutors',
  'Interior Designers',
  'Photographers & Videographers',
  'Restaurants & Cafés',
  'Other Trade',
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

export default function ContactCTA() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    service: '',
    trade: '',
    overview: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    // TODO: Replace with your form endpoint (Formspree, EmailJS, etc.)
    // Example: await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form) })
    console.log('Form submitted:', form)
    await new Promise((r) => setTimeout(r, 1000)) // Simulated delay
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-py bg-ink" aria-label="Contact">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left — CTA Copy with staggered enter */}
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="section-label text-surface/40">Ready to Dominate Your Local Area?</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium text-surface leading-[1.1] mb-8">
              Let's Get Your Business<br />
              <span className="italic text-surface/60">Fully Booked.</span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-sm text-surface/60 leading-relaxed mb-12 max-w-md">
              Your next customer is searching on Google right now. Let's make sure they find you, see your 5-star reviews, and call you instead of your competitors.
            </motion.p>

            {/* Trust bullets */}
            <motion.ul variants={staggerContainer} className="flex flex-col gap-4">
              {trustPoints.map((point) => (
                <motion.li key={point} variants={fadeInUp} className="flex items-start gap-4">
                  <span className="w-4 h-px bg-gold mt-2.5 flex-shrink-0" />
                  <span className="text-sm text-surface/70">{point}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right — Form wrapper */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="relative border border-surface/10 p-8 lg:p-10 bg-black/20 overflow-hidden"
          >
            {/* Animated background glow */}
            <motion.div
              animate={{ 
                x: ['-50%', '50%', '-50%'],
                y: ['-20%', '20%', '-20%']
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 w-[150%] h-[150%] rounded-full pointer-events-none z-0"
              style={{
                background: 'radial-gradient(circle at center, rgba(201,169,110,0.06) 0%, transparent 60%)',
              }}
            />

            <div className="relative z-10">
              <p className="text-xs text-surface/40 tracking-widest uppercase mb-8">
                Start a Conversation
              </p>
              <p className="text-sm text-surface/50 mb-10 leading-relaxed">
                Tell us about your business. We'll outline your custom 7-day launch plan within 24 hours.
              </p>

            {submitted ? (
              <div className="flex flex-col items-start gap-4 py-8">
                <div className="w-10 h-10 border border-gold/40 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-xl text-surface">Message received.</h3>
                <p className="text-sm text-surface/60 leading-relaxed">
                  Thank you for reaching out. We will review your trade business details and follow up with your custom launch strategy within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="section-label text-surface/40 block mb-3">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Ali Khan"
                    className="form-input !text-surface placeholder-surface/20 border-surface/20 focus:border-surface/60 bg-transparent"
                  />
                </div>

                {/* Business */}
                <div>
                  <label htmlFor="business" className="section-label text-surface/40 block mb-3">
                    Business Name
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    value={form.business}
                    onChange={handleChange}
                    placeholder="Ali's Consulting"
                    className="form-input !text-surface placeholder-surface/20 border-surface/20 focus:border-surface/60 bg-transparent"
                  />
                </div>

                {/* Service + Trade row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="service" className="section-label text-surface/40 block mb-3">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="form-select !text-surface border-surface/20 focus:border-surface/60 w-full"
                        style={{ background: 'transparent', color: form.service ? 'rgba(250,250,248,1)' : 'rgba(250,250,248,0.3)' }}
                      >
                        <option value="" disabled style={{ background: '#0A0A0A' }}>Select Package</option>
                        {serviceOptions.map((o) => (
                          <option key={o} value={o} style={{ background: '#0A0A0A' }}>{o}</option>
                        ))}
                      </select>
                      <span className="absolute right-0 top-3 text-surface/30 pointer-events-none">↓</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="trade" className="section-label text-surface/40 block mb-3">
                      Your Trade Sector
                    </label>
                    <div className="relative">
                      <select
                        id="trade"
                        name="trade"
                        value={form.trade}
                        onChange={handleChange}
                        className="form-select !text-surface border-surface/20 focus:border-surface/60 w-full"
                        style={{ background: 'transparent', color: form.trade ? 'rgba(250,250,248,1)' : 'rgba(250,250,248,0.3)' }}
                      >
                        <option value="" disabled style={{ background: '#0A0A0A' }}>Select Trade</option>
                        {tradeOptions.map((o) => (
                          <option key={o} value={o} style={{ background: '#0A0A0A' }}>{o}</option>
                        ))}
                      </select>
                      <span className="absolute right-0 top-3 text-surface/30 pointer-events-none">↓</span>
                    </div>
                  </div>
                </div>

                {/* Overview */}
                <div>
                  <label htmlFor="overview" className="section-label text-surface/40 block mb-3">
                    Business Goals & Context
                  </label>
                  <textarea
                    id="overview"
                    name="overview"
                    rows={4}
                    value={form.overview}
                    onChange={handleChange}
                    placeholder="Tell us about your trade business, your target service cities, and any goals that would help us build your launch strategy..."
                    className="form-input !text-surface placeholder-surface/20 border-surface/20 focus:border-surface/60 bg-transparent resize-none border border-surface/10 p-4 w-full"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-surface text-ink text-sm font-medium tracking-wide transition-all duration-300 hover:bg-surface/90 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                >
                  {submitting ? 'Sending...' : 'Get Your 7-Day Launch Plan →'}
                </button>
              </form>
            )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
