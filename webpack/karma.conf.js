var webpack = require('webpack');
var webpackConfig = require('./dev.conf');

module.exports = function (config) {
  var _config = {
    browsers: ['PhantomJS'],

    frameworks: ['mocha', 'chai', 'sinon'],

    reporters: ['mocha'],

    files: [
      '../node_modules/phantomjs-polyfill/bind-polyfill.js',
      {pattern: './karma-shim.js', watched: false}
    ],

    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-phantomjs-launcher"),
      require("karma-sourcemap-loader"),
      require("karma-chai"),
      require("karma-sinon"),
      require("karma-coverage")
    ],

    preprocessors: {
      './karma-shim.js': ['webpack', 'sourcemap']
    },

    mochaReporter: {
      showDiff: true
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    reporters: ["mocha"],

    autoWatch: false,

    colors: true,

    singleRun: true
  };

  _config.reporters.push("coverage");

  _config.coverageReporter = {
    dir: 'coverage/',
    reporters: [
      {
        type: 'json',
        dir: '../coverage',
        subdir: 'json',
        file: 'coverage-final.json'
      },
      {
        type: 'html',
        dir: '../coverage',
        subdir: 'html'
      }
    ]
  };

  config.set(_config);
};
