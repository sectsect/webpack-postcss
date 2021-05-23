# <img src="https://github-sect.s3-ap-northeast-1.amazonaws.com/logo.svg" width="28" height="auto"> webpack-postcss
[![CircleCI](https://circleci.com/gh/sectsect/webpack-postcss.svg?style=svg)](https://circleci.com/gh/sectsect/webpack-postcss)

## My Personal Boilerplate

- webpack 5
  - Dynamic entry points: w/ [@sect/webpack-sweet-entry](https://github.com/sectsect/webpack-sweet-entry)
- [PostCSS](https://postcss.org/) w/ [postcss-preset-env](https://github.com/csstools/postcss-preset-env)
- [Babel](https://babeljs.io/) w/ [@babel/preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
- [ESLint](https://eslint.org/) w/ [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- [stylelint](https://stylelint.io/)
- [Prettier](https://prettier.io/)
- [husky](https://github.com/typicode/husky) / [lint-staged](https://github.com/okonet/lint-staged)

## Branches

| Branch | Description |
| ------ | ----------- |
| [master](https://github.com/sectsect/webpack-postcss) | [PostCSS](https://postcss.org/) that compliant tomorrow’s CSS syntax as much as possible w/ [postcss-preset-env](http://preset-env.cssdb.org/) |
| [module](https://github.com/sectsect/webpack-postcss/tree/module) | ES Modules `<script type="module">`<br><ul><li>Support for Differential Serving of Modern and Legacy bundle.</li><li>In the next version this branch will be merged into the `master` branch.</li></ul> |
| [sass](https://github.com/sectsect/webpack-postcss/tree/sass) | \+ SASS<br>\- PostCSS |
| [typescript](https://github.com/sectsect/webpack-postcss/tree/typescript) | \+ TypeScript<br>\- JavaScript |
| [react](https://github.com/sectsect/webpack-postcss/tree/react) | Partially use React<br>\+ React<br>(Default: jQuery only) |
| [react-typescript](https://github.com/sectsect/webpack-postcss/tree/react-typescript) | [react](https://github.com/sectsect/webpack-postcss/tree/react) + [typescript](https://github.com/sectsect/webpack-postcss/tree/typescript) |
| [vuejs](https://github.com/sectsect/webpack-postcss/tree/vuejs) | Partially use Vue.js<br>\+ Vue.js<br>(Default: jQuery only) |
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

## Troubleshooting
### Remove Cache (Babel / ESLint / webpack)
```bash
$ rm -rf node_modules/.cache/babel-loader
$ rm -rf node_modules/.cache/eslint-loader
$ rm -rf node_modules/.cache/webpack
# Remove all
$ rm -rf node_modules/.cache
```

## Known Issues

@ https://github.com/fqborges/webpack-fix-style-only-entries/issues/31
```
(node:35675) [DEP_WEBPACK_CHUNK_HAS_ENTRY_MODULE] DeprecationWarning: Chunk.hasEntryModule: Use new ChunkGraph API
(node:35675) [DEP_WEBPACK_CHUNK_ENTRY_MODULE] DeprecationWarning: Chunk.entryModule: Use new ChunkGraph API
(node:35675) [DEP_WEBPACK_MODULE_INDEX] DeprecationWarning: Module.index: Use new ModuleGraph API
(node:35675) [DEP_WEBPACK_DEPRECATION_ARRAY_TO_SET] DeprecationWarning: chunk.files was changed from Array to Set (using Array method 'filter' is deprecated)
```
