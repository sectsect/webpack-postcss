const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const dotenv = require('dotenv').config();
const HappyPack = require('happypack');
const SvgStore = require('webpack-svgstore-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');
const WebpackNotifierPlugin = require('webpack-notifier');
const spriteTemplate = require('./src/assets/js/_spriteTemplate');

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
      sourceMap: !isProd,
      uglifyOptions: {
        // ie8: true,
        output: {
          comments: false,
        },
      },
    }));
  }
  plugins.push(new HappyPack({
    loaders: [{
      path: 'babel-loader',
      query: {
        plugins: [
          'transform-runtime',
        ],
        presets: [
          ['env', {
            targets: {
              browsers: ['last 2 versions', 'ie >= 9'],
            },
            modules: false,
          }],
        ],
        cacheDirectory: false,
      },
    }],
    threads: 4,
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
  plugins.push(new WebpackNotifierPlugin({ alwaysNotify: true, skipFirstNotification: true }));

  return plugins;
};

const getCSSPlugins = () => {
  const plugins = [];

  const bool = (isProd) ? JSON.stringify({ discardComments: { removeAll: true } }) : 'false';
  const cssloaders = `css-loader?minimize=${bool}&url=false!postcss-loader`;

  plugins.push(new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
  }));
  plugins.push(new SpritesmithPlugin({
    src: {
      cwd: path.resolve(__dirname, 'src/assets/images/sprites/icon'),
      glob: '*.png',
    },
    target: {
      image: path.resolve(__dirname, 'dist/assets/images/sprites/icon.png'),
      css: [
        // path.resolve(__dirname, 'src/assets/css/_sprite.css'),
        [path.resolve(__dirname, 'src/assets/css/_sprite.css'), {
          format: 'custom_format',
        }],
      ],
    },
    apiOptions: {
      cssImageRef: '../images/sprites/icon.png',
    },
    retina: '@2x',
    spritesmithOptions: {
      // padding: 10
    },
    customTemplates: {
      custom_format: spriteTemplate.customFormat,
      custom_format_retina: spriteTemplate.customFormatRetina,
    },
  }));
  plugins.push(new HappyPack({
    loaders: [cssloaders],
    threads: 4,
  }));
  plugins.push(new WebpackNotifierPlugin({ alwaysNotify: true, skipFirstNotification: true }));

  return plugins;
};

module.exports = [
  {
    entry: toObject(glob.sync('./src/assets/js/**/*.js*'), 'js'),
    output: {
      path: `${__dirname}/dist/assets/js`,
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
      alias: {
        modernizr$: path.resolve(__dirname, '.modernizrrc'),
      },
    },
    // Modernizr
    plugins: getJSPlugins(),
    devtool: isProd ? '' : '#inline-source-map',
  },
  {
    entry: toObject(glob.sync('./src/assets/css/**/*.css*'), 'css'),
    output: {
      path: `${__dirname}/dist/assets/css`,
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
                  // minimize: {
                  //   discardComments: { removeAll: true },
                  // },
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
    plugins: getCSSPlugins(),
    devtool: isProd ? '' : '#inline-source-map',
  },
];

// functions For multi-files
function dropUnderscoreFiles(obj) {
  const returnobj = {};
  Object.keys(obj).forEach(function (key) {
    const val = this[key]; // this == obj
    if (key.substring(0, 1) !== '_') {
      returnobj[key] = val;
    }
  }, obj);

  return returnobj;
}

// @ https://github.com/webpack/webpack/issues/1732#issuecomment-163522781
function toObject(paths, ext) {
  const ret = {};
  paths.forEach((path) => {
    ret[path.split('/').slice(-1)[0].replace(`.${ext}`, '')] = path;
  });

  return dropUnderscoreFiles(ret);
}
