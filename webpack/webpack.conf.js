require('babel-register');

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const data = require('../src/data');
const env = process.env.NODE_ENV || 'development';
const publicPath = process.env.PUBLIC_PATH || "/";
const JSDOM = require("jsdom").JSDOM;
const dom = new JSDOM('');
global.document = dom.window.document;
global.window = document.defaultView;
global.window.document = global.document;
global.self = global.window;
global.navigator = global.window.navigator;

module.exports = {
  entry: "./src/entry",
  output: {
    path: path.resolve(__dirname, '../dist/' + env),
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
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader'
      }]
    }, {
      test: /\.(css|scss)$/, loader: ['style-loader', 'css-loader', 'sass-loader']
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
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        PUBLIC_PATH: JSON.stringify(publicPath)
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('bundle.css'),
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, { meta: data.meta })
  ]
};
