/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Karla"', 'sans-serif'],
      },
      colors: {
        primary: '#0f2942', // Navy Blue
        secondary: '#d4876f', // Terracotta
        cream: '#f7f3eb', // Creme
        surface: '#3d4852', // Graphite
        offwhite: '#fafafa',
        accent: '#a855f7', // Purple for hover effects
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'scroll-dot': 'scroll-dot 2s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'scroll-dot': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(15px)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}