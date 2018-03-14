/**
 * Add two numbers
 *
 * @function add
 * @memberof Add
 * @since 1.0.0
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const add = (a, b) => a + b;

/**
 * Value of pi
 */
const PI = Math.PI;

/**
 * Adds pi to a number
 *
 * @function addPi
 * @memberof Add
 * @since 1.0.0
 * @param {number} a
 * @returns {number}
 */
const addPi = (a) => add(a, PI);

/**
 * Functions for addition
 * @namespace Add
 */

export { add, addPi };
