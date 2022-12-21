/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
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
        'ali-yellow': '#ffca28',
        'ali-blue': '#01579b',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
};
