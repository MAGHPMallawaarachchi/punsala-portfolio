/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        serif: ['var(--font-brasika)', 'serif'],
      },
      colors: {
        'light-theme': '#F7F7F7',
        'dark-theme': '#1F1F1F',
        'pink': '#F8B4E3',
        'blue': '#38B8FF',
        'green': '#41C177',
        'light-blue': '#CEEEFF',
        'gray': '#2E2E2E',
      },
      screens: {
        'xs': '400px',
      },
      maxWidth: {
        '10xl': '1680px'
      }
    },
  },
  plugins: [],
};