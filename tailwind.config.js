/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          muted: '#6B6B6B',
          light: '#9A9A9A',
        },
        surface: {
          DEFAULT: '#FAFAF8',
          2: '#F3F2EF',
          3: '#EDECEA',
        },
        border: {
          DEFAULT: '#E5E4E0',
          dark: '#C8C7C3',
        },
        gold: {
          DEFAULT: '#C9A96E',
          light: '#D4B988',
        },
        accent: {
          DEFAULT: '#1A1A1A',
          hover: '#333333',
        },
      },
      letterSpacing: {
        widest: '0.15em',
        label: '0.1em',
      },
      maxWidth: {
        container: '1200px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
