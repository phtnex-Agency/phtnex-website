import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

/* ── Inline SVG icons (20×20 viewBox) ─────────────────── */
const icons = {
  website:    <><rect x="2" y="3" width="16" height="13" rx="1" stroke="currentColor" strokeWidth="1.2"/><path d="M2 7h16" stroke="currentColor" strokeWidth="1.2"/><path d="M5 10h4M5 13h6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/><rect x="11" y="9.5" width="5" height="4" rx=".5" stroke="currentColor" strokeWidth="1"/></>,
  maps:       <><path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.2"/><circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.1"/></>,
  social:     <><circle cx="10" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.2"/><circle cx="4" cy="15" r="2" stroke="currentColor" strokeWidth="1.2"/><circle cx="16" cy="15" r="2" stroke="currentColor" strokeWidth="1.2"/><path d="M10 7.2L4.3 13M10 7.2L15.7 13" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></>,
  seo:        <><circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.2"/><path d="M12.5 12.5L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M6 8.5h5M8.5 6v5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/></>,
  automation: <><rect x="2" y="7" width="5" height="6" rx="1" stroke="currentColor" strokeWidth="1.1"/><rect x="13" y="7" width="5" height="6" rx="1" stroke="currentColor" strokeWidth="1.1"/><path d="M7 10h6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/><path d="M11 8.5l2 1.5-2 1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></>,
  agent:      <><rect x="4" y="5" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.2"/><circle cx="7.5" cy="10" r="1.2" stroke="currentColor" strokeWidth="1"/><circle cx="12.5" cy="10" r="1.2" stroke="currentColor" strokeWidth="1"/><path d="M7 13c1 1 5 1 6 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/><path d="M8 5V3M12 5V3" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/></>,
  assistant:  <><path d="M3 4h14a1 1 0 011 1v8a1 1 0 01-1 1h-7l-4 3v-3H4a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/><circle cx="7" cy="9" r=".9" fill="currentColor"/><circle cx="10" cy="9" r=".9" fill="currentColor"/><circle cx="13" cy="9" r=".9" fill="currentColor"/></>,
}

const coreServices = [
  { label: 'Website Design',        to: '/website-design',          desc: '5-page site, 7-day delivery',         icon: 'website',    price: '$140' },
  { label: 'Google Maps SEO',       to: '/google-maps-seo',         desc: 'Map Pack ranking & reviews',          icon: 'maps',       price: 'Pack' },
  { label: 'Social Media',          to: '/social-media-management', desc: 'Monthly content & credibility',       icon: 'social',     price: '$150/mo' },
  { label: 'Organic SEO',           to: '/seo',                     desc: 'Technical & content SEO',             icon: 'seo',        price: 'Quote' },
]

const aiServices = [
  { label: 'n8n Automation',        to: '/n8n-automation',          desc: 'Connect tools & automate tasks',      icon: 'automation', price: 'Quote' },
  { label: 'AI Agent Development',  to: '/ai-agents',               desc: 'Autonomous multi-step agents',        icon: 'agent',      price: 'Quote' },
  { label: 'AI Assistant',          to: '/ai-assistant',            desc: '24/7 lead capture & support',         icon: 'assistant',  price: 'Quote' },
]

const NavLink = ({ children, className = '', ...props }) => (
  <a
    {...props}
    className={`nav-link relative text-[13px] font-medium tracking-[0.04em] text-ink-muted hover:text-ink transition-colors duration-300 ${className}`}
  >
    {children}
  </a>
)

const NavRouterLink = ({ children, className = '', ...props }) => (
  <Link
    {...props}
    className={`nav-link relative text-[13px] font-medium tracking-[0.04em] text-ink-muted hover:text-ink transition-colors duration-300 ${className}`}
  >
    {children}
  </Link>
)

export default function Navbar() {
  const [scrolled, setScrolled]               = useState(false)
  const [menuOpen, setMenuOpen]               = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true)
  const navigate  = useNavigate()
  const location  = useLocation()
  const isSubpage = location.pathname !== '/'
  const elevated  = isSubpage || scrolled || servicesDropdown || menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdown(false)
    setMenuOpen(false)
  }, [location.pathname])

  const handleHashNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    setServicesDropdown(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const close = () => setServicesDropdown(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-smooth ${
          elevated
            ? 'bg-surface/80 backdrop-blur-xl border-b border-border/80 shadow-[0_1px_0_rgba(201,169,110,0.12),0_8px_32px_rgba(10,10,10,0.04)]'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        {/* Gold hairline accent when elevated */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent transition-opacity duration-500 ${
            elevated ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="container-main">
          <div
            className={`flex items-center justify-between transition-all duration-500 ease-smooth ${
              elevated ? 'h-[68px] lg:h-[72px]' : 'h-16 lg:h-20'
            }`}
          >

            {/* Logo */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="group relative font-display text-[26px] lg:text-[30px] font-semibold text-ink tracking-tight leading-none"
              aria-label="Phtnex Home"
            >
              Pht<span className="text-gold transition-colors duration-300 group-hover:text-gold-light">nex</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 ease-smooth group-hover:w-full" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <NavLink
                href="#work"
                onClick={(e) => handleHashNav(e, '#work')}
                className="px-3.5 py-2"
              >
                Work
              </NavLink>

              {/* Services trigger */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button
                  className={`nav-link relative text-[13px] font-medium tracking-[0.04em] inline-flex items-center gap-1.5 px-3.5 py-2 transition-colors duration-300 ${
                    servicesDropdown ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                  aria-expanded={servicesDropdown}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <svg
                    width="9" height="5" viewBox="0 0 10 6" fill="none"
                    className={`transition-all duration-300 ${servicesDropdown ? 'rotate-180 text-gold' : 'text-ink-muted'}`}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* ── MEGA MENU ── */}
                <div
                  className={`
                    fixed left-0 right-0 top-[67px] lg:top-[71px]
                    bg-surface/95 backdrop-blur-2xl border-b border-border
                    shadow-[0_24px_64px_-12px_rgba(10,10,10,0.1)]
                    transition-all duration-500 ease-smooth origin-top
                    ${servicesDropdown
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'}
                  `}
                >
                  {/* Gold top accent */}
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

                  <div className="container-main py-8">
                    <div className="grid grid-cols-[1fr_1px_1fr_240px] gap-0 items-start">

                      {/* ── Column 1: Core ── */}
                      <div className="pr-10">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-light mb-4 px-3">
                          Core Services
                        </p>
                        <div className="flex flex-col gap-0.5">
                          {coreServices.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={close}
                              className="group flex items-center gap-3.5 px-3 py-3 hover:bg-surface-2/80 transition-all duration-200"
                            >
                              <span className="flex items-center justify-center w-9 h-9 bg-surface-2 border border-border group-hover:border-gold/40 group-hover:bg-gold/8 transition-all duration-300 text-ink-muted group-hover:text-gold shrink-0">
                                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden>
                                  {icons[item.icon]}
                                </svg>
                              </span>
                              <div className="flex-1 min-w-0">
                                <span className="text-[13px] font-medium text-ink group-hover:text-gold transition-colors duration-200 block leading-tight tracking-wide">
                                  {item.label}
                                </span>
                                <span className="text-[11px] text-ink-light block truncate leading-tight mt-1">
                                  {item.desc}
                                </span>
                              </div>
                              <span className="text-[10px] text-ink-light/60 font-medium tracking-wider shrink-0 group-hover:text-gold/80 transition-colors duration-200">
                                {item.price}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* ── Divider ── */}
                      <div className="w-px bg-gradient-to-b from-transparent via-border to-transparent self-stretch" />

                      {/* ── Column 2: AI & Automation ── */}
                      <div className="pl-8 pr-10">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-light mb-4 px-3">
                          Automation &amp; AI
                        </p>
                        <div className="flex flex-col gap-0.5">
                          {aiServices.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={close}
                              className="group flex items-center gap-3.5 px-3 py-3 hover:bg-surface-2/80 transition-all duration-200"
                            >
                              <span className="flex items-center justify-center w-9 h-9 bg-surface-2 border border-border group-hover:border-gold/40 group-hover:bg-gold/8 transition-all duration-300 text-ink-muted group-hover:text-gold shrink-0">
                                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden>
                                  {icons[item.icon]}
                                </svg>
                              </span>
                              <div className="flex-1 min-w-0">
                                <span className="text-[13px] font-medium text-ink group-hover:text-gold transition-colors duration-200 block leading-tight tracking-wide">
                                  {item.label}
                                </span>
                                <span className="text-[11px] text-ink-light block truncate leading-tight mt-1">
                                  {item.desc}
                                </span>
                              </div>
                              <span className="text-[10px] text-ink-light/60 font-medium tracking-wider shrink-0 group-hover:text-gold/80 transition-colors duration-200">
                                {item.price}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* ── Column 3: CTA panel ── */}
                      <div className="border-l border-border pl-8 self-stretch flex flex-col justify-between ml-2">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-light mb-4">
                            Quick Access
                          </p>
                          <Link
                            to="/services"
                            onClick={close}
                            className="group flex items-center gap-2 mb-3 py-1"
                          >
                            <span className="text-[13px] font-medium text-ink group-hover:text-gold transition-colors duration-200 tracking-wide">
                              All Services
                            </span>
                            <span className="text-gold text-xs opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200">→</span>
                          </Link>
                          <Link
                            to="/pricing"
                            onClick={close}
                            className="group flex items-center gap-2 py-1"
                          >
                            <span className="text-[13px] font-medium text-ink-muted group-hover:text-gold transition-colors duration-200 tracking-wide">
                              Pricing
                            </span>
                            <span className="text-ink-light text-xs group-hover:text-gold group-hover:translate-x-0.5 transition-all duration-200">→</span>
                          </Link>
                        </div>
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="text-xs text-ink-muted leading-relaxed mb-4">
                            Not sure which service fits?
                          </p>
                          <a
                            href="#contact"
                            onClick={(e) => handleHashNav(e, '#contact')}
                            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink bg-gold px-5 py-3 hover:bg-gold-light transition-colors duration-300"
                          >
                            Book a Free Call
                            <span aria-hidden>→</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Bottom strip */}
                  <div className="border-t border-border bg-surface-2/60">
                    <div className="container-main flex items-center justify-between py-3">
                      <p className="text-[11px] text-ink-light tracking-wide">
                        <span className="font-medium text-ink-muted">7 services</span>
                        <span className="mx-2 text-border-dark">·</span>
                        Web · Local SEO · Social · SEO · Automation · AI
                      </p>
                      <Link
                        to="/services"
                        onClick={close}
                        className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gold hover:text-gold-light transition-colors duration-300"
                      >
                        Full overview →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <NavRouterLink to="/pricing" className="px-3.5 py-2">
                Pricing
              </NavRouterLink>
              <NavLink href="#why-us" onClick={(e) => handleHashNav(e, '#why-us')} className="px-3.5 py-2">
                Why Us
              </NavLink>
              <NavLink href="#testimonials" onClick={(e) => handleHashNav(e, '#testimonials')} className="px-3.5 py-2">
                Testimonials
              </NavLink>
              <NavRouterLink to="/blog" className="px-3.5 py-2">
                Blog
              </NavRouterLink>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="#contact"
                onClick={(e) => handleHashNav(e, '#contact')}
                className="group relative inline-flex items-center gap-2 overflow-hidden bg-ink text-surface text-[11px] font-semibold tracking-[0.14em] uppercase px-6 py-3 transition-all duration-300 hover:bg-accent-hover"
              >
                <span className="relative z-10">Book a Call</span>
                <span className="relative z-10 inline-block transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden>→</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative flex items-center justify-center w-10 h-10 -mr-2"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span className="sr-only">{menuOpen ? 'Close' : 'Menu'}</span>
              <span className="relative w-5 h-3.5 flex flex-col justify-between">
                <span className={`block h-px w-full bg-ink origin-center transition-all duration-500 ease-smooth ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                <span className={`block h-px bg-ink transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-full opacity-100'}`} />
                <span className={`block h-px w-full bg-ink origin-center transition-all duration-500 ease-smooth ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div
        className={`fixed inset-0 z-40 bg-surface/98 backdrop-blur-2xl flex flex-col transition-all duration-500 ease-smooth lg:hidden overflow-y-auto ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-main flex flex-col min-h-full pt-24 pb-12">
          <nav className="flex flex-col flex-1">
            <a
              href="#work"
              onClick={(e) => handleHashNav(e, '#work')}
              className="font-display text-[28px] font-medium text-ink py-4 border-b border-border/60 hover:text-gold transition-colors duration-300"
            >
              Work
            </a>

            {/* Mobile Services */}
            <div className="border-b border-border/60 py-4">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between font-display text-[28px] font-medium text-ink text-left"
                aria-expanded={mobileServicesOpen}
              >
                <span>Services</span>
                <span
                  className={`flex items-center justify-center w-7 h-7 text-sm text-gold border border-gold/30 transition-transform duration-300 ${
                    mobileServicesOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-smooth ${
                  mobileServicesOpen ? 'max-h-[600px] opacity-100 mt-5' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col gap-0 border-l border-gold/40 pl-5">
                  <Link
                    to="/services"
                    onClick={() => setMenuOpen(false)}
                    className="text-[10px] uppercase tracking-[0.16em] font-semibold text-gold py-2 mb-1"
                  >
                    All Services Overview →
                  </Link>

                  <p className="text-[9px] uppercase tracking-[0.18em] text-ink-light font-semibold mt-3 mb-2">Core</p>
                  {coreServices.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 py-2.5 text-ink-muted hover:text-ink transition-colors duration-200"
                    >
                      <span className="flex items-center justify-center w-7 h-7 bg-surface-2 border border-border text-ink-muted shrink-0">
                        <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden>
                          {icons[item.icon]}
                        </svg>
                      </span>
                      <span className="text-[15px] font-medium tracking-wide">{item.label}</span>
                    </Link>
                  ))}

                  <p className="text-[9px] uppercase tracking-[0.18em] text-ink-light font-semibold mt-4 mb-2">Automation &amp; AI</p>
                  {aiServices.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 py-2.5 text-ink-muted hover:text-ink transition-colors duration-200"
                    >
                      <span className="flex items-center justify-center w-7 h-7 bg-surface-2 border border-border text-ink-muted shrink-0">
                        <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5" aria-hidden>
                          {icons[item.icon]}
                        </svg>
                      </span>
                      <span className="text-[15px] font-medium tracking-wide">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/pricing" onClick={() => setMenuOpen(false)} className="font-display text-[28px] font-medium text-ink py-4 border-b border-border/60 hover:text-gold transition-colors duration-300">
              Pricing
            </Link>
            <a href="#why-us" onClick={(e) => handleHashNav(e, '#why-us')} className="font-display text-[28px] font-medium text-ink py-4 border-b border-border/60 hover:text-gold transition-colors duration-300">
              Why Us
            </a>
            <a href="#testimonials" onClick={(e) => handleHashNav(e, '#testimonials')} className="font-display text-[28px] font-medium text-ink py-4 border-b border-border/60 hover:text-gold transition-colors duration-300">
              Testimonials
            </a>
            <Link to="/blog" onClick={() => setMenuOpen(false)} className="font-display text-[28px] font-medium text-ink py-4 border-b border-border/60 hover:text-gold transition-colors duration-300">
              Blog
            </Link>
          </nav>

          <div className="mt-10 pt-6 border-t border-border">
            <a
              href="#contact"
              onClick={(e) => handleHashNav(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full bg-ink text-surface py-4 text-[12px] font-semibold tracking-[0.14em] uppercase hover:bg-accent-hover transition-colors duration-300"
            >
              Book a Free Discovery Call
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
