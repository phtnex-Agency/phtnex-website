import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

export default function AiAgentsPage({ onContact }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>AI Agent Development | Phtnex</title>
        <meta
          name="description"
          content="Custom AI agent development for business tasks. Build autonomous AI workflows for data extraction, document processing, and automated execution."
        />
        <link rel="canonical" href="https://www.phtnex.com/ai-agents" />
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
          <span className="section-label text-gold block mb-4">Autonomous Intelligence · Custom AI Agents</span>
          <h1 className="font-display text-4xl lg:text-6xl font-medium text-surface leading-tight mb-6">
            Custom AI Agent Development for Business
          </h1>
          <p className="text-lg text-surface/70 leading-relaxed mb-8">
            Deploy goal-driven, autonomous AI agents engineered to execute multi-step operational tasks, analyze complex data, and interface with your business systems.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <button onClick={onContact} className="btn-primary text-xs uppercase tracking-widest px-8 py-4">
              Book an AI Strategy Call →
            </button>
            <Link to="/ai-assistant" className="text-sm text-surface/80 hover:text-gold transition-colors font-medium">
              Looking for 24/7 Customer Support AI Assistants? Click here →
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
                  What Are Autonomous AI Agents?
                </h2>
                <p>
                  Unlike basic chatbots that simply respond to user text prompts, <strong>autonomous AI agents</strong> are task-oriented digital workers equipped with memory, reasoning capabilities, and system tool integration. They can reason through complex objectives, break projects down into sub-tasks, interact with external databases and APIs, and complete multi-step business operations independently.
                </p>
                <p className="mt-4">
                  At Phtnex, we design and program custom AI agents built on state-of-the-art LLMs, tailored specifically to your company’s internal data, operating rules, and security guidelines.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Capabilities &amp; Enterprise Use Cases
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Document Processing &amp; Data Extraction:</strong> Automatically extract structured JSON records from PDF invoices, contracts, receipts, or research reports.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Automated Research &amp; Market Synthesis:</strong> Scrape, analyze, and summarize market trends, competitor pricing, or industry news into actionable daily briefs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Intelligent Outbound Communication:</strong> Draft hyper-personalized client proposals, follow-up emails, or partner updates based on CRM milestones.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold font-bold">✓</span>
                    <span><strong>Internal Knowledge Base Q&amp;A:</strong> Query company SOPs, technical manuals, or past project archives in real time with vector search retrieval.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-ink mb-4">
                  Secure, Brand-Trained &amp; Scalable
                </h2>
                <p>
                  We prioritize data privacy and enterprise control. Your AI agents operate within secure permission boundaries, with custom guardrails to ensure output accuracy, zero hallucination on critical company data, and full human-in-the-loop oversight options.
                </p>
              </div>
            </div>

            {/* Sidebar Pricing Card */}
            <div className="space-y-6">
              <div className="bg-ink text-surface p-8 border border-ink sticky top-28">
                <span className="section-label text-gold block mb-2">Service Pricing</span>
                <h3 className="font-display text-2xl font-medium text-surface mb-2">Custom Quote</h3>
                <p className="text-xs text-surface/60 border-b border-surface/15 pb-4 mb-6">
                  Based on agent capabilities, LLM fine-tuning &amp; system integrations
                </p>
                <ul className="space-y-3 text-xs text-surface/80 mb-8">
                  <li>• Agent architecture &amp; prompt engineering</li>
                  <li>• Vector database RAG integration</li>
                  <li>• Tool-calling API connection</li>
                  <li>• Guardrails &amp; accuracy evaluation</li>
                  <li>• Full system deployment</li>
                </ul>
                <button onClick={onContact} className="w-full btn-primary py-3.5 text-xs uppercase tracking-widest">
                  Book an AI Strategy Call →
                </button>
              </div>
            </div>
          </div>

          {/* Internal Navigation */}
          <div className="border-t border-border pt-12 mt-12">
            <h3 className="font-display text-xl font-medium text-ink mb-6">Explore Related AI &amp; Automation Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/ai-assistant" className="p-6 bg-surface-2 border border-border hover:border-gold transition-colors block group">
                <span className="text-xs text-gold font-semibold uppercase tracking-wider block mb-2">AI Assistants →</span>
                <h4 className="font-display text-lg font-medium text-ink group-hover:text-gold transition-colors">AI Assistant for Business</h4>
                <p className="text-xs text-ink-muted mt-2">24/7 conversational bots for customer service &amp; lead capture.</p>
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
