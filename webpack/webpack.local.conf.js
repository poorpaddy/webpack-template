const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const env = process.env.NODE_ENV || 'development';
const publicPath = process.env.PUBLIC_PATH || "/";
const data = require('../src/data');

module.exports = {
  entry: "./src/entry",
  output: {
    path: "/dist",
    filename: 'bundle.js',
    publicPath: publicPath,
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [
      './src',
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.css', '.scss', '.svg', '.html', '.ico']
  },
  devtool: 'eval-source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.(css|scss)$/,loader: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(jpg|png)$/,
      loader: 'file-loader',
      options: {
        name: 'images/[name].[ext]'
      },
    }, {
      test: /\.(mp4)$/,
      loader: 'file-loader',
      options: {
        name: 'videos/[name].[ext]'
      },
    }]
  },
  devServer: {
    historyApiFallback: true,
    https: true,
    port: 443,
    inline: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        PUBLIC_PATH: JSON.stringify(publicPath)
      }
    }),
    new ExtractTextPlugin('style.css'),
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, { meta: data.meta }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
