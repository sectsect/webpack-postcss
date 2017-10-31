# <img src="https://github-sect.s3-ap-northeast-1.amazonaws.com/logo.svg" width="28" height="auto"> webpack-postcss
[![CircleCI](https://circleci.com/gh/sectsect/webpack-postcss.svg?style=svg)](https://circleci.com/gh/sectsect/webpack-postcss)

## ⚒️ This Repo still works-in-progress ⚒️

- webpack 3
  > #### Partials (Support Dynamic entry points:icecream:)   
  > You can create partial JS files that contain little snippets of bundled JS that you can include in other JS files. This is a great way to modularize your JS and help keep things easier to maintain. A partial is simply a JS file named with a leading underscore. You might name it something like `_partial.js`. The underscore lets JS know that the file is only a partial file and that it should not be generated into a JS file.
- PostCSS
- Babel (ES6)
- ESLint w/ [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- CircleCI 2.0

## :bookmark: NOTES
- Rename `.env.example` to `.env` for [dotenv](https://github.com/motdotla/dotenv)
  ```
  $ cp .env.example .env
  ```
  :memo: `.env` file is already set to "ignore" within the `.giignore` file.
