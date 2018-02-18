const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const dotenv = require('dotenv').config();
const SvgStore = require('webpack-svgstore-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const WebpackSweetEntry = require('webpack-sweet-entry');
const NotifierPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const spriteTemplate = require('./src/assets/js/_spriteTemplate');

const sourcePath = path.join(__dirname, 'src');
const buildPath = path.join(__dirname, 'dist');
const isProd = (process.env.NODE_ENV === 'production');

// For dotenv
// console.log(process.env.AWS_ACCESS_KEY_ID);

// http://jonnyreeves.co.uk/2016/simple-webpack-prod-and-dev-config/
const getJSPlugins = () => {
  const plugins = [];

  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  }));
  if (isProd) {
    plugins.push(new UglifyJSPlugin({
      parallel: true, // Default number of concurrent runs: os.cpus().length - 1.
      sourceMap: !isProd,
      uglifyOptions: {
        output: {
          comments: false,
        },
      },
    }));
  }
  plugins.push(new HtmlWebpackPlugin({
    filename: '../../index.html',
    template: 'ejs-render-loader!./src/index.ejs',
    chunks: ['commons', 'page-frontpage'],
    minify: {
      collapseWhitespace: true,
      preserveLineBreaks: true,
      collapseInlineTagWhitespace: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      useShortDoctype: true,
    },
  }));
  plugins.push(new ScriptExtHtmlWebpackPlugin({
    // sync: 'important',
    // async: 'commons',
    preload: /\.js$/, // preload: ['commons', 'page-frontpage'],
    defaultAttribute: 'defer',
  }));
  plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    // chunks: WebpackSweetEntry(path.resolve(sourcePath, 'assets/js/**/*.js*'), 'js', 'js'),
    // minChunks: 2,
  }));
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

const getCSSPlugins = () => {
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

module.exports = [
  {
    entry: WebpackSweetEntry(path.resolve(sourcePath, 'assets/js/**/*.js*'), 'js', 'js'),
    output: {
      path: path.resolve(buildPath, 'assets/js'),
      filename: '[name].js',
      publicPath: '/assets/js',
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
    plugins: getJSPlugins(),
    devtool: isProd ? '' : '#inline-source-map',
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
                  minimize: isProd ? { discardComments: { removeAll: true } } : false,
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
    plugins: getCSSPlugins(),
    devtool: isProd ? '' : '#inline-source-map',
  },
];
