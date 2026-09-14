import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import FeaturedWork from './components/sections/FeaturedWork'
import Services from './components/sections/Services'
import WhyUs from './components/sections/WhyUs'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import ContactCTA from './components/sections/ContactCTA'
import WhatsAppButton from './components/ui/WhatsAppButton'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import FAQPage from './pages/FAQPage'

export default function App() {
  const [page, setPage] = useState('home') // 'home' | 'privacy' | 'terms' | 'faqs'

  // Expose navigate for cross-page links inside sub-pages
  useEffect(() => {
    window._phtnexNavigate = setPage
    return () => { delete window._phtnexNavigate }
  }, [])

  const goHome = () => {
    setPage('home')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const goContact = () => {
    setPage('home')
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  if (page === 'privacy') return <PrivacyPolicy onBack={goHome} onContact={goContact} />
  if (page === 'terms')   return <TermsOfService onBack={goHome} onContact={goContact} />
  if (page === 'faqs')    return <FAQPage onBack={goHome} onContact={goContact} />

  return (
    <div className="bg-surface min-h-screen">
      <Helmet>
        <title>Phtnex — Local SEO & Web Design for Trades in Pakistan</title>
        <meta name="description" content="We build high-converting websites, manage Google Maps reviews, and optimize local SEO for travel agencies, consultants, and trade businesses across Pakistan. 7-Day Launch." />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <FeaturedWork />
        <Services />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <ContactCTA />
      </main>
      <Footer onNavigate={setPage} />
      <WhatsAppButton />
    </div>
  )
}
