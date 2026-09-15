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
    { label: 'FAQs', href: '#', page: 'faqs' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
}

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
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
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
      </svg>
    ),
  },
]

export default function Footer({ onNavigate }) {
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
              Helping travel agencies, consultants, and local businesses in Pakistan get found online and attract more customers in exactly 7 days.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
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
                    {link.page ? (
                      <button
                        onClick={() => onNavigate(link.page)}
                        className="text-sm text-surface/60 hover:text-surface transition-colors duration-300"
                      >
                        {link.label}
                      </button>
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
            <button
              onClick={() => onNavigate('privacy')}
              className="text-xs text-surface/40 hover:text-surface/70 transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="text-xs text-surface/40 hover:text-surface/70 transition-colors duration-300"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
