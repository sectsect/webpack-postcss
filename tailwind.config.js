/* eslint-disable global-require */
module.exports = {
  content: [
    // './src/**/*.html',
    // './src/**/*.vue',
    // './src/**/*.jsx',
    './dist/**/*.{html,vue,jsx,tsx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
