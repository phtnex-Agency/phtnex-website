import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', to: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (e, link) => {
    setMenuOpen(false)
    if (link.to) return // Let Link handle React Router navigation

    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const target = document.querySelector(link.href)
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      const target = document.querySelector(link.href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-md border-b border-border shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="font-display text-2xl lg:text-3xl font-semibold text-ink tracking-tight hover:opacity-70 transition-opacity duration-300"
              aria-label="Phtnex Home"
            >
              Pht<span className="text-gold">nex</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-ink-muted hover:text-ink transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className="text-sm text-ink-muted hover:text-ink transition-colors duration-300 font-medium"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, { href: '#contact' })}
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
        className={`fixed inset-0 z-40 bg-surface flex flex-col transition-all duration-500 lg:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container-main flex flex-col h-full pt-24 pb-12">
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map((link, i) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`font-display text-4xl font-medium text-ink py-3 border-b border-border hover:pl-3 transition-all duration-300 ${
                    menuOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`font-display text-4xl font-medium text-ink py-3 border-b border-border hover:pl-3 transition-all duration-300 ${
                    menuOpen ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { href: '#contact' })}
            className="btn-primary text-center mt-8 py-4 text-sm tracking-widest uppercase"
          >
            Book a Free Discovery Call
          </a>
        </div>
      </div>
    </>
  )
}
