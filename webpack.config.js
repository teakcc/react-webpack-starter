/**
 * webpack config development
 */
'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack/hot/only-dev-server',
    './app.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: 'build'
  },
  devServer: {
    port: 3001,
    inline: true,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      // {
      //   test: /\.scss?$/,
      //   loader: 'style!css!sass'
      // },
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('main.css')
  ]
};
