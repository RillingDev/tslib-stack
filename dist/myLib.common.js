'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Human class
 */
class Human {
    /**
     * Creates a {@link Human}
     *
     * @param name Name of the human
     * @param age age of the Human.
     */
    constructor(name, age = 0) {
        this.species = "Human" /* HUMAN */;
        this.age = age;
        this.name = name;
    }
    /**
     * Says something.
     *
     * @param msg Message to say.
     */
    say(msg = "Hello!") {
        return `${this.name}(${this.age}): ${msg}`;
    }
}

/**
 * Betty, a {@link Human}.
 */
const betty = new Human("Betty", 20);

/**
 * Steve, a {@link Human}.
 */
const steve = new Human("Steve", 19);

exports.Human = Human;
exports.betty = betty;
exports.steve = steve;
