var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: [
    path.resolve(__dirname, 'src/index.js')
  ],

  output: {
    path: path.resolve(__dirname, 'dist')
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.HotModuleReplacmentPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: 'babel',
      query: {
        presets: ['react', 'es2015']
      }
      exclude: /node_modules/,
      includes: path.join(__dirname, 'src')
    }]
  }

};
