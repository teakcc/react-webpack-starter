/**
 * Webpack Base Config
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  publicPath: 'http://127.0.0.1:3001/',
};

const isProd = process.NODE_ENV === 'production';

module.exports = {
  // entry: {
  //   vendor: ['react', 'react-dom', 'redux'],
  //   client: './src/index.js',
  // },
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: config.publicPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: isProd
                ? 'images/[name].[hash:8].[ext]'
                : 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(svg|woff2?|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: isProd ? 'fonts/[name].[hash:8].[ext]' : 'fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
