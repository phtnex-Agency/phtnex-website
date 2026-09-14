import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * HeroVisual
 * Animated right-side element for the Hero section.
 * Shows a browser mockup with a live typing search + floating notification cards.
 */
export default function HeroVisual() {
  const [typed, setTyped] = useState('')
  const fullText = 'travel agency lahore'

  /* Typing / deleting loop */
  useEffect(() => {
    let timeout
    let i = 0
    let deleting = false

    const tick = () => {
      if (!deleting) {
        i++
        setTyped(fullText.slice(0, i))
        if (i === fullText.length) {
          deleting = true
          timeout = setTimeout(tick, 2400)
          return
        }
      } else {
        i--
        setTyped(fullText.slice(0, i))
        if (i === 0) {
          deleting = false
          timeout = setTimeout(tick, 700)
          return
        }
      }
      timeout = setTimeout(tick, deleting ? 45 : 90)
    }

    timeout = setTimeout(tick, 1000)
    return () => clearTimeout(timeout)
  }, [])

  /* Reusable float animation */
  const floatProps = (delay = 0, amplitude = 7) => ({
    animate: { y: [0, -amplitude, 0] },
    transition: { duration: 3.5 + delay * 0.4, repeat: Infinity, ease: 'easeInOut', delay },
  })

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: '100%',
        height: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
      }}
    >
      {/* ── Pulsing gold rings ─────────────────────────────── */}
      {[220, 330, 440].map((size, i) => (
        <motion.div
          key={size}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
            border: '1px solid #C9A96E',
          }}
          animate={{ opacity: [0, 0.10 - i * 0.025, 0], scale: [0.94, 1.02, 1.06] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.3,
          }}
        />
      ))}

      {/* ── Scattered decorative dots ──────────────────────── */}
      {[
        { top: '12%', left: '10%', size: 4, delay: 0.3 },
        { top: '72%', left: '8%', size: 3, delay: 1.1 },
        { top: '18%', right: '10%', size: 5, delay: 0.7 },
        { top: '80%', right: '12%', size: 3, delay: 1.8 },
        { top: '45%', left: '4%', size: 2.5, delay: 2.0 },
      ].map((dot, idx) => (
        <motion.div
          key={idx}
          style={{
            position: 'absolute',
            top: dot.top,
            left: dot.left,
            right: dot.right,
            width: dot.size,
            height: dot.size,
            borderRadius: '50%',
            background: '#C9A96E',
            opacity: 0.35,
          }}
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.4, 1] }}
          transition={{ duration: 3, repeat: Infinity, delay: dot.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* ── Browser window ────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 44, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'relative',
          zIndex: 10,
          width: 300,
          background: 'white',
          border: '1px solid #E5E4E0',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 32px 80px rgba(0,0,0,0.13), 0 8px 24px rgba(0,0,0,0.06)',
        }}
      >
        {/* Chrome bar */}
        <div style={{ background: '#F3F2EF', borderBottom: '1px solid #E5E4E0', padding: '12px 14px 10px' }}>
          {/* Traffic lights */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
            {['#FF5F57', '#FFBD2E', '#28C840'].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
            ))}
          </div>
          {/* URL / search bar */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 7,
            background: 'white', borderRadius: 9,
            padding: '6px 10px', border: '1px solid #E5E4E0',
          }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
              <circle cx="4" cy="4" r="3" stroke="#9A9A9A" strokeWidth="1.3" />
              <line x1="6.5" y1="6.5" x2="9" y2="9" stroke="#9A9A9A" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 10, color: '#6B6B6B', fontFamily: 'Inter, sans-serif', flex: 1, letterSpacing: '-0.01em' }}>
              {typed}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.75, repeat: Infinity }}
                style={{ display: 'inline-block', width: 1, height: 10, background: '#6B6B6B', marginLeft: 1, verticalAlign: 'middle' }}
              />
            </span>
          </div>
        </div>

        {/* Results list */}
        <div style={{ padding: '12px 12px 14px', background: '#FAFAF8', display: 'flex', flexDirection: 'column', gap: 9 }}>

          {/* #1 Result — gold highlighted */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'white',
              border: '1.5px solid #C9A96E',
              borderRadius: 13,
              padding: '10px 12px',
              boxShadow: '0 4px 24px rgba(201,169,110,0.18)',
            }}
          >
            <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
              {/* Rank badge */}
              <div style={{
                width: 22, height: 22, borderRadius: '50%',
                background: 'linear-gradient(135deg, #C9A96E 0%, #D4B988 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, marginTop: 1,
              }}>
                <span style={{ fontSize: 9, color: 'white', fontWeight: 700 }}>1</span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#0A0A0A', marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Al-Safa Travel Agency
                </div>
                <div style={{ fontSize: 9, color: '#C9A96E', marginBottom: 5 }}>alsafatravel.pk · Lahore, PK</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 1.5, marginBottom: 5 }}>
                  {[1, 2, 3, 4, 5].map(s => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + s * 0.09, duration: 0.3, type: 'spring', stiffness: 260 }}
                      style={{ color: '#C9A96E', fontSize: 11, lineHeight: 1 }}
                    >★</motion.span>
                  ))}
                  <span style={{ fontSize: 9, color: '#9A9A9A', marginLeft: 3 }}>5.0 (48 reviews)</span>
                </div>
                <div style={{ fontSize: 9, color: '#6B6B6B', lineHeight: 1.45 }}>
                  Trusted for Hajj, Umrah & international tours across Pakistan.
                </div>
              </div>
            </div>
          </motion.div>

          {/* #2 Result — blurred skeleton */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.85 }}
            style={{ background: 'white', border: '1px solid #E5E4E0', borderRadius: 11, padding: '10px 12px' }}
          >
            <div style={{ height: 10, width: '68%', borderRadius: 5, background: '#EDECEA', marginBottom: 7 }} />
            <div style={{ height: 8, width: '42%', borderRadius: 4, background: '#EDECEA', marginBottom: 5 }} />
            <div style={{ height: 8, width: '80%', borderRadius: 4, background: '#EDECEA' }} />
          </motion.div>

          {/* #3 Result — more faded */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1.05 }}
            style={{ background: 'white', border: '1px solid #E5E4E0', borderRadius: 11, padding: '10px 12px' }}
          >
            <div style={{ height: 10, width: '56%', borderRadius: 5, background: '#EDECEA', marginBottom: 6 }} />
            <div style={{ height: 8, width: '35%', borderRadius: 4, background: '#EDECEA' }} />
          </motion.div>
        </div>
      </motion.div>

      {/* ── Floating card: Google Maps ─────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 44, y: -16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.15, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', top: '7%', right: '4%', zIndex: 20,
          background: 'white', border: '1px solid #E5E4E0', borderRadius: 14,
          padding: '10px 14px',
          boxShadow: '0 12px 48px rgba(0,0,0,0.1)',
        }}
      >
        <motion.div {...floatProps(0)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: '50%', background: '#34A853', flexShrink: 0 }}
            />
            <span style={{ fontSize: 11, fontWeight: 600, color: '#0A0A0A' }}>📍 Google Maps</span>
          </div>
          <div style={{ fontSize: 9, color: '#6B6B6B' }}>Visible in local searches</div>
        </motion.div>
      </motion.div>

      {/* ── Floating card: 5-Star Review ──────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -44, y: 16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.45, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', bottom: '20%', left: '2%', zIndex: 20,
          background: 'white', border: '1px solid #E5E4E0', borderRadius: 14,
          padding: '10px 14px', minWidth: 165,
          boxShadow: '0 12px 48px rgba(0,0,0,0.1)',
        }}
      >
        <motion.div {...floatProps(0.9)}>
          <div style={{ display: 'flex', gap: 2, marginBottom: 4 }}>
            {[1, 2, 3, 4, 5].map(s => (
              <span key={s} style={{ color: '#C9A96E', fontSize: 13 }}>★</span>
            ))}
          </div>
          <div style={{ fontSize: 10, fontWeight: 600, color: '#0A0A0A', marginBottom: 3 }}>New 5-Star Review!</div>
          <div style={{ fontSize: 9, color: '#6B6B6B', fontStyle: 'italic', lineHeight: 1.45 }}>
            "Excellent service, highly recommend…"
          </div>
        </motion.div>
      </motion.div>

      {/* ── Floating card: Visitors / Analytics ───────────── */}
      <motion.div
        initial={{ opacity: 0, y: 44 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.75, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute', bottom: '6%', right: '6%', zIndex: 20,
          background: 'white', border: '1px solid #E5E4E0', borderRadius: 14,
          padding: '10px 14px',
          boxShadow: '0 12px 48px rgba(0,0,0,0.1)',
        }}
      >
        <motion.div {...floatProps(1.6)}>
          <div style={{ fontSize: 10, fontWeight: 600, color: '#0A0A0A', marginBottom: 7 }}>📈 +68 Visitors Today</div>
          {/* Sparkline */}
          <svg width="94" height="28" viewBox="0 0 94 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hv-spark-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon
              points="0,24 13,21 26,20 39,16 52,13 65,9 78,5 94,2 94,28 0,28"
              fill="url(#hv-spark-grad)"
            />
            <polyline
              points="0,24 13,21 26,20 39,16 52,13 65,9 78,5 94,2"
              stroke="#C9A96E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"
            />
            <motion.circle
              cx="94" cy="2" r="3.5" fill="#C9A96E"
              animate={{ scale: [1, 1.7, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
          </svg>
          <div style={{ fontSize: 9, color: '#34A853', fontWeight: 600, marginTop: 3 }}>↑ 34% vs last week</div>
        </motion.div>
      </motion.div>
    </div>
  )
}
