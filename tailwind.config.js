/* eslint-disable global-require */
module.exports = {
  purge: {
    // enabled: true,
    content: [
      // './src/**/*.html',
      // './src/**/*.vue',
      // './src/**/*.jsx',
      './dist/**/*.html',
      './dist/**/*.vue',
      './dist/**/*.jsx',
    ],
    // These options are passed through directly to PurgeCSS
    // options: {
    //   safelist: ['bg-red-500', 'px-4'],
    //   blocklist: [/^debug-/],
    //   keyframes: true,
    //   fontFace: true,
    // },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
