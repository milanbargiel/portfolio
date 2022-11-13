/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pharlap: {
          500: '#ae8883',
          700: '#5c1006B3',
        },
        apricot: '#ffefe2',
        purple: {
          500: '#B1ADFC',
          700: '#8D89E0',
        },
      },
      dropShadow: {
        apricot: '0px 20px 10px rgba(240, 224, 209, 0.4)',
      },
    },
  },
  plugins: [],
}
