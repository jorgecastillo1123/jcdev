/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx}',
  ],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', '"Open Sans"'],
      },
      colors: {
        'brand-red': '#C8102E',
        'brand-red-dark': '#71091B',
        'brand-red-deep': '#31070F',
        'brand-ink': '#16070A',
        'brand-gold': '#F6EB61',
        'brand-green': '#00B2A9',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
};
