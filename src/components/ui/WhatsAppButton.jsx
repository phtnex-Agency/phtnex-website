import { useState, useEffect } from 'react'

const WHATSAPP_NUMBER = '923558470666'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello!%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more.`

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Fade in after 1.2s for a polished entrance
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    setClicked(true)
    setTimeout(() => setClicked(false), 600)
  }

  return (
    <>
      <style>{`
        @keyframes wa-pulse-1 {
          0%   { transform: scale(1);   opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes wa-pulse-2 {
          0%   { transform: scale(1);   opacity: 0.4; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes wa-bounce-in {
          0%   { opacity: 0; transform: scale(0.4) translateY(40px); }
          60%  { opacity: 1; transform: scale(1.1) translateY(-6px); }
          80%  { transform: scale(0.95) translateY(2px); }
          100% { transform: scale(1) translateY(0); }
        }
        @keyframes wa-icon-spin {
          0%   { transform: rotate(0deg) scale(1); }
          25%  { transform: rotate(-12deg) scale(1.1); }
          50%  { transform: rotate(10deg) scale(1.05); }
          75%  { transform: rotate(-6deg) scale(1.08); }
          100% { transform: rotate(0deg) scale(1); }
        }
        @keyframes wa-ripple {
          0%   { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes wa-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

        #wa-float-btn {
          animation: wa-bounce-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                     wa-float 3.5s ease-in-out 2s infinite;
        }
        #wa-float-btn:hover .wa-icon {
          animation: wa-icon-spin 0.5s ease;
        }
        #wa-float-btn.clicked .wa-ripple-burst {
          animation: wa-ripple 0.6s ease-out forwards;
        }
        .wa-pulse-ring-1 {
          animation: wa-pulse-1 2s ease-out infinite;
        }
        .wa-pulse-ring-2 {
          animation: wa-pulse-2 2s ease-out 0.6s infinite;
        }
      `}</style>

      <div
        style={{
          position: 'fixed',
          bottom: '38px',
          right: '32px',
          zIndex: 9999,
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: visible ? 'auto' : 'none',
        }}
      >
        {/* Button + pulse rings container */}
        <div style={{ position: 'relative', width: '62px', height: '62px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          {/* Pulse rings */}
          {!hovered && (
            <>
              <div className="wa-pulse-ring-1" style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                border: '2px solid rgba(37,211,102,0.5)',
                transformOrigin: 'center',
              }} />
              <div className="wa-pulse-ring-2" style={{
                position: 'absolute', inset: 0, borderRadius: '50%',
                border: '2px solid rgba(37,211,102,0.3)',
                transformOrigin: 'center',
              }} />
            </>
          )}

          {/* Click ripple burst */}
          <div className="wa-ripple-burst" style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'rgba(37,211,102,0.35)',
            transformOrigin: 'center',
            opacity: 0,
          }} />

          {/* Main button */}
          <a
            id="wa-float-btn"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className={clicked ? 'clicked' : ''}
            onClick={handleClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              position: 'relative',
              width: '62px',
              height: '62px',
              borderRadius: '50%',
              background: hovered
                ? 'linear-gradient(145deg, #20c45a, #128C7E)'
                : 'linear-gradient(145deg, #25D366, #1ebe5d)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: hovered
                ? '0 0 0 4px rgba(37,211,102,0.2), 0 12px 36px rgba(37,211,102,0.5)'
                : '0 4px 20px rgba(37,211,102,0.35)',
              transform: hovered ? 'scale(1.12)' : 'scale(1)',
              transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease, background 0.3s ease',
              textDecoration: 'none',
              cursor: 'pointer',
              zIndex: 1,
            }}
          >
            {/* Shine overlay */}
            <div style={{
              position: 'absolute',
              top: '4px', left: '8px',
              width: '42px', height: '20px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.2)',
              filter: 'blur(4px)',
              pointerEvents: 'none',
            }} />

            <svg
              className="wa-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="28"
              height="28"
              fill="#fff"
            >
              <path d="M16.003 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.37.636 4.687 1.843 6.72L2.667 29.333l6.814-1.789A13.28 13.28 0 0 0 16.003 29.333C23.368 29.333 29.333 23.364 29.333 16S23.368 2.667 16.003 2.667zm0 2.4c5.962 0 10.93 4.969 10.93 10.933 0 5.963-4.968 10.933-10.93 10.933a10.89 10.88 0 0 1-5.557-1.523l-.397-.238-4.044 1.062 1.079-3.935-.26-.411A10.876 10.876 0 0 1 5.073 16c0-5.964 4.968-10.933 10.93-10.933zm-3.12 5.2c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.24 3.573 5.52 4.867 2.72 1.08 3.28.867 3.867.813.587-.053 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373-.32-.16-1.893-.933-2.187-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-.96 1.253-.133.213-.267.24-.587.08-.32-.16-1.347-.497-2.567-1.587-.947-.84-1.587-1.88-1.773-2.2-.187-.32-.02-.493.14-.653.143-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.707-1.747-.98-2.387-.253-.613-.52-.52-.72-.52z"/>
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}
