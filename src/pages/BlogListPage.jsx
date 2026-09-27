import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import { blogPosts } from '../data/blogPosts'

export default function BlogListPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>Blog &amp; Insights | Phtnex</title>
        <meta
          name="description"
          content="Actionable guides on web design, Google Maps SEO, and digital growth for travel agencies, consultants, and small businesses."
        />
        <link rel="canonical" href="https://www.phtnex.com/blog" />
      </Helmet>

      {/* Shared Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section className="bg-ink pt-28 pb-20 lg:pt-36 lg:pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-5 z-0"
          style={{
            backgroundImage: 'linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container-main relative z-10">
          <div className="max-w-3xl">
            <span className="section-label text-gold block mb-4">Resources &amp; Articles</span>
            <h1 className="font-display text-4xl lg:text-6xl font-medium text-surface leading-tight mb-4">
              Phtnex Digital Growth Blog
            </h1>
            <p className="text-lg text-surface/70 leading-relaxed">
              Practical advice, pricing breakdowns, and actionable search strategies for travel agencies, consultants, and growing small businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="section-py bg-surface">
        <div className="container-main max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-surface-2 border border-border p-8 hover:border-gold transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs text-gold font-semibold tracking-wider uppercase block mb-3">
                    {post.date}
                  </span>
                  <h2 className="font-display text-2xl font-medium text-ink group-hover:text-gold transition-colors mb-4 leading-snug">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-ink-muted leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-ink group-hover:text-gold transition-colors"
                  >
                    Read Guide <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
