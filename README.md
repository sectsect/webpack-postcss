# <img src="https://github-sect.s3-ap-northeast-1.amazonaws.com/logo.svg" width="28" height="auto"> webpack-postcss
[![CircleCI](https://circleci.com/gh/sectsect/webpack-postcss.svg?style=svg)](https://circleci.com/gh/sectsect/webpack-postcss)

## ⚒️ This Repo still works-in-progress ⚒️

- webpack 3
  - :icecream: [webpack sweet entry](https://github.com/sectsect/webpack-sweet-entry)
- PostCSS
- Babel (ES6)
- ESLint w/ [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- CircleCI 2.0

### Branches

| Branch | Description |
| ------ | ----------- |
| [master](https://github.com/sectsect/webpack-postcss) | ----- |
| [vuejs](https://github.com/sectsect/webpack-postcss/tree/vuejs) | \+ Vue.js<br>(Default: jQuery only) |
| [sass](https://github.com/sectsect/webpack-postcss/tree/sass) | \+ sass<br>\- PostCSS |

## :bookmark: NOTES
- Rename `.env.example` to `.env` for [dotenv](https://github.com/motdotla/dotenv)
  ```
  $ cp .env.example .env
  ```
  :memo: `.env` file is already set to "ignore" within the `.giignore` file.
