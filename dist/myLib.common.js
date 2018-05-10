'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Person class
 *
 * @public
 * @class
 * @name Person
 * @param {string} name
 * @param {number} age
 */
class Person {
    constructor(name, age = 0) {
        this.species = "Human" /* human */;
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
const betty = new Person("Betty", 20);

/**
 * Steve
 *
 * @public
 * @name steve
 * @memberof People
 */
const steve = new Person("Steve", 19);

/**
 * Person instances
 *
 * @public
 * @namespace People
 */

exports.Person = Person;
exports.betty = betty;
exports.steve = steve;
