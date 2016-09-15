var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './scripts/main.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
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
      {
        test: /\.scss?$/,
        loader: 'style!css!sass'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
