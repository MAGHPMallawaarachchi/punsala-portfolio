/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily:{
        serif: ['var(--font-brasika)', 'serif'],
      },
      colors: {
        'light': '#F7F7F7',
        'dark': '#1F1F1F',
        'pink': '#F8B4E3',
        'blue': '#38B8FF',
        'green': '#41C177',
        'light-blue': '#CEEEFF',
        'gray': '#2E2E2E',
        'light-gray': '#E2E2E2',
        'secondary-text': '#CACACA',
      },
      screens:{
        'xsm':'412px',
        'sm':'670px',
        'lg':'1024px',
        'xl':'1280px',
        '2xl':'1536px',
        '3xl':'1920px',
      }
    },
  },
  plugins: [],
};