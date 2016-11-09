/**
 * Webpack Development Config
 */

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  publicPath: 'http://127.0.0.1:3001/'
};

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: config.publicPath,
    filename: 'build.js'
  },
  devServer: {
    port: 3001,
    inline: true,
    hot: true,
    historyApiFallback: true
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
        // loader: 'style!css?sourceMap!sass'
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
