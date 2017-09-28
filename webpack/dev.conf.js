const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function getEntries(entries) {
  if (process.env.NODE_ENV === 'development') {
    return entries.concat([
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server']
    )
  }
  return entries;
}

const env = process.env.NODE_ENV || 'development';
const publicPath = process.env.PUBLIC_PATH || "/";

module.exports = {
  entry: getEntries(["./src/app"]),
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
    historyApiFallback: true
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