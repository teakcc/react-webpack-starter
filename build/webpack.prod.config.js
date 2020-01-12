/**
 * Webpack Testing Config
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.base.config.js');

const config = {
  publicPath: '/',
};

const testingConfig = {
  mode: 'production',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: config.publicPath,
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
      }),
      new OptimizeCssAssetsPlugin(),
    ],
    splitChunks: {
      cacheGroups: {
        // 按需手动处理，配合 entry 配置
        // common: {
        //   chunks: 'all',
        //   name: 'vendor',
        //   test: 'vendor',
        //   enforce: true,
        // },
        // 自动处理
        default: {
          name: 'common',
          test: /[\\/]node_modules[\\/]|app\/common/,
          chunks: 'initial',
          priority: 1,
        },
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minChunks: 2,
        },
      },
    },
    // 是否需要把 runtime 单独生成一个文件
    // runtimeChunk: {
    //   name: 'runtime',
    // },
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css',
      chunkFilename: '[name].[contenthash:8].css',
    }),
  ],
};

module.exports = merge(baseConfig, testingConfig);
