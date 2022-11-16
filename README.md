# <img src="https://github-sect.s3-ap-northeast-1.amazonaws.com/logo.svg" width="28" height="auto"> webpack-postcss
[![CircleCI](https://circleci.com/gh/sectsect/webpack-postcss.svg?style=svg)](https://circleci.com/gh/sectsect/webpack-postcss)

## My Personal Boilerplate

- webpack 5
  - Dynamic entry points: w/ [@sect/webpack-sweet-entry](https://github.com/sectsect/webpack-sweet-entry)
- [PostCSS](https://postcss.org/) w/ [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- [SWC](https://swc.rs/)
- [ESLint](https://eslint.org/) w/ [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- [Secretlint](https://github.com/secretlint/secretlint)
- [husky](https://github.com/typicode/husky) / [lint-staged](https://github.com/okonet/lint-staged)

## Branches

| Branch | Description |
| ------ | ----------- |
| [master](https://github.com/sectsect/webpack-postcss) | [PostCSS](https://postcss.org/) that compliant tomorrow’s CSS syntax as much as possible w/ [postcss-preset-env](http://preset-env.cssdb.org/) |
| [module](https://github.com/sectsect/webpack-postcss/tree/module) | ES Modules `<script type="module">`<br><ul><li>Support for Differential Serving of Modern and Legacy bundle.</li><li>In the next version this branch will be merged into the `master` branch.</li></ul> |
| [sass](https://github.com/sectsect/webpack-postcss/tree/sass) | \+ SASS<br>\- PostCSS |
| [tailwindcss](https://github.com/sectsect/webpack-postcss/tree/tailwindcss) | \+ Tailwind CSS |
| [typescript](https://github.com/sectsect/webpack-postcss/tree/typescript) | \+ TypeScript<br>\- JavaScript |
| [react](https://github.com/sectsect/webpack-postcss/tree/react) | ☝️ You can also use React partially<br>\+ React |
| [react-typescript](https://github.com/sectsect/webpack-postcss/tree/react-typescript) | [react](https://github.com/sectsect/webpack-postcss/tree/react) + [typescript](https://github.com/sectsect/webpack-postcss/tree/typescript) |
| [vuejs](https://github.com/sectsect/webpack-postcss/tree/vuejs) | ☝️ You can also use Vue.js partially<br>\+ Vue.js |
| [webpack-dev-server](https://github.com/sectsect/webpack-postcss/tree/webpack-dev-server) | \+ webpack-dev-server |

## :beer: Setup

- **Setting for Support Browser (For [Autoprefixer](https://github.com/postcss/autoprefixer) / [SWC](https://swc.rs/) / [postcss-preset-env](https://github.com/csstools/postcss-preset-env))**  
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

## Troubleshooting
### Remove Cache (SWC / ESLint / webpack)
```bash
$ rm -rf node_modules/.cache/swc-loader
$ rm -rf node_modules/.cache/eslint-loader
$ rm -rf node_modules/.cache/webpack
# Remove all
$ rm -rf node_modules/.cache
```

## Known Issues on webpack 5

@ https://github.com/GoogleChromeLabs/size-plugin/issues/40
