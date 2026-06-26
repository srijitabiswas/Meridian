/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Named 1:1 from the supplied brand palette (colorPallet.pdf)
        'arctic-powder': '#F1F6F4',
        forsythia: '#FFC801',
        'nocturnal-expedition': '#114C5A',
        'mystic-mint': '#D9E8E2',
        'deep-saffron': '#FF9932',
        'oceanic-noir': '#172B36',
      },
      fontFamily: {
        display: ['"Clash Display"', '"Arctic Powder Fallback"', 'system-ui', 'sans-serif'],
        sans: ['"General Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'meridian-glow':
          'radial-gradient(60% 60% at 50% 0%, rgba(255,200,1,0.16) 0%, rgba(255,153,50,0.08) 35%, rgba(23,43,54,0) 70%)',
        'meridian-gradient': 'linear-gradient(135deg, #FFC801 0%, #FF9932 100%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        glass: '0 1px 0 0 rgba(255,255,255,0.06) inset, 0 8px 32px -8px rgba(0,0,0,0.45)',
        'glow-sm': '0 0 24px -4px rgba(255,200,1,0.35)',
        'glow-lg': '0 0 80px -10px rgba(255,153,50,0.35)',
        // Dark "glass" card material: a hairline top sheen (light catching a
        // bevel) + a hairline bottom edge + a soft contact shadow grounding
        // it on the page. Used in place of a flat border+bg on every dark card.
        card: 'inset 0 1px 0 0 rgba(255,255,255,0.08), inset 0 -1px 0 0 rgba(0,0,0,0.2), 0 16px 40px -20px rgba(0,0,0,0.65)',
        'card-hover':
          'inset 0 1px 0 0 rgba(255,255,255,0.12), inset 0 -1px 0 0 rgba(0,0,0,0.2), 0 20px 48px -16px rgba(0,0,0,0.7)',
        // Light-surface counterpart for cards on arctic-powder sections.
        'card-light': 'inset 0 1px 0 0 rgba(255,255,255,0.7), 0 20px 48px -24px rgba(23,43,54,0.25)',
        'button-primary': 'inset 0 1px 0 0 rgba(255,255,255,0.45), 0 1px 0 0 rgba(120,76,0,0.25), 0 10px 24px -8px rgba(255,153,50,0.45)',
        'button-primary-hover': 'inset 0 1px 0 0 rgba(255,255,255,0.55), 0 1px 0 0 rgba(120,76,0,0.3), 0 16px 36px -10px rgba(255,153,50,0.6)',
        'button-ghost': 'inset 0 1px 0 0 rgba(255,255,255,0.07)',
      },
      maxWidth: {
        shell: '1320px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(0.85)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        'flow-dash': {
          to: { strokeDashoffset: '-200' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'price-pop': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 16s linear infinite',
        marquee: 'marquee 32s linear infinite',
        'pulse-dot': 'pulse-dot 2.2s ease-in-out infinite',
        'flow-dash': 'flow-dash 2.6s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'price-pop': 'price-pop 180ms ease-out forwards',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};