/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(#1e2024, #23272b)'
      },
      colors: {
        'dark-bg': '#212428',         
        'light-bg': '#F5F5F5',        
        'dark-text': '#333333',       
        'light-text': '#c4cfde',      
        'primary-red': '#ff014f',     
        'hover-red': '#C53030',       
        'navbar-text': '#FFFFFF',     
        'hover-navbar': '#E2E8F0',
        'body': '#878E96'
      }
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
      secondary: ['Montserrat', 'sans-serif']
    },
    lineHeight: {
      b1: '1.9',
    },
    letterSpacing: {
      'widest': '.25rem'
    },
    boxShadow: {
      'button': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
    },
    keyframes: {
      typing: {
        'from': { width: '0' },
        'to': { width: '100%' }
      },
      deleting: {
        'from': { width: '100%' },
        'to': { width: '0' }
      },
      'blink-caret': {
        'from, to': { borderRightColor: 'transparent' },
        '50%': { borderRightColor: 'rgb(229, 224, 216)' }
      }
    },
    animation: {
      typing: 'typing 3s steps(20, end)',
      deleting: 'deleting 3s steps(20, end)',
      'blink-caret': 'blink-caret .75s step-end infinite'
    }
  },
  plugins: [],
}

