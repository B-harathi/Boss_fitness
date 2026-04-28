/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#0A0A0A',
          dark: '#111111',
          surface: '#1A1A1A',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F0C040',
          dark: '#A8860C',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#AAAAAA',
          muted: '#666666',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37, #F0C040)',
        'overlay-gradient': 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85))',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.4)',
      },
      letterSpacing: {
        'widest-xl': '0.2em',
        'widest-2xl': '0.25em',
      }
    },
  },
  plugins: [],
}
