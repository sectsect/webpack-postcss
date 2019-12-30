const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env')({
  stage: 1,  // Default: stage: 2   @ https://cssdb.org/#staging-process
  importFrom: 'src/assets/css/_modules/settings.css',
  autoprefixer: {
    grid: 'autoplace'
  },
  features: {
    'nesting-rules': true
  }
});
const cssMqpacker = require('css-mqpacker')({
  sort: true,
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
    postcssPresetEnv,
    cssMqpacker,
    pxtorem,
    postcssCalc,
    postcssClearfix,
    postcssHexrgba,
    postcssFlexbugsFixes,
    postcssReporter,
  ],
};
