import { Link } from 'react-router-dom'

const footerLinks = {
  Services: [
    { label: '5-Page Website', href: '#services' },
    { label: 'Google Review Strategy', href: '#services' },
    { label: 'Social Media & Content', href: '#services' },
    { label: '7-Day Complete Launch', href: '#pricing' },
  ],
  Company: [
    { label: 'About', href: '#why-us' },
    { label: 'Our Work', href: '#work' },
    { label: 'Process', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  Resources: [
    { label: 'Blog', to: '/blog' },
    { label: 'FAQs', to: '/faqs' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
}

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/phtnex/',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/phtnex?stkn=MzR4YTdlN3I5MG4y&utm_source=qr',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/196bu2MsPs/?mibextid=wwXIfr',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 8h2V4h-2c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    if (href === '#') return
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="bg-ink text-surface/80">
      {/* Main Footer */}
      <div className="container-main py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="font-display text-2xl font-semibold text-surface tracking-tight block mb-4">
              Pht<span className="text-gold">nex</span>
            </a>
            <p className="text-sm text-surface/60 leading-relaxed max-w-xs">
              Helping travel agencies, consultants, and local businesses worldwide get found online and attract more customers in exactly 7 days.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-surface/20 text-surface/50 hover:text-surface hover:border-surface/50 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <h3 className="section-label text-surface/40 mb-5">{col}</h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="text-sm text-surface/60 hover:text-surface transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    ) : link.href === '#' ? (
                      <span className="text-sm text-surface/40 flex items-center gap-2">
                        {link.label}
                        {link.comingSoon && (
                          <span className="text-[9px] font-semibold tracking-widest uppercase bg-surface/10 text-surface/40 px-1.5 py-0.5">
                            Soon
                          </span>
                        )}
                      </span>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-sm text-surface/60 hover:text-surface transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-surface/10">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface/40">
            © 2026 Phtnex. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="text-xs text-surface/40 hover:text-surface/70 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-xs text-surface/40 hover:text-surface/70 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
