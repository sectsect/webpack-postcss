const webpack = require('webpack'),
      path = require('path'),
      glob = require("glob"),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      HappyPack = require("happypack"),
      SvgStore = require('webpack-svgstore-plugin'),
      SpritesmithPlugin = require('webpack-spritesmith'),
      spriteTemplate = require('./src/assets/js/_spriteTemplate');

const isProd = (process.env.NODE_ENV === 'production');

module.exports = [
  {
    entry: toObject(glob.sync('./src/assets/js/**/*.js*'), 'js'),
    output: {
      path: `${__dirname}/dist/assets/js`,
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
    externals: {
      // "jquery": "jQuery"
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: isProd ? false : true,
        comments: false
      }),
      new HappyPack({
        loaders: [{
          path: 'babel-loader',
          query: {
            plugins: [
              'transform-runtime',
            ],
            presets: ['es2015'],
            cacheDirectory: false
          }
        }],
        threads: 2
      }),
      // create svgStore instance object
      new SvgStore.Options({
        svg: {
          style: '',
          class: 'svg-icon-lib'
        },
        svgoOptions: {
          plugins: [
            { removeTitle: false },
            { removeAttrs: {attrs: 'fill'} },
            { removeStyleElement: true },
          ]
        }
      })
    ],
    devtool : isProd ? "" : "#inline-source-map"
  },
  {
    entry: toObject(glob.sync('./src/assets/css/**/*.css*'), 'css'),
    output: {
      path: `${__dirname}/dist/assets/css`,
      filename: '[name].css'
    },
  	module: {
  		rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              { loader: 'css-loader', options: {minimize: true, url: false} },
              { loader: 'postcss-loader' },
            ]
          }),
        },
      ]
  	},
    externals: {},
  	plugins: [
  		new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true,
      }),
      new SpritesmithPlugin({
        src: {
          cwd: path.resolve(__dirname, 'src/assets/images/sprites/icon'),
          glob: '*.png'
        },
        target: {
          image: path.resolve(__dirname, 'dist/assets/images/sprites/icon.png'),
          css: [
            // path.resolve(__dirname, 'src/assets/css/_sprite.css'),
            [path.resolve(__dirname, 'src/assets/css/_sprite.css'), {
              format: 'custom_format'
            }],
          ]
        },
        apiOptions: {
          cssImageRef: "../images/sprites/icon.png"
        },
        retina: '@2x',
        spritesmithOptions: {
          // padding: 10
        },
        customTemplates: {
          'custom_format': spriteTemplate.customFormat,
          'custom_format_retina': spriteTemplate.customFormatRetina
        }
      }),
      new HappyPack({
        cache: true,
        loaders: ['css-loader?minimize=true&url=false!postcss-loader'],
        threads: 4
      })
  	],
    devtool : isProd ? "" : "#inline-source-map"
  }
];

// functions For multi-files
function dropUnderscoreFiles(obj) {
  let returnobj = {};
  Object.keys(obj).forEach(function(key) {
    var val = this[key]; // this == obj
    if (key.substring(0, 1) != '_') {
      returnobj[key] = val;
    }
  }, obj);

  return returnobj;
}

// @ https://github.com/webpack/webpack/issues/1732#issuecomment-163522781
function toObject(paths, ext) {
  let ret = {};
  paths.forEach(function(path) {
    ret[path.split('/').slice(-1)[0].replace(`.${ext}`, '')] = path;
  });

  return dropUnderscoreFiles(ret);
}
