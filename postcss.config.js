const pxtorem = require('postcss-pxtorem')({
  replace: false,
});
const postcssHexrgba = require('postcss-hexrgba');
const cssMqpacker = require('css-mqpacker')({
  sort: true,
});
const autoprefixer = require('autoprefixer');
const postcssSorting = require('postcss-sorting')({
  'properties-order': 'alphabetical',
});
const validator = require('postcss-validator');
const postcssReporter = require('postcss-reporter')({
  positionless: 'last',
});

module.exports = {
  plugins: [
    pxtorem,
    postcssHexrgba,
    cssMqpacker,
    autoprefixer,
    postcssSorting,
    validator,
    postcssReporter,
  ],
};
