const cssMqpacker = require('css-mqpacker')({
  sort: true,
});
const autoprefixer = require('autoprefixer')({
  browsers: ['last 2 versions', 'ie >= 11', 'Android >= 4', 'ios_saf >= 8'],
});
const pixrem = require('pixrem');

module.exports = {
  plugins: [
    cssMqpacker,
    autoprefixer,
    pixrem,
  ],
};
