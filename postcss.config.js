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
const postcssClearfix = require('postcss-clearfix');
const pxtorem = require('postcss-pxtorem')({
  replace: false,
});
const postcssHexrgba = require('postcss-hexrgba');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
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
    postcssClearfix,
    pxtorem,
    postcssHexrgba,
    postcssFlexbugsFixes,
    cssMqpacker,
    autoprefixer,
    postcssSorting,
    validator,
    postcssReporter,
  ],
};
