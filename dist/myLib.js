var myLib = (function (exports) {
'use strict';

var _sPO = Object.setPrototypeOf || function _sPO(o, p) {
  o.__proto__ = p;
  return o;
};

var _construct = typeof Reflect === "object" && Reflect.construct || function _construct(Parent, args, Class) {
  var Constructor,
      a = [null];
  a.push.apply(a, args);
  Constructor = Parent.bind.apply(Parent, a);
  return _sPO(new Constructor(), Class.prototype);
};

/**
 * Add two numbers
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const add = (a, b) => a + b;

const PI = Math.PI;

/**
 * Add Pi to a number
 *
 * @param {number} a
 * @returns {number}
 */

const addPi = a => add(a, PI);

exports.add = add;
exports.addPi = addPi;

return exports;

}({}));
//# sourceMappingURL=myLib.js.map
