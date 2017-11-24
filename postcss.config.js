const pxtorem = require('postcss-pxtorem')({
  replace: false,
});
const postcssHexrgba = require('postcss-hexrgba');
const cssMqpacker = require('css-mqpacker')({
  sort: true,
});
const autoprefixer = require('autoprefixer')({
  browsers: ['last 2 versions', 'ie >= 11', 'Android >= 4', 'ios_saf >= 8'],
});

module.exports = {
  plugins: [
    pxtorem,
    postcssHexrgba,
    cssMqpacker,
    autoprefixer,
  ],
};
