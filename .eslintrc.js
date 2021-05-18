module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  settings: {
    jest: { version: 26 }
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'import/prefer-default-export': 'off',
    // 'import/no-default-export': 'error',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-alert': 0,
    'no-console': 0,
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
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
    '@typescript-eslint/no-explicit-any': 0,
    'prettier/prettier': 'error',
  },
}
