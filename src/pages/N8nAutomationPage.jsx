import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

export default function N8nAutomationPage({ onContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Workflow Automation (n8n) | Phtnex</title>
        <meta
          name="description"
          content="Custom n8n workflow automation for growing businesses. Seamlessly connect your CRM, email, lead forms, and APIs to eliminate repetitive manual work."
        />
        <link rel="canonical" href="https://www.phtnex.com/n8n-automation" />
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
          <span className="section-label text-gold block mb-4">Operations &amp; Efficiency · n8n Integration</span>
          <h1 className="font-display text-4xl lg:text-6xl font-medium text-surface leading-tight mb-6">
            Custom Workflow Automation with n8n
          </h1>
          <p className="text-lg text-surface/70 leading-relaxed mb-8">
            Connect your business tools, automate repetitive manual tasks, and build reliable backend lead pipelines using open, cost-effective n8n workflow automation.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <button onClick={onContact} className="btn-primary text-xs uppercase tracking-widest px-8 py-4">
              Book an Automation Call →
            </button>
            <Link to="/ai-agents" className="text-sm text-surface/80 hover:text-gold transition-colors font-medium">
              Explore Autonomous AI Agent Development →
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
                  Why Business Workflow Automation Matters
                </h2>
                <p>
                  As your business grows, your team spends dozens of hours every week manually copying lead data between forms, updating CRM contacts, sending follow-up emails, creating client invoices, and syncing calendars. This manual data entry creates operational bottlenecks, causes dropped leads, and wastes expensive human labor.
                </p>
                <p className="mt-4">
                  With <strong>n8n workflow automation</strong>, we build self-hosted or cloud-managed integration pipelines that connect your existing software applications automatically—delivering enterprise-grade speed and reliability without per-task subscription bloat.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Popular n8n Workflows We Build
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Instant Lead Capture &amp; Routing:</strong> Automatically route website form submissions directly into your CRM, Slack, WhatsApp, and Google Sheets within seconds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Automated Client Onboarding:</strong> Trigger contract creation, send welcome emails, generate client folders, and issue initial invoices upon payment confirmation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Multi-App Data Syncing:</strong> Keep customer records in sync across HubSpot, Salesforce, Airtable, Notion, Stripe, and QuickBooks seamlessly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Custom API &amp; Webhook Integration:</strong> Connect proprietary databases or legacy business software with modern web applications and AI APIs.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Why n8n Over Closed SaaS Platforms?
                </h2>
                <p>
                  Traditional automation platforms like Zapier or Make charge heavy monthly fees that scale rapidly with every single task execution. n8n offers full control, advanced conditional logic, native error-handling nodes, and custom code flexibility—allowing complex multi-step workflows to run reliably at a fraction of the operating cost.
                </p>
              </div>
            </div>

            {/* Sidebar Pricing Card */}
            <div className="space-y-6">
              <div className="bg-ink text-surface p-8 border border-ink sticky top-28">
                <span className="section-label text-gold block mb-2">Service Pricing</span>
                <h3 className="font-display text-2xl font-medium text-surface mb-2">Custom Quote</h3>
                <p className="text-xs text-surface/60 border-b border-surface/15 pb-4 mb-6">
                  Based on number of workflows, API integrations &amp; complexity
                </p>
                <ul className="space-y-3 text-xs text-surface/80 mb-8">
                  <li>• Workflow discovery &amp; architecture</li>
                  <li>• n8n pipeline engineering</li>
                  <li>• API webhook &amp; CRM configuration</li>
                  <li>• Error notification triggers</li>
                  <li>• Full documentation &amp; handover</li>
                </ul>
                <button onClick={onContact} className="w-full btn-primary py-3.5 text-xs uppercase tracking-widest">
                  Book an Automation Call →
                </button>
              </div>
            </div>
          </div>

          {/* Internal Navigation */}
          <div className="border-t border-border pt-12 mt-12">
            <h3 className="font-display text-xl font-medium text-ink mb-6">Explore Related AI &amp; Automation Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/ai-agents" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">AI Agents →</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">AI Agent Development</h4>
                <p className="text-xs text-ink-muted mt-2">Build autonomous AI agents for complex multi-step business tasks.</p>
              </Link>
              <Link to="/ai-assistant" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">AI Assistants →</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">AI Assistant for Business</h4>
                <p className="text-xs text-ink-muted mt-2">24/7 conversational bots for customer service &amp; lead capture.</p>
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
