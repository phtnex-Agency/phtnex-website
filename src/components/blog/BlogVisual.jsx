const PALETTE = {
  ink: '#0A0A0A',
  gold: '#C9A96E',
  goldSoft: 'rgba(201,169,110,0.22)',
  cream: '#FAFAF8',
  muted: 'rgba(250,250,248,0.38)',
  line: 'rgba(250,250,248,0.12)',
}

function Frame({ children, dark = true }) {
  const bg = dark ? PALETTE.ink : PALETTE.cream
  return (
    <svg viewBox="0 0 640 360" className="block h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="640" height="360" fill={bg} />
      <rect x="24" y="24" width="592" height="312" fill="none" stroke={dark ? PALETTE.line : 'rgba(10,10,10,0.08)'} />
      {children}
    </svg>
  )
}

function CostVisual() {
  return (
    <Frame>
      <text x="48" y="78" fill={PALETTE.gold} fontFamily="Georgia, serif" fontSize="13" letterSpacing="4">
        PRICING
      </text>
      <text x="48" y="148" fill={PALETTE.cream} fontFamily="Georgia, serif" fontSize="56">
        $140
      </text>
      <text x="48" y="184" fill={PALETTE.muted} fontFamily="Inter, sans-serif" fontSize="13" letterSpacing="1.4">
        flat website setup · no retainer
      </text>

      <rect x="340" y="72" width="236" height="176" fill="none" stroke={PALETTE.line} />
      <rect x="356" y="88" width="12" height="12" fill={PALETTE.gold} />
      <rect x="376" y="88" width="12" height="12" fill={PALETTE.line} />
      <rect x="396" y="88" width="12" height="12" fill={PALETTE.line} />
      <line x1="356" y1="116" x2="560" y2="116" stroke={PALETTE.line} />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={356} y={132 + i * 24} width={i === 0 ? 164 : 128 - i * 8} height="8" fill={PALETTE.goldSoft} />
      ))}
      <text x="48" y="300" fill={PALETTE.muted} fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="2">
        AGENCY RANGE  $500 — $15,000+
      </text>
    </Frame>
  )
}

function MapsVisual() {
  return (
    <Frame>
      {[70, 110, 150].map((r) => (
        <circle key={r} cx="430" cy="180" r={r} fill="none" stroke={PALETTE.line} />
      ))}
      <circle cx="430" cy="180" r="6" fill={PALETTE.gold} />
      <path d="M430 132 C418 150 410 164 410 176 C410 187 419 196 430 196 C441 196 450 187 450 176 C450 164 442 150 430 132 Z" fill={PALETTE.gold} />
      <circle cx="430" cy="174" r="5" fill={PALETTE.ink} />

      <text x="48" y="78" fill={PALETTE.gold} fontFamily="Georgia, serif" fontSize="13" letterSpacing="4">
        LOCAL SEARCH
      </text>
      <text x="48" y="148" fill={PALETTE.cream} fontFamily="Georgia, serif" fontSize="42">
        Map Pack
      </text>
      <text x="48" y="188" fill={PALETTE.muted} fontFamily="Inter, sans-serif" fontSize="13">
        Top 3 listings capture most calls.
      </text>
      <text x="48" y="300" fill={PALETTE.muted} fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="2">
        RELEVANCE  ·  DISTANCE  ·  PROMINENCE
      </text>
    </Frame>
  )
}

function TimelineVisual() {
  return (
    <Frame>
      <text x="48" y="78" fill={PALETTE.gold} fontFamily="Georgia, serif" fontSize="13" letterSpacing="4">
        LAUNCH WINDOW
      </text>
      <text x="48" y="148" fill={PALETTE.cream} fontFamily="Georgia, serif" fontSize="56">
        07
      </text>
      <text x="140" y="148" fill={PALETTE.muted} fontFamily="Georgia, serif" fontSize="22">
        days
      </text>
      <text x="48" y="184" fill={PALETTE.muted} fontFamily="Inter, sans-serif" fontSize="13">
        Discovery to live site — without the 3-month stall.
      </text>

      {[...Array(7)].map((_, i) => {
        const x = 48 + i * 78
        return (
          <g key={i}>
            <circle cx={x} cy="248" r="5" fill={i < 5 ? PALETTE.gold : 'transparent'} stroke={PALETTE.gold} />
            <text x={x} y="278" textAnchor="middle" fill={PALETTE.muted} fontFamily="Inter, sans-serif" fontSize="10">
              D{i + 1}
            </text>
          </g>
        )
      })}
      <line x1="48" y1="248" x2="516" y2="248" stroke={PALETTE.goldSoft} />
    </Frame>
  )
}

function AssistantVisual() {
  return (
    <Frame>
      <text x="48" y="78" fill={PALETTE.gold} fontFamily="Georgia, serif" fontSize="13" letterSpacing="4">
        ALWAYS ON
      </text>
      <text x="48" y="148" fill={PALETTE.cream} fontFamily="Georgia, serif" fontSize="48">
        24/7
      </text>
      <text x="48" y="186" fill={PALETTE.muted} fontFamily="Inter, sans-serif" fontSize="13">
        Qualified replies while the office is closed.
      </text>

      <rect x="360" y="88" width="196" height="64" fill={PALETTE.goldSoft} stroke={PALETTE.gold} />
      <text x="376" y="126" fill={PALETTE.cream} fontFamily="Inter, sans-serif" fontSize="12">
        Can you take a booking tonight?
      </text>
      <rect x="392" y="168" width="164" height="52" fill="none" stroke={PALETTE.line} />
      <text x="408" y="200" fill={PALETTE.muted} fontFamily="Inter, sans-serif" fontSize="12">
        Yes — three slots left.
      </text>
      <circle cx="80" cy="268" r="4" fill={PALETTE.gold} />
      <circle cx="108" cy="268" r="4" fill={PALETTE.goldSoft} />
      <circle cx="136" cy="268" r="4" fill={PALETTE.line} />
    </Frame>
  )
}

const VISUALS = {
  cost: CostVisual,
  maps: MapsVisual,
  timeline: TimelineVisual,
  assistant: AssistantVisual,
}

export default function BlogVisual({ id, className = '' }) {
  const Visual = VISUALS[id]
  if (!Visual) return null
  return (
    <div className={`h-full w-full overflow-hidden bg-ink ${className}`}>
      <Visual />
    </div>
  )
}

export function BlogFigure({ post }) {
  if (!post?.figure) return null
  const { kicker, value, label, caption } = post.figure

  return (
    <figure className="my-12 border border-border bg-surface-2">
      <div className="relative overflow-hidden px-8 py-10 lg:px-12 lg:py-12">
        <div className="absolute left-0 top-0 h-full w-px bg-gold" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold mb-5 block">
          {kicker}
        </span>
        <p className="font-display text-5xl lg:text-6xl font-medium text-ink leading-none mb-4">
          {value}
        </p>
        <p className="text-sm font-medium tracking-wide text-ink mb-3">{label}</p>
        <figcaption className="text-sm text-ink-muted leading-relaxed max-w-xl">
          {caption}
        </figcaption>
      </div>
    </figure>
  )
}
