const postcssImport = require('postcss-import');
const postcssSimpleVars = require('postcss-simple-vars')({
  silent: true,
});
const postcssStripInlineComments = require('postcss-strip-inline-comments');
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
const postcssSortMediaQueries = require('postcss-sort-media-queries');
const autoprefixer = require('autoprefixer')({
  grid: 'autoplace',
});
const postcssSorting = require('postcss-sorting')({
  'properties-order': 'alphabetical',
});
const validator = require('postcss-validator');
const postcssReporter = require('postcss-reporter')({
  positionless: 'last',
});

module.exports = {
  plugins: [
    postcssImport,
    postcssStripInlineComments,
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
    postcssSortMediaQueries,
    autoprefixer,
    postcssSorting,
    validator,
    postcssReporter,
  ],
};
