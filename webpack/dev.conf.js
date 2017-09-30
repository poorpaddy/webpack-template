const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV || 'development';
const publicPath = process.env.PUBLIC_PATH || "/";

module.exports = {
  entry: ["./src/app"],
  output: {
    path: "/dist",
    filename: 'index.[hash].js',
    publicPath: publicPath
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
      test: /\.(css|scss)$/, loader: ['style-loader', 'css-loader', 'sass-loader']
    },{
      test: /\.jsx$/,
      enforce: 'post',
      include: path.resolve('./src'),
      loader: 'istanbul-instrumenter-loader',
      exclude: [/\.spec\.js$/, /node_modules/]
    }]
  },
  devServer: {
    historyApiFallback: true,
    https: true,
    port: 443
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env),
        PUBLIC_PATH: JSON.stringify(publicPath)
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.ejs',
      filename: './index.html'
    }),
    new ExtractTextPlugin('index.[contenthash].css')
  ]
};