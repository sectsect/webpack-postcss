module.exports = {
  plugins: [
    require('postcss-strip-inline-comments'),
    require('postcss-partial-import')({
      prefix: '_',
    }),
    require('postcss-simple-vars')({
      silent: true,
    }),
    require('postcss-css-variables'),
    require('postcss-mixins'),
    require('postcss-nested'),
    require('postcss-conditionals'),
    require('postcss-for'),
    require('postcss-extend'),
    require('postcss-calc'),
    require('css-mqpacker')({
      sort: true,
    }),
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie >= 9', 'Android >= 4', 'ios_saf >= 8'],
    }),
    require('pixrem'),
    require('postcss-reporter')({
      positionless: 'last',
    }),
  ],
};
