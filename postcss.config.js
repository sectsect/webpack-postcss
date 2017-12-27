const postcssStripInlineComments = require('postcss-strip-inline-comments');
const postcssPartialImport = require('postcss-partial-import')({
  prefix: '_',
});
const postcssSimpleVars = require('postcss-simple-vars')({
  silent: true,
});
const postcssCssVariables = require('postcss-css-variables');
const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssConditionals = require('postcss-conditionals');
const postcssFor = require('postcss-for');
const postcssExtend = require('postcss-extend');
const postcssCalc = require('postcss-calc');
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
const validator = require('postcss-validator');
const postcssReporter = require('postcss-reporter')({
  positionless: 'last',
});

module.exports = {
  plugins: [
    postcssStripInlineComments,
    postcssPartialImport,
    postcssSimpleVars,
    postcssCssVariables,
    postcssMixins,
    postcssNested,
    postcssConditionals,
    postcssFor,
    postcssExtend,
    postcssCalc,
    pxtorem,
    postcssHexrgba,
    cssMqpacker,
    autoprefixer,
    validator,
    postcssReporter,
  ],
};
