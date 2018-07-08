const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const dotenv = require('dotenv').config();
const SvgStore = require('webpack-svgstore-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const WebpackSweetEntry = require('webpack-sweet-entry');
const NotifierPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const spriteTemplate = require('./src/assets/js/_spriteTemplate');

const sourcePath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');

// For dotenv
// console.log(process.env.AWS_ACCESS_KEY_ID);

// For Detection Environment  @ https://webpack.js.org/api/cli/#environment-options
const isProd = env => (env && env.production);
const isDev = env => (env && env.development);

// http://jonnyreeves.co.uk/2016/simple-webpack-prod-and-dev-config/
const getJSPlugins = (env) => {
  const plugins = [];

  plugins.push(new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    'window.jQuery': 'jquery',
    // bowser: 'bowser',
    // isMobile: 'ismobilejs',
    R: 'rambda',
  }));
  plugins.push(new SvgStore.Options({
    svg: {
      style: '',
      class: 'svg-icon-lib',
    },
    svgoOptions: {
      plugins: [
        { removeTitle: false },
        { removeAttrs: { attrs: 'fill' } },
        { removeStyleElement: true },
      ],
    },
  }));
  plugins.push(new NotifierPlugin({
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
  }));

  return plugins;
};

const getCSSPlugins = (env) => {
  const plugins = [];

  plugins.push(new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
  }));
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
    plugins.push(new OptimizeCssnanoPlugin({
      cssnanoOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
    }));
  }
  plugins.push(new NotifierPlugin({
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
  }));

  return plugins;
};

module.exports = env => [
  {
    entry: WebpackSweetEntry(path.resolve(sourcePath, 'assets/js/**/*.js*'), 'js', 'js'),
    output: {
      path: path.resolve(buildPath, 'assets/js'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            { loader: 'babel-loader' },
            {
              loader: 'eslint-loader',
              options: {
                fix: true,
                failOnError: true,
              },
            },
          ],
        },
        // Modernizr
        {
          test: /\.modernizrrc.js$/,
          use: ['modernizr-loader'],
        },
        {
          test: /\.modernizrrc(\.json)?$/,
          use: ['modernizr-loader', 'json-loader'],
        },
        // Modernizr
      ],
    },
    externals: {
      // jquery: 'jQuery',
    },
    // Modernizr
    resolve: {
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
        new UglifyJSPlugin({
          uglifyOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
    plugins: getJSPlugins(env),
    devtool: isProd(env) ? false : '#inline-source-map',
    // webpack-dev-server
    devServer: {
      port: 8080, // port
      progress: true,
      inline: true, // inline / iframe
      clientLogLevel: 'info', // none / error / warning / info
      contentBase: path.join(__dirname, 'dist'), // Document root
      publicPath: '/assets/', // Virtual Path
      hot: false, // Enable HMR
    },
    performance: {
      hints: isProd(env) ? 'warning' : false,
      maxEntrypointSize: 300000, // The default value is 250000 (bytes)
    },
  },
  {
    entry: WebpackSweetEntry(path.resolve(sourcePath, 'assets/css/**/*.css'), 'css', 'css'),
    output: {
      path: path.resolve(buildPath, 'assets/css'),
      filename: '[name].css',
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  url: false,
                },
              },
              { loader: 'postcss-loader' },
            ],
          }),
        },
      ],
    },
    externals: {},
    resolve: {
      modules: ['node_modules'],
    },
    plugins: getCSSPlugins(env),
    devtool: isProd(env) ? false : '#inline-source-map',
    performance: {
      hints: isProd(env) ? 'warning' : false,
      maxEntrypointSize: 300000, // The default value is 250000 (bytes)
    },
  },
];
