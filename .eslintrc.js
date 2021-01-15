module.exports = {
  "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["@babel", "react", "prettier"],
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jquery": true
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "globals": {
    "window": true,
    "lazySizes": true,
  },
  "rules": {
    "import/no-extraneous-dependencies": [
      "error",
        {
        "devDependencies": true,
        "optionalDependencies": false
      }
    ],
    "sort-imports": 0,
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
        ],
        "alphabetize": {
          "order": "asc"
        },
        "newlines-between": "never",
      },
    ],
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "no-alert": 0,
    "no-console": 0,
    "prettier/prettier": "error",
  }
};
