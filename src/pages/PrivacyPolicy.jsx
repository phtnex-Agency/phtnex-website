import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/* ── Section data ─────────────────────────────────────────────────────────── */
const sections = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
      </svg>
    ),
    title: '1. Information We Collect',
    content: [
      { subtitle: 'Information You Provide Directly', body: 'When you fill out our contact form, book a discovery call, or communicate with us via email or phone, we may collect your name, business name, email address, phone number, and details about your business and the services you are interested in.' },
      { subtitle: 'Information Collected Automatically', body: 'When you visit our website, we may automatically collect certain information about your device and browsing behaviour, including your IP address, browser type, operating system, referring URLs, pages visited, and the date and time of your visit. This information is collected through standard web technologies such as cookies and similar tracking tools.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: '2. How We Use Your Information',
    content: [
      { body: 'We use the information we collect to: respond to your enquiries and provide our services; schedule and conduct discovery calls; send you project updates and relevant communications; improve our website and services; comply with applicable legal obligations; and send occasional marketing communications (only where you have provided consent or where permitted by law). We do not sell, rent, or share your personal information with third parties for their own marketing purposes.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 4v6l4 2"/>
      </svg>
    ),
    title: '3. Cookies',
    content: [
      { body: 'Our website uses cookies — small text files stored on your device — to enhance your browsing experience, understand how visitors interact with our site, and improve our services. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of certain parts of our website.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: '4. Data Sharing & Third Parties',
    content: [
      { body: 'We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services (for example, email platforms, scheduling tools, and analytics services). These providers are contractually obligated to keep your information confidential and use it only for the purposes we specify. We may also disclose your information if required by law or to protect the rights, property, or safety of Phtnex, our clients, or others.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    title: '5. Data Retention',
    content: [
      { body: 'We retain your personal data only for as long as necessary to fulfil the purposes outlined in this Policy or as required by law. When your data is no longer needed, we securely delete or anonymise it.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: '6. Your Rights',
    content: [
      { body: 'Depending on your location, you may have the right to: access the personal data we hold about you; request correction of inaccurate or incomplete data; request deletion of your data; withdraw consent at any time (where processing is based on consent); and lodge a complaint with a relevant data protection authority. To exercise any of these rights, please contact us using the details below.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: '7. Data Security',
    content: [
      { body: 'We take reasonable technical and organisational measures to protect your personal information from unauthorised access, loss, or misuse. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: "8. Children's Privacy",
    content: [
      { body: 'Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately and we will take steps to delete it.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    ),
    title: '9. Third-Party Links',
    content: [
      { body: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: '10. Changes to This Policy',
    content: [
      { body: 'We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this Policy periodically to stay informed about how we protect your information.' },
    ],
  },

]

/* ── Animated hero visual ─────────────────────────────────────────────────── */
function PrivacyHeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: 320 }}>
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: 280, height: 280,
          border: '1px dashed rgba(201,169,110,0.25)',
          borderRadius: '50%',
        }}
      />
      {/* Inner rotating ring (opposite) */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: 200, height: 200,
          border: '1px solid rgba(201,169,110,0.15)',
          borderRadius: '50%',
        }}
      />

      {/* Orbiting dots */}
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: i * 0.4 }}
          style={{ position: 'absolute', width: 280, height: 280 }}
        >
          <div style={{
            position: 'absolute',
            top: '50%', left: '50%',
            width: i % 2 === 0 ? 6 : 4,
            height: i % 2 === 0 ? 6 : 4,
            borderRadius: '50%',
            background: i % 2 === 0 ? '#C9A96E' : 'rgba(201,169,110,0.5)',
            transform: `rotate(${deg}deg) translateY(-140px) translateX(-50%)`,
          }} />
        </motion.div>
      ))}

      {/* Center shield */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: 110, height: 110,
          background: 'linear-gradient(135deg, rgba(201,169,110,0.2) 0%, rgba(201,169,110,0.08) 100%)',
          border: '1px solid rgba(201,169,110,0.4)',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', zIndex: 2,
        }}
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9 12 11 14 15 10"/>
          </svg>
        </motion.div>
      </motion.div>

      {/* Floating data chips */}
      {[
        { label: 'Encrypted', icon: '🔒', top: '8%', right: '12%', delay: 0.3 },
        { label: 'No Tracking', icon: '🚫', bottom: '14%', left: '8%', delay: 0.5 },
        { label: 'GDPR Ready', icon: '✅', top: '55%', right: '5%', delay: 0.7 },
      ].map((chip) => (
        <motion.div
          key={chip.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: chip.delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'absolute',
            top: chip.top, bottom: chip.bottom,
            left: chip.left, right: chip.right,
          }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5 + Math.random(), repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 2 }}
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(201,169,110,0.25)',
              backdropFilter: 'blur(8px)',
              borderRadius: 8,
              padding: '6px 12px',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            <span style={{ fontSize: 13 }}>{chip.icon}</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(250,250,248,0.75)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
              {chip.label}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

/* ── Key highlights strip ─────────────────────────────────────────────────── */
const highlights = [
  { icon: '🔒', label: 'Data Encrypted', sub: 'Always in transit' },
  { icon: '🚫', label: 'Never Sold', sub: 'Your info stays yours' },
  { icon: '✉️', label: 'Opt-Out Anytime', sub: 'No lock-in' },
  { icon: '📋', label: 'GDPR Aligned', sub: 'Rights respected' },
]

/* ── Main component ───────────────────────────────────────────────────────── */
export default function PrivacyPolicy({ onContact }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Privacy Policy | Phtnex</title>
        <meta name="description" content="Read the Phtnex Privacy Policy to learn how we collect, use, and protect your personal data when you use our website and services." />
      </Helmet>

      {/* ── Sticky top bar ── */}
      <header className="border-b border-border bg-surface/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300 group">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>
            <Link to="/" className="font-display text-xl font-semibold text-ink tracking-tight hover:opacity-70 transition-opacity duration-300">
              Pht<span className="text-gold">nex</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="bg-ink overflow-hidden" style={{ minHeight: 420 }}>
        {/* Subtle grid bg */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        <div className="container-main relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
            {/* Left: text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
              >
                <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid rgba(201,169,110,0.4)', background: 'rgba(201,169,110,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <span className="section-label text-gold">Legal · Privacy</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="font-display text-4xl lg:text-5xl font-semibold text-surface leading-tight mb-5"
              >
                Privacy <span className="italic text-gold">Policy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="text-base text-surface/60 leading-relaxed mb-8 max-w-md"
              >
                We respect your privacy and are committed to protecting your personal information. Here's exactly how we handle your data.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                className="flex items-center gap-3"
              >
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#34A853' }} />
                <span className="text-xs text-surface/50 font-medium tracking-wide">Last updated: September 2026</span>
              </motion.div>
            </div>

            {/* Right: animated visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex items-center justify-center"
              style={{ height: 340 }}
            >
              <PrivacyHeroVisual />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Key highlights strip ── */}
      <div className="bg-surface-2 border-b border-border">
        <div className="container-main py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div style={{ fontSize: 20, lineHeight: 1, marginTop: 2 }}>{h.icon}</div>
                <div>
                  <p className="text-sm font-semibold text-ink">{h.label}</p>
                  <p className="text-xs text-ink-muted mt-0.5">{h.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Intro ── */}
      <div className="container-main py-12 border-b border-border">
        <p className="text-base lg:text-lg text-ink-muted leading-relaxed max-w-3xl">
          At Phtnex, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data you share with us when you visit our website or use our services.
        </p>
      </div>

      {/* ── Sections ── */}
      <div className="container-main py-16 lg:py-24">
        <div className="max-w-3xl flex flex-col gap-0">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-6 py-10 border-b border-border last:border-b-0"
            >
              {/* Icon column */}
              <div className="flex-shrink-0 mt-0.5">
                <div style={{
                  width: 40, height: 40,
                  border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)',
                  background: 'rgba(201,169,110,0.04)',
                  flexShrink: 0,
                }}>
                  {section.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2 className="font-display text-xl lg:text-2xl font-semibold text-ink mb-4">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-4">
                  {section.content.map((item, j) => (
                    <div key={j}>
                      {item.subtitle && (
                        <h3 className="text-sm font-semibold text-ink mb-2 tracking-wide">{item.subtitle}</h3>
                      )}
                      <p className="text-sm lg:text-base text-ink-muted leading-relaxed">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CTA strip before footer ── */}
      <div className="bg-ink">
        <div className="container-main py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="w-10 h-0.5 bg-gold mb-5" />
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-surface mb-2">
                Questions about your data?
              </h2>
              <p className="text-sm text-surface/60">
                We're happy to walk you through anything in this policy.
              </p>
            </div>
            <button
              onClick={onContact}
              className="btn-primary flex-shrink-0 text-xs tracking-widest uppercase px-7 py-3.5"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div className="border-t border-border bg-surface-2">
        <div className="container-main py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">© 2026 Phtnex. All rights reserved.</p>
          <Link to="/" className="text-xs text-ink-muted hover:text-ink transition-colors duration-300 underline underline-offset-4">
            ← Return to phtnex.com
          </Link>
        </div>
      </div>
    </div>
  )
}
