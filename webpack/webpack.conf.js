require('babel-register');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const data = require('../src/data');
const env = process.env.NODE_ENV || 'dev';
const publicPath = process.env.PUBLIC_PATH || '/';
const JSDOM = require('jsdom').JSDOM;
const dom = new JSDOM('');
global.document = dom.window.document;
global.window = document.defaultView;
global.window.document = global.document;
global.self = global.window;
global.navigator = global.window.navigator;

module.exports = {
  entry: './src/entry',
  output: {
    path: path.resolve(__dirname, '../dist/' + env),
    filename: 'bundle.js',
    publicPath: publicPath,
    libraryTarget: 'umd'
  },
  resolve: {
    modules: [
      './src',
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.css', '.scss', '.svg', '.html', '.ico'],
    alias: {
      '~': 'node_modules'
    }
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
      test: /\.(css|scss)$/,
      loader: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(jpe?g|png|gif|svg|ico)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?limit=1048576',
      options: {
        publicPath: '', // this ideally would be blank or ../ based on route
        name: 'img/[name]-[hash:8].[ext]'
      }
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
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, { meta: data.meta }),
    new ExtractTextPlugin('bundle.css')
  ]
};
