const webpack = require('webpack');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const dotenv = require('dotenv').config();
const { WebpackSweetEntry } = require('@sect/webpack-sweet-entry');
const NotifierPlugin = require('@soda/friendly-errors-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const notifier = require('node-notifier');
const SizePlugin = require('size-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts');
// const SpritesmithPlugin = require('webpack-spritesmith');
// const spriteTemplate = require('./src/assets/js/_spriteTemplate');

const sourcePath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

// For dotenv
// console.log(process.env.AWS_ACCESS_KEY_ID);

// For Detection Environment  @ https://webpack.js.org/api/cli/#environment-options
const isProd = env => env && env.production;
const isDev = env => env && env.development;

// http://jonnyreeves.co.uk/2016/simple-webpack-prod-and-dev-config/
const getJSPlugins = (env, mode) => {
  const plugins = [];

  plugins.push(
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      R: 'rambda',
    }),
  );
  plugins.push(
    new ESLintPlugin({
      // files: ['./src/**/*.ts'],
      context: 'src/assets',
      extensions: ['ts', 'tsx', 'js', 'jsx'],
      fix: true,
      emitError: true,
      lintDirtyModulesOnly: true,
    }),
  );
  plugins.push(
    new SVGSpritemapPlugin(path.resolve(sourcePath, 'assets/images/svg/raw/**/*.svg'), {
      output: {
        filename: '../../../dist/assets/images/svg/symbol.svg',
        svgo: {
          plugins: [
            {
              name: 'addClassesToSVGElement',
              params: {
                classNames: ['svg-icon-lib'],
              },
            },
            {
              name: 'removeTitle',
              active: false,
            },
            {
              name: 'removeAttrs',
              params: {
                attrs: 'fill',
              },
            },
            {
              name: 'removeStyleElement',
            },
          ],
        },
      },
      sprite: {
        prefix: 'icon-',
      },
    }),
  );
  if (isProd(env)) {
    plugins.push(
      new SizePlugin({
        writeFile: false,
      }),
    );
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
        analyzerPort: mode === 'modern' ? 8888 : 9999, // Prevents build errors when running --modern @ https://github.com/coryhouse/react-slingshot/issues/301#issuecomment-475220011
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

  plugins.push(new RemoveEmptyScriptsPlugin());
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
      new SizePlugin({
        writeFile: false,
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

const jsConfig = (mode, env) => {
  return {
    entry: WebpackSweetEntry(path.resolve(sourcePath, 'assets/ts/**/*.ts*'), 'ts', 'ts'),
    output: {
      path: path.resolve(buildPath, 'assets/js'),
      filename: `[name]${mode === 'modern' ? '.esm.js' : '.umd.js'}`,
    },
    // Persistent Caching @ https://github.com/webpack/changelog-v5/blob/master/guides/persistent-caching.md
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
      name: 'js',
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
                // ...env[mode],
                // env: (mode === 'modern') ? babelEnv.modern : babelEnv.legacy,
                envName: mode,
                cacheDirectory: true,
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
      // mainFields: [
      //   // Support for 'body-scroll-lock' on IE11 @ https://github.com/willmcpo/body-scroll-lock/issues/50
      //   ...(mode === 'modern' ? ['browser', 'module', 'main'] : ['browser', 'main', 'module']),
      // ],
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
    plugins: getJSPlugins(env, mode),
    devtool: isProd(env) ? false : 'inline-cheap-source-map',
    performance: {
      hints: isProd(env) ? 'warning' : false,
      maxEntrypointSize: 300000, // The default value is 250000 (bytes)
    },
  };
};

const cssConfig = (env) => {
  return {
    entry: WebpackSweetEntry(path.resolve(sourcePath, 'assets/css/**/*.css'), 'css', 'css'),
    output: {
      path: path.resolve(buildPath, 'assets/css'),
      // filename: '[name].css',
    },
    // Persistent Caching @ https://github.com/webpack/changelog-v5/blob/master/guides/persistent-caching.md
    cache: {
      type: 'filesystem',
      buildDependencies: {
        config: [__filename],
      },
      name: 'css',
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
    optimization: {
      minimizer: [
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
              },
            ],
          },
        }),
      ],
    },
    plugins: getCSSPlugins(env),
    devtool: isProd(env) ? false : 'inline-cheap-source-map',
    performance: {
      hints: isProd(env) ? 'warning' : false,
      maxEntrypointSize: 300000, // The default value is 250000 (bytes)
    },
  };
};

module.exports = (env) => [jsConfig('modern', env), jsConfig('legacy', env), cssConfig(env)];
