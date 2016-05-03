var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './scripts/app.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devServer: {
    port: 9001,
    historyApiFallback: true
  },
  module: {
    loaders: [
      {test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
      {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.css$/, loader: 'styles!css'}
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};