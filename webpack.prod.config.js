/**
 * Webpack Production Config
 */

const webpack =  require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  publicPath: 'http://127.0.0.1:3000/'
};

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'redux'],
    client: './src/app.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: config.publicPath,
    filename: 'static/[name].[chunkhash:8].bundle.js',
    chunkFilename: 'static/[name].[chunkhash:8].bundle.js'
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCssAssetsPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendor',
          test: 'vendor',
          enforce: true
        },
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'static/[name].[contenthash:8].bundle.css',
      chunkFilename: 'static/[name].[contenthash:8].bundle.css'
    })
  ]
};
