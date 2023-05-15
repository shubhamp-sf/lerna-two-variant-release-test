'use strict';

const theUncommonPackage = require('..');
const assert = require('assert').strict;

assert.strictEqual(theUncommonPackage(), 'Hello from theUncommonPackage');
console.info('theUncommonPackage tests passed');
