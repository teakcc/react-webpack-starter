/**
 * Webpack Development Config
 */

const baseConfig = require('./webpack.base.config.js');
const { merge } = require('webpack-merge');

const devConfig = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3001,
    inline: true,
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};

module.exports = merge(baseConfig, devConfig);
