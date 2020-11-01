const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const dotenv = require('dotenv').config();
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const { WebpackSweetEntry } = require('@sect/webpack-sweet-entry');
const SizePlugin = require('size-plugin');
const NotifierPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const spriteTemplate = require('./src/assets/js/_spriteTemplate');

const sourcePath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

// For dotenv
// console.log(process.env.AWS_ACCESS_KEY_ID);

// For Detection Environment  @ https://webpack.js.org/api/cli/#environment-options
const isProd = env => env && env.production;
const isDev = env => env && env.development;

// http://jonnyreeves.co.uk/2016/simple-webpack-prod-and-dev-config/
const getJSPlugins = env => {
  const plugins = [];

  plugins.push(
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      R: 'rambda',
    }),
  );
  // plugins.push(new SvgStore.Options({
  //   svg: {
  //     style: '',
  //     class: 'svg-icon-lib',
  //   },
  //   svgoOptions: {
  //     plugins: [
  //       { removeTitle: false },
  //       { removeAttrs: { attrs: 'fill' } },
  //       { removeStyleElement: true },
  //     ],
  //   },
  // }));
  plugins.push(
    new SVGSpritemapPlugin(path.resolve(sourcePath, 'assets/images/svg/raw/**/*.svg'), {
      output: {
        filename: '../../../dist/assets/images/svg/symbol.svg',
        svgo: {
          plugins: [
            { removeTitle: false },
            { removeAttrs: { attrs: 'fill' } },
            { removeStyleElement: true },
          ],
        },
      },
      sprite: {
        prefix: 'icon-',
      },
    }),
  );
  if (isProd(env)) {
    plugins.push(new SizePlugin());
  }
  if (isDev(env)) {
    plugins.push(
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: './src/assets/ts/**/*',
        }
      }),
    );
    plugins.push(
      new ForkTsCheckerNotifierWebpackPlugin({
        skipSuccessful: true,
        title: 'TypeScript',
      }),
    );
    plugins.push(
      new BundleAnalyzerPlugin({
        // analyzerMode: 'static',
        // reportFilename: path.join(__dirname, 'report.html'),
        openAnalyzer: false,
      }),
    );
  }
  plugins.push(
    new NotifierPlugin({
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: `${severity}: ${error.name}`,
          sound: 'Bottle',
          subtitle: error.file || '',
        });
      },
    }),
  );

  return plugins;
};

const getCSSPlugins = env => {
  const plugins = [];

  plugins.push(
    new FixStyleOnlyEntriesPlugin({
      silent: true,
    }),
  );
  plugins.push(
    new StyleLintPlugin({
      files: 'src/assets/css/**/*.css',
      lintDirtyModulesOnly: true,
      fix: true,
    }),
  );
  plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].css',
      allChunks: true,
    }),
  );
  // plugins.push(new SpritesmithPlugin({
  //   src: {
  //     cwd: path.resolve(sourcePath, 'assets/images/sprites/icon'),
  //     glob: '*.png',
  //   },
  //   target: {
  //     image: path.resolve(buildPath, 'assets/images/sprites/icon.png'),
  //     css: [
  //       [path.resolve(sourcePath, 'assets/css/_sprite.css'), {
  //         format: 'custom_format',
  //       }],
  //     ],
  //   },
  //   apiOptions: {
  //     cssImageRef: '../images/sprites/icon.png',
  //   },
  //   retina: '@2x',
  //   spritesmithOptions: {
  //     // padding: 10
  //   },
  //   customTemplates: {
  //     custom_format: spriteTemplate.customFormat,
  //     custom_format_retina: spriteTemplate.customFormatRetina,
  //   },
  // }));
  if (isProd(env)) {
    plugins.push(
      new OptimizeCssAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
      }),
    );
    plugins.push(new SizePlugin());
  }
  plugins.push(
    new NotifierPlugin({
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: `${severity}: ${error.name}`,
          sound: 'Bottle',
          subtitle: error.file || '',
        });
      },
    }),
  );

  return plugins;
};

module.exports = env => [
  {
    entry: WebpackSweetEntry(path.resolve(sourcePath, 'assets/ts/**/*.ts*'), 'ts', 'ts'),
    output: {
      path: path.resolve(buildPath, 'assets/js'),
      filename: '[name].js',
    },
    // Persistent Caching @ https://github.com/webpack/changelog-v5/blob/master/guides/persistent-caching.md
    cache: { // Run 'rm -rf node_modules/.cache/webpack' to remove cache.
      type: 'filesystem',
      buildDependencies: {
        config: [ __filename ]
      },
      name: `${Object.keys(env)[0]}`,
    },
    module: {
      rules: [
        {
          // test: /\.(ts|js)$/,
          test: /\.(t|j)sx?$/,
          exclude: /node_modules/,
          // test: /\.(mjs|js)$/,
          // exclude: /node_modules\/(?!(rambda|quicklink)\/).*/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
            {
              loader: 'eslint-loader',
              options: {
                fix: true,
                failOnError: true,
                cache: false,
              },
            },
          ],
        },
        // Modernizr
        {
          test: /\.modernizrrc.js$/,
          use: ['@sect/modernizr-loader'],
        },
        {
          test: /\.modernizrrc(\.json)?$/,
          use: ['@sect/modernizr-loader', 'json-loader'],
        },
        // Modernizr
      ],
    },
    externals: {
      // jquery: 'jQuery',
    },
    // Modernizr
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
      modules: ['node_modules'],
      alias: {
        modernizr$: path.resolve(__dirname, '.modernizrrc'),
      },
    },
    // Modernizr
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'commons',
            chunks: 'initial',
            minChunks: 2,
          },
        },
      },
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            compress: {
              drop_console: true,
            },
            output: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
    },
    plugins: getJSPlugins(env),
    devtool: isProd(env) ? false : 'inline-cheap-source-map',
    performance: {
      hints: isProd(env) ? 'warning' : false,
      maxEntrypointSize: 300000, // The default value is 250000 (bytes)
    },
  },
  {
    entry: WebpackSweetEntry(path.resolve(sourcePath, 'assets/css/**/*.css'), 'css', 'css'),
    output: {
      path: path.resolve(buildPath, 'assets/css'),
      // filename: '[name].css',
    },
    // Persistent Caching @ https://github.com/webpack/changelog-v5/blob/master/guides/persistent-caching.md
    cache: { // Run 'rm -rf node_modules/.cache/webpack' to remove cache.
      type: 'filesystem',
      buildDependencies: {
        config: [ __filename ]
      },
      name: `${Object.keys(env)[0]}`,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false,
              },
            },
            { loader: 'postcss-loader' },
          ],
        },
      ],
    },
    externals: {},
    resolve: {
      modules: ['node_modules'],
    },
    plugins: getCSSPlugins(env),
    devtool: isProd(env) ? false : 'inline-cheap-source-map',
    performance: {
      hints: isProd(env) ? 'warning' : false,
      maxEntrypointSize: 300000, // The default value is 250000 (bytes)
    },
  },
];
