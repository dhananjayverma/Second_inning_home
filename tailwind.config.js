/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          50: '#f4f7f4',
          100: '#e3ece4',
          200: '#c7d9ca',
          300: '#9bbaa0',
          400: '#6d9774',
          500: '#4a7a53',
          600: '#386041',
          700: '#2c4d35',
          800: '#243e2c',
          900: '#1d3324',
          950: '#0f1d14',
        },
        sand: {
          50: '#faf7f2',
          100: '#f3ebde',
          200: '#e7d5be',
          300: '#d8ba93',
          400: '#c89e6b',
          500: '#bd8750',
          600: '#ad6f40',
          700: '#905536',
          800: '#764631',
          900: '#623b2b',
          950: '#341d16',
        },
        gold: {
          50: '#fdf9f0',
          100: '#f9efce',
          200: '#f2dd9b',
          300: '#ebc662',
          400: '#e4ad38',
          500: '#d49320',
          600: '#bb7418',
          700: '#975418',
          800: '#7c431b',
          900: '#68381c',
          950: '#3b1d0d',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfaf4',
          200: '#f9f2e6',
          300: '#f3e8d3',
          400: '#e9d6b5',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'float': 'float 7s ease-in-out infinite',
        'slow-zoom': 'slowZoom 25s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'draw-line': 'drawLine 1.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        drawLine: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      letterSpacing: {
        'tightest': '-0.04em',
      },
    },
  },
  plugins: [],
};
