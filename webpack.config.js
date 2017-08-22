const path = require('path');
const glob = require("glob");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    entry: toObjectJS(glob.sync('./src/assets/js/**/*.js*')),
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
    devtool: "#inline-source-map"
  },
  {
    entry: toObjectCSS(glob.sync('./src/assets/css/**/*.css*')),
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
  		new ExtractTextPlugin("[name].css")
  	],
    devtool: "#inline-source-map"
  }
];

// functions For multi-files

function dropUnderscoreFiles(obj) {
  var returnobj = {};
  Object.keys(obj).forEach(function(key) {
    var val = this[key]; // this == obj
    if (key.substring(0, 1) != '_') {
      returnobj[key] = val;
    }
  }, obj);

  return returnobj;
}

// @ https://github.com/webpack/webpack/issues/1732#issuecomment-163522781
function toObjectJS(paths) {
  var retjs = {};
  paths.forEach(function(path) {
    retjs[path.split('/').slice(-1)[0].replace('.js', '')] = path;
  });

  return dropUnderscoreFiles(retjs);
}

function toObjectCSS(paths) {
  var retscss = {};
  paths.forEach(function(path) {
    retscss[path.split('/').slice(-1)[0].replace('.css', '')] = path;
  });

  return dropUnderscoreFiles(retscss);
}
