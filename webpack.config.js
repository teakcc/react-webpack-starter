var webpack = require('webpack');

module.exports = {
  entry: './scripts/main.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss?$/,
        loader: 'style!css!sass'
      }
    ]
  }
};
