const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#A8FF35',
      },

      fontFamily: {
        efrra: ['var(--font-effra)', ...fontFamily.sans],
      },

      backgroundImage: {
        hero: 'url("/icon/hero-line.svg")',
        arrowRight: 'url("/icon/right-arrow.svg")',
      },
    },
  },
  plugins: [],
};
