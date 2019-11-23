const postcssImport = require('postcss-import');
const postcssStripInlineComments = require('postcss-strip-inline-comments');
// const postcssMixins = require('postcss-mixins');
// const postcssNested = require('postcss-nested');
// const postcssConditionals = require('postcss-conditionals');
// const postcssFor = require('postcss-for');
// const postcssExtend = require('postcss-extend');
const cssMqpacker = require('css-mqpacker')({
  sort: true,
});
const postcssPresetEnv = require('postcss-preset-env')({
  stage: 1,  // Default: stage: 2   @ https://cssdb.org/#staging-process
  autoprefixer: {
    grid: 'autoplace'
  },
  features: {
    'nesting-rules': true
  }
});
const pxtorem = require('postcss-pxtorem')({
  replace: false,
});
const postcssCalc = require('postcss-calc');
const postcssClearfix = require('postcss-clearfix');
const postcssHexrgba = require('postcss-hexrgba');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssReporter = require('postcss-reporter')({
  positionless: 'last',
});

module.exports = {
  plugins: [
    postcssImport,
    postcssStripInlineComments,
    // postcssMixins,
    // postcssNested,
    // postcssConditionals,
    // postcssFor,
    // postcssExtend,
    cssMqpacker,
    postcssPresetEnv,
    pxtorem,
    postcssCalc,
    postcssClearfix,
    postcssHexrgba,
    postcssFlexbugsFixes,
    postcssReporter,
  ],
};
