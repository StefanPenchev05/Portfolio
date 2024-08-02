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
        'dark-bg': '#212428',         // Dark background for sections
        'light-bg': '#F5F5F5',        // Light background for content areas
        'dark-text': '#333333',       // Dark text color for light backgrounds
        'light-text': '#878e99',      // Light text color for dark backgrounds
        'primary-red': '#ff014f',     // Primary button and accent color
        'hover-red': '#C53030',       // Hover state for primary red buttons
        'navbar-text': '#FFFFFF',     // Navbar text color
        'hover-navbar': '#E2E8F0'     // Hover state for navbar text
      }
    },
    fontFamily: {
      primary: ['Poppins', 'sans-serif'],
    },
    lineHeight: {
      b1: '1.9',
    },
    boxShadow: {
      'button': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
    },
  },
  plugins: [],
}

