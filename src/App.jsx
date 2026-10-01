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
import WebsiteDesignPage from './pages/WebsiteDesignPage'
import GoogleMapsSEOPage from './pages/GoogleMapsSEOPage'
import SocialMediaPage from './pages/SocialMediaPage'
import BlogListPage from './pages/BlogListPage'
import BlogPostPage from './pages/BlogPostPage'
import PricingPage from './pages/PricingPage'
import SeoPage from './pages/SeoPage'
import N8nAutomationPage from './pages/N8nAutomationPage'
import AiAgentsPage from './pages/AiAgentsPage'
import AiAssistantPage from './pages/AiAssistantPage'
import ServicesOverviewPage from './pages/ServicesOverviewPage'

function HomePage() {
  return (
    <div className="bg-surface min-h-screen">
      <Helmet>
        <title>Phtnex — Web Design &amp; Google Maps SEO for Small Business</title>
        <meta name="description" content="We build high-converting websites, manage Google Maps reviews, and optimize local SEO for travel agencies, consultants, and trade businesses worldwide. 7-Day Launch." />
        <link rel="canonical" href="https://www.phtnex.com/" />
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

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/privacy" element={<ContactRoute>{PrivacyPolicy}</ContactRoute>} />
      <Route path="/terms" element={<ContactRoute>{TermsOfService}</ContactRoute>} />
      <Route path="/faqs" element={<ContactRoute>{FAQPage}</ContactRoute>} />
      <Route path="/website-design" element={<ContactRoute>{WebsiteDesignPage}</ContactRoute>} />
      <Route path="/google-maps-seo" element={<ContactRoute>{GoogleMapsSEOPage}</ContactRoute>} />
      <Route path="/social-media-management" element={<ContactRoute>{SocialMediaPage}</ContactRoute>} />
      <Route path="/blog" element={<ContactRoute>{BlogListPage}</ContactRoute>} />
      <Route path="/blog/:slug" element={<ContactRoute>{BlogPostPage}</ContactRoute>} />
      <Route path="/pricing" element={<ContactRoute>{PricingPage}</ContactRoute>} />
      <Route path="/seo" element={<ContactRoute>{SeoPage}</ContactRoute>} />
      <Route path="/n8n-automation" element={<ContactRoute>{N8nAutomationPage}</ContactRoute>} />
      <Route path="/ai-agents" element={<ContactRoute>{AiAgentsPage}</ContactRoute>} />
      <Route path="/ai-assistant" element={<ContactRoute>{AiAssistantPage}</ContactRoute>} />
      <Route path="/services" element={<ContactRoute>{ServicesOverviewPage}</ContactRoute>} />
    </Routes>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
