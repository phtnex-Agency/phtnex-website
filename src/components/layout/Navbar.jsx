import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const serviceItems = [
  { label: 'Website Design', to: '/website-design', desc: 'Custom 5-page fast sites ($140)' },
  { label: 'Google Maps SEO', to: '/google-maps-seo', desc: 'Map Pack ranking & review automation' },
  { label: 'Social Media Management', to: '/social-media-management', desc: 'Monthly content & brand credibility' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const isSubpage = location.pathname !== '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleHashNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    setServicesDropdown(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const target = document.querySelector(href)
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isSubpage || scrolled || servicesDropdown
            ? 'bg-surface border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl lg:text-3xl font-semibold text-ink tracking-tight hover:opacity-70 transition-opacity duration-300"
              aria-label="Phtnex Home"
            >
              Pht<span className="text-gold">nex</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              <a
                href="#work"
                onClick={(e) => handleHashNav(e, '#work')}
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-300 font-medium"
              >
                Work
              </a>

              {/* Services Dropdown Item */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <button
                  onClick={(e) => handleHashNav(e, '#services')}
                  className="text-sm text-ink-muted hover:text-ink transition-colors duration-300 font-medium inline-flex items-center gap-1 py-2"
                >
                  <span>Services</span>
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    className={`transition-transform duration-300 ${servicesDropdown ? 'rotate-180 text-gold' : 'text-ink-muted'}`}
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-full left-0 w-72 bg-surface-2 border border-border shadow-xl p-3 transition-all duration-300 origin-top-left ${
                    servicesDropdown
                      ? 'opacity-100 scale-100 pointer-events-auto'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  <a
                    href="#services"
                    onClick={(e) => handleHashNav(e, '#services')}
                    className="block p-2.5 hover:bg-surface border-b border-border/60 transition-colors group mb-1"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold block">
                      Overview
                    </span>
                    <span className="text-sm font-medium text-ink group-hover:text-gold transition-colors">
                      All Services &amp; 3 Pillars →
                    </span>
                  </a>

                  {serviceItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setServicesDropdown(false)}
                      className="block p-2.5 hover:bg-surface transition-colors group"
                    >
                      <span className="text-sm font-medium text-ink group-hover:text-gold transition-colors block">
                        {item.label}
                      </span>
                      <span className="text-xs text-ink-muted block mt-0.5">
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <a
                href="#why-us"
                onClick={(e) => handleHashNav(e, '#why-us')}
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-300 font-medium"
              >
                Why Us
              </a>

              <a
                href="#testimonials"
                onClick={(e) => handleHashNav(e, '#testimonials')}
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-300 font-medium"
              >
                Testimonials
              </a>

              <Link
                to="/pricing"
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-300 font-medium"
              >
                Pricing
              </Link>

              {/* Blog Link */}
              <Link
                to="/blog"
                className="text-sm text-ink-muted hover:text-ink transition-colors duration-300 font-medium"
              >
                Blog
              </Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                onClick={(e) => handleHashNav(e, '#contact')}
                className="btn-primary text-xs tracking-widest uppercase px-5 py-2.5"
              >
                Book a Call
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 -mr-2 group"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-px bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-surface flex flex-col transition-all duration-500 lg:hidden overflow-y-auto ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-main flex flex-col h-full pt-24 pb-12">
          <nav className="flex flex-col gap-2 flex-1">
            <a
              href="#work"
              onClick={(e) => handleHashNav(e, '#work')}
              className="font-display text-2xl font-medium text-ink py-2 border-b border-border"
            >
              Work
            </a>

            {/* Mobile Services Collapsible Group */}
            <div className="border-b border-border py-2">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between font-display text-2xl font-medium text-ink text-left py-1"
              >
                <span>Services</span>
                <span className="text-sm text-gold">{mobileServicesOpen ? '−' : '+'}</span>
              </button>

              {mobileServicesOpen && (
                <div className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-gold/30">
                  <a
                    href="#services"
                    onClick={(e) => handleHashNav(e, '#services')}
                    className="text-xs uppercase tracking-wider font-semibold text-gold py-1"
                  >
                    All Services Overview →
                  </a>
                  {serviceItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="text-base text-ink-muted hover:text-ink font-medium py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#why-us"
              onClick={(e) => handleHashNav(e, '#why-us')}
              className="font-display text-2xl font-medium text-ink py-2 border-b border-border"
            >
              Why Us
            </a>

            <a
              href="#testimonials"
              onClick={(e) => handleHashNav(e, '#testimonials')}
              className="font-display text-2xl font-medium text-ink py-2 border-b border-border"
            >
              Testimonials
            </a>

            <Link
              to="/pricing"
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl font-medium text-ink py-2 border-b border-border"
            >
              Pricing
            </Link>

            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              className="font-display text-2xl font-medium text-ink py-2 border-b border-border"
            >
              Blog
            </Link>
          </nav>

          <a
            href="#contact"
            onClick={(e) => handleHashNav(e, '#contact')}
            className="btn-primary text-center mt-6 py-4 text-sm tracking-widest uppercase"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </div>
    </>
  )
}
