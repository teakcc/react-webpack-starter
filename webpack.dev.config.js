/**
 * Webpack Development Config
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  publicPath: 'http://127.0.0.1:3001/'
};

module.exports = {
  devtool: 'source-map',
  entry: './src/app.js',
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
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss?$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
