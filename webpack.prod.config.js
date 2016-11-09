/**
 * Webpack Production Config
 */

var webpack =  require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = {
  publicPath: 'http://127.0.0.1:3000/'
};

module.exports = {
  entry: [
    './src/app.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: config.publicPath,
    filename: 'static/build-[chunkhash:8].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('static/build-[contenthash:8].css'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
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
