const pxtorem = require('postcss-pxtorem')({
  replace: false,
});
const postcssHexrgba = require('postcss-hexrgba');
const cssMqpacker = require('css-mqpacker')({
  sort: true,
});
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    pxtorem,
    postcssHexrgba,
    cssMqpacker,
    autoprefixer,
  ],
};
