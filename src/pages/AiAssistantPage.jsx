import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

export default function AiAssistantPage({ onContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>AI Assistant for Business | Phtnex</title>
        <meta
          name="description"
          content="Custom 24/7 AI assistants for small business customer service, lead qualification, and appointment booking. Never miss another prospective client lead."
        />
        <link rel="canonical" href="https://www.phtnex.com/ai-assistant" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-ink pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-5 z-0"
          style={{
            backgroundImage:
              'linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container-main relative z-10 max-w-3xl">
          <span className="section-label text-gold block mb-4">24/7 Client Engagement · AI Assistant</span>
          <h1 className="font-display text-4xl lg:text-6xl font-medium text-surface leading-tight mb-6">
            Custom AI Assistant for Business Growth
          </h1>
          <p className="text-lg text-surface/70 leading-relaxed mb-8">
            Turn website visitors into qualified client leads 24/7. Deploy a brand-trained AI assistant that answers questions, qualifies prospects, and books strategy calls automatically.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <button onClick={onContact} className="btn-primary text-xs uppercase tracking-widest px-8 py-4">
              Get Your AI Assistant →
            </button>
            <Link to="/ai-agents" className="text-sm text-surface/80 hover:text-gold transition-colors font-medium">
              Explore Autonomous AI Agents →
            </Link>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="section-py bg-surface">
        <div className="container-main max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8 text-ink-muted leading-relaxed text-base">
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Never Lose Another Lead to Slow Follow-Ups
                </h2>
                <p>
                  Over 60% of small business inquiries occur outside normal office hours. When a prospective travel client, consulting prospect, or homeowner reaches out at 8 PM and receives no reply until the next day, they click away and hire a competitor who answers immediately.
                </p>
                <p className="mt-4">
                  A custom <strong>Phtnex AI Assistant</strong> acts as your round-the-clock sales representative. Trained specifically on your service packages, pricing logic, and FAQ documentation, your assistant interacts with visitors in natural human language, addresses doubts, and captures lead contact info instantly.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  What Your AI Assistant Can Do
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>24/7 Customer Support:</strong> Answer repetitive questions about services, pricing, turnarounds, location, and business policies instantly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Lead Qualification &amp; Screening:</strong> Collect project details, budget requirements, and timelines before passing high-intent leads to your inbox.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Automated Booking &amp; Calendar Sync:</strong> Prompt qualified prospects to pick a discovery call time directly on your calendar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>WhatsApp &amp; Website Integration:</strong> Deploy seamlessly on your website chat, WhatsApp Business account, or social messaging channels.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Brand-Trained &amp; Fully Customizable
                </h2>
                <p>
                  We build your assistant around your exact brand tone, terminology, and operating policies. You maintain full visibility into conversation logs, lead handoffs, and performance analytics—ensuring your digital assistant represents your business flawlessly.
                </p>
              </div>
            </div>

            {/* Sidebar Pricing Card */}
            <div className="space-y-6">
              <div className="bg-ink text-surface p-8 border border-ink sticky top-28">
                <span className="section-label text-gold block mb-2">Service Pricing</span>
                <h3 className="font-display text-2xl font-medium text-surface mb-2">Custom Quote</h3>
                <p className="text-xs text-surface/60 border-b border-surface/15 pb-4 mb-6">
                  Based on knowledge base size, custom training &amp; channel deployment
                </p>
                <ul className="space-y-3 text-xs text-surface/80 mb-8">
                  <li>• Custom brand voice training</li>
                  <li>• FAQ &amp; knowledge base indexing</li>
                  <li>• Website widget &amp; WhatsApp setup</li>
                  <li>• Lead routing &amp; CRM sync</li>
                  <li>• Ongoing prompt optimization</li>
                </ul>
                <button onClick={onContact} className="w-full btn-primary py-3.5 text-xs uppercase tracking-widest">
                  Book a Strategy Call →
                </button>
              </div>
            </div>
          </div>

          {/* Internal Navigation */}
          <div className="border-t border-border pt-12 mt-12">
            <h3 className="font-display text-xl font-medium text-ink mb-6">Explore Related Digital &amp; AI Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/ai-agents" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">AI Agents →</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">AI Agent Development</h4>
                <p className="text-xs text-ink-muted mt-2">Build autonomous AI agents for complex multi-step business tasks.</p>
              </Link>
              <Link to="/n8n-automation" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">Automation →</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">Workflow Automation (n8n)</h4>
                <p className="text-xs text-ink-muted mt-2">Connect your business tools and eliminate manual data entry.</p>
              </Link>
              <Link to="/services" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">All Offerings →</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">All Services Overview</h4>
                <p className="text-xs text-ink-muted mt-2">View our complete suite of digital, automation, and AI services.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface-2 py-8">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">© 2026 Phtnex. All rights reserved.</p>
          <Link to="/" className="text-xs text-ink-muted hover:text-ink transition-colors underline underline-offset-4">
            ← Return to phtnex.com
          </Link>
        </div>
      </footer>
    </div>
  )
}
