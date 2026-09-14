import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

/* ── Section data ─────────────────────────────────────────────────────────── */
const sections = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
      </svg>
    ),
    title: '1. Acceptance of Terms',
    content: [
      { body: 'By accessing or using the Phtnex website (phtnex.com) or engaging our services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or services. These Terms apply to all visitors, clients, and others who access or use our services.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: '2. Services',
    content: [
      { body: 'Phtnex provides website design, development, local SEO, and digital presence services primarily for US-based home services and trade businesses. The specific scope, deliverables, timeline, and pricing for each engagement are agreed upon prior to commencement and confirmed in a separate project agreement or invoice.' },
      { body: 'We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice, although we will always endeavour to communicate significant changes to active clients.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
    title: '3. Project Agreements & Payment',
    content: [
      { subtitle: 'Payment Terms', body: 'All project fees are outlined in your project proposal or invoice. A deposit may be required before work commences, with the balance due upon completion or as otherwise specified. Payment is accepted via the methods detailed in your invoice.' },
      { subtitle: 'Late Payments', body: 'We reserve the right to pause or withhold delivery of work if payment is not received by the agreed due date. Outstanding balances may attract a late fee as specified in your project agreement.' },
      { subtitle: 'Refund Policy', body: 'Due to the time-sensitive and custom nature of our services, deposits are generally non-refundable once work has commenced. If you wish to cancel a project, please contact us as soon as possible and we will discuss a fair resolution based on the work completed to date.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: '4. Client Responsibilities',
    content: [
      { body: 'To enable us to deliver your project on time, you agree to: provide timely feedback and approvals; supply all required materials (such as logos, photos, and content) promptly; designate a single point of contact for project communication; and ensure all information and materials you provide do not infringe any third-party rights.' },
      { body: 'Delays caused by late client responses or missing materials may result in project timeline extensions. We are not liable for delays that arise from client-side inaction.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: '5. Intellectual Property',
    content: [
      { subtitle: 'Your Content', body: 'You retain full ownership of all content, logos, images, and materials you provide to us. By providing these materials, you grant Phtnex a licence to use them solely for the purpose of completing your project.' },
      { subtitle: 'Our Work Product', body: 'Upon receipt of full payment, all custom design and development deliverables created for your project become your property. We retain the right to display completed work in our portfolio and marketing materials unless you explicitly request otherwise in writing.' },
      { subtitle: 'Third-Party Assets', body: 'Where third-party fonts, stock images, plugins, or other licensed assets are used, usage is subject to their respective licences. We will inform you of any such assets used in your project.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: '6. Revisions & Changes',
    content: [
      { body: 'Each project includes a defined number of revision rounds as specified in your project agreement. Requests for changes that exceed the agreed scope may be quoted and charged as additional work. Significant scope changes requested after project commencement may affect the timeline and total cost.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: '7. Warranties & Disclaimers',
    content: [
      { body: 'Phtnex warrants that our services will be performed with reasonable skill and care. However, we do not guarantee specific business outcomes such as rankings, leads, or revenue increases, as these depend on many factors outside our control.' },
      { body: 'Our website and services are provided "as is" and "as available" without warranties of any kind, either express or implied, except as required by law.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
    title: '8. Limitation of Liability',
    content: [
      { body: 'To the maximum extent permitted by applicable law, Phtnex shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of our services, even if we have been advised of the possibility of such damages.' },
      { body: 'Our total liability for any claim arising from our services shall not exceed the total fees paid by you to Phtnex for the specific project giving rise to the claim.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: '9. Confidentiality',
    content: [
      { body: 'Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project. This obligation does not apply to information that is publicly known, independently developed, or required to be disclosed by law.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
      </svg>
    ),
    title: '10. Termination',
    content: [
      { body: 'Either party may terminate a project engagement by providing written notice. In the event of termination, you agree to pay for all work completed up to the date of termination. We reserve the right to terminate immediately if you breach any of these Terms.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: '11. Governing Law',
    content: [
      { body: 'These Terms shall be governed by and construed in accordance with the laws of the United States. Any disputes arising from these Terms or our services shall be resolved through good-faith negotiation before pursuing any formal legal remedy.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    title: '12. Changes to These Terms',
    content: [
      { body: 'We may update these Terms of Service from time to time. Any changes will be posted on this page with a revised "Last Updated" date. Continued use of our website or services after such changes constitutes your acceptance of the revised Terms.' },
    ],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: '13. Contact',
    content: [
      { body: 'If you have any questions about these Terms of Service, please reach out to us at: hello@phtnex.com' },
    ],
  },
]

/* ── Animated hero visual ─────────────────────────────────────────────────── */
function TermsHeroVisual() {
  const lines = [
    { width: '80%', delay: 0.1 },
    { width: '60%', delay: 0.2 },
    { width: '90%', delay: 0.3 },
    { width: '50%', delay: 0.4 },
    { width: '70%', delay: 0.5 },
    { width: '85%', delay: 0.6 },
    { width: '40%', delay: 0.7 },
  ]

  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: 340 }}>
      {/* Rotating squares */}
      <motion.div
        animate={{ rotate: 45 }}
        transition={{ duration: 0 }}
        style={{ position: 'absolute', width: 240, height: 240, border: '1px solid rgba(201,169,110,0.12)' }}
      />
      <motion.div
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', width: 180, height: 180, border: '1px dashed rgba(201,169,110,0.2)' }}
      />

      {/* Document card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: 200,
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(201,169,110,0.25)',
          borderRadius: 12,
          padding: '20px 18px',
          position: 'relative', zIndex: 2,
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Gold top bar */}
        <div style={{ width: '40%', height: 2, background: 'linear-gradient(90deg, #C9A96E, transparent)', marginBottom: 14, borderRadius: 1 }} />

        {/* Animated text lines */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: line.width, opacity: 1 }}
              transition={{ duration: 0.6, delay: line.delay, ease: [0.16, 1, 0.3, 1] }}
              style={{
                height: i === 0 ? 7 : 4,
                borderRadius: 2,
                background: i === 0
                  ? 'rgba(201,169,110,0.6)'
                  : 'rgba(250,250,248,0.12)',
              }}
            />
          ))}
        </div>

        {/* Signature line */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          style={{ marginTop: 20, paddingTop: 12, borderTop: '1px solid rgba(201,169,110,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ width: 50, height: 2, background: 'rgba(201,169,110,0.5)', marginBottom: 4, borderRadius: 1 }} />
            <div style={{ fontSize: 8, color: 'rgba(250,250,248,0.35)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em' }}>SIGNED</div>
          </div>
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <polyline points="9 12 11 14 15 10"/>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating badges */}
      {[
        { label: 'No Lock-in', icon: '🔓', top: '10%', left: '5%', delay: 0.6 },
        { label: 'Fair Terms', icon: '⚖️', bottom: '12%', right: '8%', delay: 0.8 },
        { label: 'US Law', icon: '🇺🇸', top: '60%', left: '3%', delay: 1.0 },
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
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut', delay: Math.random() * 1.5 }}
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(201,169,110,0.2)',
              backdropFilter: 'blur(8px)',
              borderRadius: 8,
              padding: '6px 12px',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
          >
            <span style={{ fontSize: 13 }}>{chip.icon}</span>
            <span style={{ fontSize: 10, fontWeight: 600, color: 'rgba(250,250,248,0.7)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
              {chip.label}
            </span>
          </motion.div>
        </motion.div>
      ))}

      {/* Corner dots */}
      {[
        { top: 0, left: 0 }, { top: 0, right: 0 },
        { bottom: 0, left: 0 }, { bottom: 0, right: 0 },
      ].map((pos, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          style={{
            position: 'absolute', ...pos,
            width: 4, height: 4, borderRadius: '50%',
            background: 'rgba(201,169,110,0.4)',
          }}
        />
      ))}
    </div>
  )
}

/* ── Key highlights ───────────────────────────────────────────────────────── */
const highlights = [
  { icon: '🤝', label: 'No Long-Term Contracts', sub: 'Project by project' },
  { icon: '💼', label: 'Clear Scope', sub: 'Agreed before we start' },
  { icon: '🎨', label: 'You Own Everything', sub: 'IP transfers on payment' },
  { icon: '🚀', label: '7-Day Delivery', sub: 'Guaranteed timeline' },
]

/* ── Main component ───────────────────────────────────────────────────────── */
export default function TermsOfService({ onBack, onContact }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Terms of Service | Phtnex</title>
        <meta name="description" content="Read the Phtnex Terms of Service to understand the rules, guidelines, and agreements for using our web design and local SEO services." />
      </Helmet>

      {/* ── Sticky top bar ── */}
      <header className="border-b border-border bg-surface/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button onClick={onBack} className="flex items-center gap-2 text-sm text-ink-muted hover:text-ink transition-colors duration-300 group">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:-translate-x-1">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </button>
            <button onClick={onBack} className="font-display text-xl font-semibold text-ink tracking-tight hover:opacity-70 transition-opacity duration-300">
              Pht<span className="text-gold">nex</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <div className="bg-ink overflow-hidden relative" style={{ minHeight: 420 }}>
        {/* Grid background */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
          backgroundImage: 'linear-gradient(rgba(201,169,110,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />

        {/* Glow */}
        <div style={{
          position: 'absolute', bottom: -80, right: -80,
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
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
                <div style={{ width: 32, height: 32, border: '1px solid rgba(201,169,110,0.4)', background: 'rgba(201,169,110,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
                <span className="section-label text-gold">Legal · Terms</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="font-display text-4xl lg:text-5xl font-semibold text-surface leading-tight mb-5"
              >
                Terms of <span className="italic text-gold">Service</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="text-base text-surface/60 leading-relaxed mb-8 max-w-md"
              >
                Clear, fair terms that protect both you and us. No legal jargon — just straightforward rules for how we work together.
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
            >
              <TermsHeroVisual />
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
          Please read these Terms of Service carefully before using Phtnex's website or engaging our services. By proceeding, you confirm that you have read, understood, and agreed to be bound by these Terms.
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

      {/* ── CTA strip ── */}
      <div className="bg-ink">
        <div className="container-main py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="w-10 h-0.5 bg-gold mb-5" />
              <h2 className="font-display text-2xl lg:text-3xl font-semibold text-surface mb-2">
                Questions about these terms?
              </h2>
              <p className="text-sm text-surface/60">
                We're happy to clarify anything before you get started.
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
          <button onClick={onBack} className="text-xs text-ink-muted hover:text-ink transition-colors duration-300 underline underline-offset-4">
            ← Return to phtnex.com
          </button>
        </div>
      </div>
    </div>
  )
}
