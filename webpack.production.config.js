/**
 * webpack config production
 */
'use strict';

var webpack =  require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './app.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: 'build'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
};
