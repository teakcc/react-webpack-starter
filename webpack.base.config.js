/**
 * Webpack Base Config
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  publicPath: 'http://127.0.0.1:3001/'
};

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'redux'],
    client: './src/index.js'
  },
  output: {
    path: __dirname + '/build',
    publicPath: config.publicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(svg|woff2?|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
