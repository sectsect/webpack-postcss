# <img src="https://github-sect.s3-ap-northeast-1.amazonaws.com/logo.svg" width="28" height="auto"> webpack-postcss
[![CircleCI](https://circleci.com/gh/sectsect/webpack-postcss.svg?style=svg)](https://circleci.com/gh/sectsect/webpack-postcss)

## My personal Boilerplate

- webpack 4
  - :icecream: [webpack sweet entry](https://github.com/sectsect/webpack-sweet-entry)
- [PostCSS](https://github.com/postcss/postcss)
- [Babel](https://babeljs.io/) + [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
- [ESLint](https://eslint.org/) w/ [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- CircleCI 2.0

## Branches

| Branch | Description |
| ------ | ----------- |
| [master](https://github.com/sectsect/webpack-postcss) | PostCSS that compliant tomorrow’s CSS syntax as much as possible w/ [postcss-preset-env](http://preset-env.cssdb.org/) |
| [module](https://github.com/sectsect/webpack-postcss/tree/module) | ES Modules `<script type="module">`<br>* Support to split serving Modern and Legacy Bundle<br>* In the next version this branch will be merged into the `master` branch. |
| [postcss-similar-to-sass](https://github.com/sectsect/webpack-postcss/tree/postcss-similar-to-sass) | PostCSS, but have features similar to SASS (Nesting, Conditional Statement, `extend`, `mixin`, `for`) |
| [sass](https://github.com/sectsect/webpack-postcss/tree/sass) | \+ SASS<br>\- PostCSS |
| [TypeScript](https://github.com/sectsect/webpack-postcss/tree/feature/typescript) | \+ TypeScript<br>\- JavaScript |
| [vuejs](https://github.com/sectsect/webpack-postcss/tree/vuejs) | \+ Vue.js<br>(Default: jQuery only) |
| [webpack-dev-server](https://github.com/sectsect/webpack-postcss/tree/webpack-dev-server) | \+ webpack-dev-server |

## :beer: Setup

- **Setting for Support Browser (For [Autoprefixer](https://github.com/postcss/autoprefixer) / [babel-preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env) / [postcss-preset-env](https://github.com/csstools/postcss-preset-env))**  
  Edit the following Line  
  [package.json](https://github.com/sectsect/webpack-postcss/blob/master/package.json#L13)  

  :memo: See [Browserslist](https://github.com/ai/browserslist) Doc

## :hamburger: Commands

See [package.json](https://github.com/sectsect/webpack-postcss/blob/master/package.json#L6-L11)

| npm script | Description |
| ------ | ----------- |
| `npm run dev` | Watching for Dev |
| `npm run build` | Building for Deploy |

## :bookmark: NOTES
- Rename `.env.example` to `.env` for [dotenv](https://github.com/motdotla/dotenv)
  ```
  $ mv .env.example .env
  ```
  :memo: `.env` file is already set to "ignore" within the `.giignore` file.
