const webpack = require('webpack'),
      path = require('path');
      glob = require("glob");
      ExtractTextPlugin = require("extract-text-webpack-plugin");
      HappyPack = require("happypack");

const isProd = (process.env.NODE_ENV === 'production');

module.exports = [
  {
    entry: toObject(glob.sync('./src/assets/js/**/*.js*'), 'js'),
    output: {
      path: `${__dirname}/dist/assets/js`,
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    },
    externals: {
      "jquery": "jQuery"
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
