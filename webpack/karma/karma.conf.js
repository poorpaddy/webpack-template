var webpack = require('webpack');
var webpackConfig = require('../webpack.test.conf');

module.exports = function (config) {
  var _config = {
    browsers: ['PhantomJS'],

    frameworks: ['mocha', 'chai', 'sinon'],

    files: [
      '../../node_modules/phantomjs-polyfill/bind-polyfill.js',
      {pattern: './karma-shim.js', watched: false}
    ],

    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-mocha-reporter'),
      require('karma-phantomjs-launcher'),
      require('karma-sourcemap-loader'),
      require('karma-chai'),
      require('karma-sinon'),
      require('karma-coverage'),
      require('karma-coverage-istanbul-reporter')
    ],

    preprocessors: {
      './karma-shim.js': ['webpack', 'sourcemap']
    },

    client: {
      mocha: {
        timeout: 5000
      }
    },

    mochaReporter: {
      showDiff: true
    },

    webpack: webpackConfig,

    webpackServer: {
      noInfo: true
    },

    reporters: ['mocha', 'coverage-istanbul'],

    autoWatch: false,

    colors: true,

    singleRun: true,
    coverageIstanbulReporter: {
      dir: 'coverage/',
      reports: ['cobertura', 'html'],
      fixWebpackSourcePaths: true,
      // skipFilesWithNoCoverage: true,
      'report-config': {
        html: {
          subdir: 'html'
        },
        cobertura: {
          subdir: 'cobertura'
        }
      }
    }
  };

  config.set(_config);
};
