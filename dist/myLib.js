var myLib = (function (exports) {
'use strict';

/**
 * Add two numbers
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
var add = function add(a, b) {
  return a + b;
};

var PI = Math.PI;

/**
 * Add Pi to a number
 *
 * @param {number} a
 * @returns {number}
 */
var addPi = function addPi(a) {
  return add(a, PI);
};

exports.add = add;
exports.addPi = addPi;

return exports;

}({}));
