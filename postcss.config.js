const postcssSortMediaQueries = require('postcss-sort-media-queries');
const postcssCombineSelectors = require('postcss-combine-duplicated-selectors');
const pxtoviewport = require('postcss-px-to-viewport')({
  viewportWidth: 414,
  landscape: false,
  landscapeWidth: 896,
  propList: ['--fs-phone*', 'font-size'],
  replace: true,
  // selectorBlackList: ['/[i]/'],
});
const pxtorem = require('postcss-pxtorem')({
  replace: false,
});
const postcssHexrgba = require('postcss-hexrgba');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
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
    postcssSortMediaQueries,
    postcssCombineSelectors,
    pxtoviewport,
    pxtorem,
    postcssHexrgba,
    postcssFlexbugsFixes,
    autoprefixer,
    postcssSorting,
    validator,
    postcssReporter,
  ],
};
