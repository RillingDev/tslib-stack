'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Human class
 *
 * @public
 * @class
 * @name Human
 * @param {string} name
 * @param {number} age
 */
class Human {
    constructor(name, age = 0) {
        this.species = "Human" /* HUMAN */;
        this.age = age;
        this.name = name;
    }
    /**
     * Returns formatted person string
     *
     * @public
     * @param {string} [msg="Hello!"]
     * @returns {string}
     */
    say(msg = "Hello!") {
        return `${this.name}(${this.age}): ${msg}`;
    }
}

/**
 * Betty
 *
 * @public
 * @name betty
 * @memberof People
 */
const betty = new Human("Betty", 20);

/**
 * Steve
 *
 * @public
 * @name steve
 * @memberof People
 */
const steve = new Human("Steve", 19);

/**
 * Human instances
 *
 * @public
 * @namespace People
 */

exports.Human = Human;
exports.betty = betty;
exports.steve = steve;
