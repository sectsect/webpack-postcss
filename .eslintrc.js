module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["react", "prettier"],
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "rules": {
    "indent": [2, 2],
    "func-names": 0,
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": true,
      "optionalDependencies": false
    }],
    "max-len": [2, {
      "code": 200,
      "tabWidth": 2,
      "ignoreUrls": true,
      "ignoreComments": true,
      "ignoreTrailingComments": true,
      "ignoreStrings": true
    }],
    "no-alert": 0,
    "no-console": 0,
    "no-new": 0,
    "no-shadow": 0,
    "no-tabs": 0,
    "no-undef": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": 0,
    "no-use-before-define": 0,
    "prettier/prettier": "error",
  }
};