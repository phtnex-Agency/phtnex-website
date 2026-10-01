import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import BlogVisual, { BlogFigure } from '../components/blog/BlogVisual'
import { blogPosts } from '../data/blogPosts'

export default function BlogPostPage({ slug: propSlug, onContact }) {
  const params = useParams()
  const currentSlug = propSlug || params.slug

  const post = blogPosts.find((p) => p.slug === currentSlug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [currentSlug])

  if (!post) {
    return (
      <div className="min-h-screen bg-surface flex flex-col justify-center items-center text-center p-6 pt-24">
        <Navbar />
        <h1 className="font-display text-4xl text-ink mb-4">Post Not Found</h1>
        <p className="text-sm text-ink-muted mb-6">The blog article you are looking for does not exist.</p>
        <Link to="/blog" className="btn-primary px-6 py-3 text-xs uppercase tracking-widest">
          ← Back to All Articles
        </Link>
      </div>
    )
  }

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: '2026-09-27',
    description: post.metaDescription,
    author: {
      '@type': 'Organization',
      name: 'Phtnex',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Phtnex',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.phtnex.com/apple-touch-icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.phtnex.com/blog/${post.slug}`,
    },
  }

  return (
    <div className="min-h-screen bg-surface">
      <Helmet>
        <title>{`${post.title} | Phtnex`}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://www.phtnex.com/blog/${post.slug}`} />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>

      {/* Shared Navbar */}
      <Navbar />

      {/* Hero Title Header */}
      <section className="bg-ink pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-5 z-0"
          style={{
            backgroundImage: 'linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container-main relative z-10 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs text-gold/80 hover:text-gold uppercase tracking-widest font-semibold mb-6 transition-colors"
          >
            ← Back to All Articles
          </Link>
          <span className="text-xs text-gold font-semibold uppercase tracking-[0.16em] block mb-3">
            {post.category}
          </span>
          <span className="text-xs text-surface/50 font-medium block mb-3">
            Published · {post.date}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-surface leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-base lg:text-lg text-surface/70 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Post Article Body */}
      <section className="section-py bg-surface">
        <div className="container-main max-w-3xl">
          <div className="mb-12 border border-border overflow-hidden">
            <BlogVisual id={post.visual} className="aspect-[16/9]" />
          </div>
          {post.content.split('<!--figure-->').map((chunk, index, chunks) => (
            <div key={index}>
              <article
                className="prose prose-lg max-w-none text-ink-muted leading-relaxed space-y-6
                  [&_h2]:font-display [&_h2]:text-2xl [&_h2]:lg:text-3xl [&_h2]:font-medium [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-4
                  [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-ink-muted
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-base [&_li]:text-ink-muted"
                dangerouslySetInnerHTML={{ __html: chunk }}
              />
              {index < chunks.length - 1 && <BlogFigure post={post} />}
            </div>
          ))}

          {/* Related Service CTA Section */}
          <div className="mt-16 pt-10 border-t border-border">
            <div className="bg-ink text-surface p-8 lg:p-10 border border-ink flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-xs text-gold uppercase tracking-widest font-semibold block mb-2">
                  Take the Next Step
                </span>
                <h3 className="font-display text-2xl font-medium text-surface mb-2">
                  Ready to Grow Your Business Online?
                </h3>
                <p className="text-xs text-surface/70 leading-relaxed max-w-md">
                  We launch custom websites and rank businesses on Google Maps in guaranteed 7-day turnarounds.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Link
                  to={post.relatedPage}
                  className="btn-primary text-center text-xs uppercase tracking-widest px-6 py-3.5 whitespace-nowrap"
                >
                  View Service Details →
                </Link>
                <button
                  onClick={onContact}
                  className="border border-surface/30 text-surface hover:bg-surface hover:text-ink text-center text-xs uppercase tracking-widest px-6 py-3.5 transition-colors whitespace-nowrap"
                >
                  Book a Free Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface-2 py-8">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-muted">© 2026 Phtnex. All rights reserved.</p>
          <Link to="/blog" className="text-xs text-ink-muted hover:text-ink transition-colors underline underline-offset-4">
            ← Return to Blog List
          </Link>
        </div>
      </footer>
    </div>
  )
}
