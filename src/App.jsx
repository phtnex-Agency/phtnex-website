import { Helmet } from 'react-helmet-async'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
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

function HomePage() {
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
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

function ContactRoute({ children: Page }) {
  const navigate = useNavigate()

  const goContact = () => {
    navigate('/')
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
  }

  return <Page onContact={goContact} />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<ContactRoute>{PrivacyPolicy}</ContactRoute>} />
        <Route path="/terms" element={<ContactRoute>{TermsOfService}</ContactRoute>} />
        <Route path="/faqs" element={<ContactRoute>{FAQPage}</ContactRoute>} />
      </Routes>
    </BrowserRouter>
  )
}
