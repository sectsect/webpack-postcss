// @ https://stylelint.io/user-guide/example-config
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recess-order',
  ],
  plugins: ['stylelint-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['mixin', 'define-mixin', 'if', 'else'],
      },
    ],
    // "declaration-block-no-duplicate-properties": [
    //   true,
    //   {
    //     ignore: ["consecutive-duplicates-with-different-values"]
    //   }
    // ],
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
    'prettier/prettier': true,
  },
};
