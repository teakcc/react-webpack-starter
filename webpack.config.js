var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './scripts/main.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
    publicPath: 'build'
  },
  devServer: {
    port: 3001,
    inline: true
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
    new ExtractTextPlugin('home.css')
  ]
};
