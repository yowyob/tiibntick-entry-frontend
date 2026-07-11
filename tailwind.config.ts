import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
        ink: {
          950: '#F7F6F4',
          900: '#ffffff',
          800: '#f5f5f4',
        },
        stone: {
          400: '#78716c',
          300: '#57534e',
        },
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(249,115,22,0.12), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(251,146,60,0.06), transparent)',
        'card-glow': 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(247,246,244,1) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(249,115,22,0.28)',
        'glow-sm': '0 0 20px -5px rgba(249,115,22,0.2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
