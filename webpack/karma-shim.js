// ---------------------------------------
// Test Environment Setup
// ---------------------------------------
import 'babel-polyfill'
import chai from 'chai'
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);
global.chai = chai;
global.expect = chai.expect;
global.should = chai.should();

// ---------------------------------------
// Require Tests
// ---------------------------------------
const __karmaWebpackManifest__ = []; // eslint-disable-line
const inManifest = (path) => ~__karmaWebpackManifest__.indexOf(path);

// require all `tests/**/*.spec.js`
const testsContext = require.context('../tests/', true, /\.spec\.js$/);

// only run tests that have changed after the first pass.
const testsToRun = testsContext.keys().filter(inManifest)
;(testsToRun.length ? testsToRun : testsContext.keys()).forEach(testsContext);

