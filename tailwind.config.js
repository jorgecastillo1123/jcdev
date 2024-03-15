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
        'ali-yellow': '#ffca28',
        'ali-blue': '#01579b',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
};
