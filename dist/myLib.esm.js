/**
 * Add two numbers
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */
const add = (a, b) => a + b;

const PI = Math.PI;

/**
 * Add Pi to a number
 * @param {Number} a
 * @returns {Number}
 */
const addPi = a => add(a, PI);

const myLib = {
    add,
    addPi
};

export default myLib;
