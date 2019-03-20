/**
 * Webpack Production Config
 */

const testingConfig = require('./webpack.testing.config');
const merge = require('webpack-merge');

const config = {
  publicPath: 'http://127.0.0.1:3000/'
};

const prodConfig = {
  mode: 'production',
  output: {
    path: __dirname + '/build',
    publicPath: config.publicPath,
    filename: 'static/[name].[chunkhash:8].js',
    chunkFilename: 'static/[name].[chunkhash:8].js'
  }
};

module.exports = merge(testingConfig, prodConfig);
