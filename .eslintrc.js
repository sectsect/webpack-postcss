module.exports = {
  extends: [
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  plugins: ['@babel', 'react', 'jsx-a11y', 'prettier', 'jest', 'jest-dom', 'testing-library'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  globals: {
    window: true,
    lazySizes: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
      },
    ],
    'sort-imports': 0,
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    // "import/no-default-export": "error",
    'no-alert': 0,
    'no-console': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': 'error',
  },
};
