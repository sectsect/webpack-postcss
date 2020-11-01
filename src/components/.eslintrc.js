module.exports = {
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  // "env": {
  //   "es6": true,
  //   "browser": true,
  //   "node": true
  // },
  // "parser": "babel-eslint",
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // "indent": [2, 2],
    // "func-names": 0,
    // "import/no-extraneous-dependencies": ["error", {
    //   "devDependencies": true,
    //   "optionalDependencies": false
    // }],
    'import/prefer-default-export': 0,
    'import/no-default-export': 0,
    // "max-len": [2, {
    //   "code": 200,
    //   "tabWidth": 2,
    //   "ignoreUrls": true,
    //   "ignoreComments": true,
    //   "ignoreTrailingComments": true,
    //   "ignoreStrings": true
    // }],
    // "no-alert": 0,
    // "no-console": 0,
    // "no-shadow": 0,
    // "no-undef": 0,
    // "no-unused-vars": 0,
    // "prettier/prettier": "error",
  },
};
