import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const steps = [
  { day: 'DAY 1', label: 'Discovery Call',    icon: '📞' },
  { day: 'DAY 2', label: 'Design Mockup',     icon: '🎨' },
  { day: 'DAY 3', label: 'Development',       icon: '💻' },
  { day: 'DAY 4', label: 'Copy & Content',    icon: '✍️' },
  { day: 'DAY 5', label: 'Maps & SEO',        icon: '📍' },
  { day: 'DAY 6', label: 'Mobile Polish',     icon: '📱' },
  { day: 'DAY 7', label: 'Go Live!',          icon: '🚀' },
]

/** Animating checkmark circle */
function Check() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 340, damping: 22 }}
      style={{
        width: 18, height: 18, borderRadius: '50%',
        background: 'linear-gradient(135deg, #C9A96E, #D4B988)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
        <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  )
}

export default function ProcessTimeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-120px' })

  const [completedSteps, setCompletedSteps] = useState(0)
  const [isLive, setIsLive] = useState(false)

  /* Drive the sequential animation */
  useEffect(() => {
    if (!inView) return

    let timeout
    let interval

    const startCycle = () => {
      setCompletedSteps(0)
      setIsLive(false)

      let count = 0
      interval = setInterval(() => {
        count++
        setCompletedSteps(count)
        if (count >= steps.length) {
          clearInterval(interval)
          setTimeout(() => setIsLive(true), 300)
          timeout = setTimeout(startCycle, 3400)
        }
      }, 680)
    }

    timeout = setTimeout(startCycle, 600)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [inView])

  return (
    <div ref={ref} aria-hidden="true">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: 'white',
          border: '1px solid #E5E4E0',
          borderRadius: 20,
          overflow: 'hidden',
          boxShadow: '0 24px 64px rgba(0,0,0,0.09), 0 4px 16px rgba(0,0,0,0.05)',
          maxWidth: 420,
        }}
      >
        {/* Gold accent top bar */}
        <div style={{ height: 3, background: 'linear-gradient(90deg, #C9A96E 0%, #D4B988 50%, transparent 100%)' }} />

        {/* Card header */}
        <div style={{
          padding: '20px 24px 16px',
          borderBottom: '1px solid #F0EFE9',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.14em', color: '#C9A96E', marginBottom: 4, textTransform: 'uppercase' }}>
              Phtnex Process
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#0A0A0A', fontFamily: 'Playfair Display, Georgia, serif' }}>
              7-Day Launch Timeline
            </div>
          </div>
          {/* Calendar badge */}
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: 'linear-gradient(135deg, #C9A96E 0%, #D4B988 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18,
          }}>
            📋
          </div>
        </div>

        {/* Steps */}
        <div style={{ padding: '4px 0' }}>
          {steps.map((step, idx) => {
            const isComplete = idx < completedSteps
            const isCurrent = idx === completedSteps && !isLive
            const isPending = idx > completedSteps

            return (
              <div
                key={step.day}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '11px 24px',
                  borderBottom: idx < steps.length - 1 ? '1px solid #F7F6F4' : 'none',
                  transition: 'background 0.3s',
                  background: isCurrent ? '#FDFCFA' : 'white',
                }}
              >
                {/* Timeline node */}
                <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 20, flexShrink: 0 }}>
                  {/* Vertical connector (hidden on last) */}
                  {idx < steps.length - 1 && (
                    <div style={{
                      position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)',
                      width: 1.5, height: 22,
                      background: isComplete ? 'rgba(201,169,110,0.4)' : '#E5E4E0',
                      transition: 'background 0.4s',
                    }} />
                  )}
                  {/* Dot */}
                  {isComplete ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                      style={{
                        width: 12, height: 12, borderRadius: '50%',
                        background: 'linear-gradient(135deg, #C9A96E, #D4B988)',
                        flexShrink: 0,
                      }}
                    />
                  ) : isCurrent ? (
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 0.9, repeat: Infinity }}
                      style={{
                        width: 12, height: 12, borderRadius: '50%',
                        border: '2px solid #C9A96E', background: 'rgba(201,169,110,0.15)',
                        flexShrink: 0,
                      }}
                    />
                  ) : (
                    <div style={{
                      width: 12, height: 12, borderRadius: '50%',
                      border: '1.5px solid #E5E4E0', background: 'white',
                      flexShrink: 0,
                    }} />
                  )}
                </div>

                {/* Day label */}
                <div style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.09em',
                  color: isComplete ? '#C9A96E' : isCurrent ? '#C9A96E' : '#C8C7C3',
                  width: 36, flexShrink: 0, fontFamily: 'Inter, sans-serif',
                  transition: 'color 0.3s',
                }}>
                  {step.day}
                </div>

                {/* Icon */}
                <div style={{ fontSize: 14, flexShrink: 0, opacity: isPending ? 0.3 : 1, transition: 'opacity 0.3s', lineHeight: 1 }}>
                  {step.icon}
                </div>

                {/* Step label */}
                <div style={{
                  flex: 1, fontSize: 12, fontWeight: 500,
                  color: isPending ? '#C8C7C3' : '#0A0A0A',
                  fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em',
                  transition: 'color 0.3s',
                }}>
                  {step.label}
                </div>

                {/* Progress bar */}
                <div style={{ width: 56, height: 3, background: '#F0EFE9', borderRadius: 2, overflow: 'hidden', flexShrink: 0 }}>
                  {isComplete && (
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, #C9A96E, #D4B988)', borderRadius: 2 }} />
                  )}
                  {isCurrent && (
                    <motion.div
                      key={`bar-${completedSteps}`}
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.62, ease: 'easeInOut' }}
                      style={{ height: '100%', background: 'linear-gradient(90deg, #C9A96E, #D4B988)', borderRadius: 2 }}
                    />
                  )}
                </div>

                {/* Checkmark / empty slot */}
                <div style={{ width: 20, height: 20, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {isComplete && <Check />}
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer — "Site is Live" */}
        <div style={{ padding: '14px 24px', borderTop: '1px solid #F0EFE9', minHeight: 52, display: 'flex', alignItems: 'center' }}>
          {isLive ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', alignItems: 'center', gap: 10, width: '100%' }}
            >
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                style={{ width: 8, height: 8, borderRadius: '50%', background: '#34A853', flexShrink: 0 }}
              />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#0A0A0A', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}>
                Your site is live — customers can find you now
              </span>
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.6, repeat: 2 }}
                style={{ fontSize: 14, marginLeft: 'auto' }}
              >
                🎉
              </motion.div>
            </motion.div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#E5E4E0' }} />
              <span style={{ fontSize: 10, color: '#9A9A9A', fontFamily: 'Inter, sans-serif' }}>
                Launching in progress…
              </span>
            </div>
          )}
        </div>
      </motion.div>

      {/* Below card — small trust note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ marginTop: 20, paddingLeft: 4, display: 'flex', alignItems: 'center', gap: 8 }}
      >
        <div style={{ width: 20, height: 1, background: '#C9A96E', opacity: 0.6 }} />
        <span style={{ fontSize: 10, color: '#9A9A9A', fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>
          EVERY CLIENT. EVERY TIME. 7 DAYS.
        </span>
      </motion.div>
    </div>
  )
}
