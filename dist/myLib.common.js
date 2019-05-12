'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Human implementation of {@link IAnimal}.
 */
class Human {
    /**
     * Creates a new {@link Human}
     *
     * @param name Name of the human
     * @param age Age of the human.
     */
    constructor(name, age = 0) {
        this.species = "Human" /* HUMAN */;
        this.age = age;
        this.name = name;
    }
    /**
     * Creates a string for this human saying something.
     *
     * @param msg Message to say, defaults to "Hello!".
     * @returns String this human is saying.
     */
    say(msg = "Hello!") {
        return `${this.name}(${this.age}): ${msg}`;
    }
}

/**
 * A {@link Human} called Betty.
 */
const betty = new Human("Betty", 20);

/**
 * A {@link Human} called Steve.
 */
const steve = new Human("Steve", 19);

exports.Human = Human;
exports.betty = betty;
exports.steve = steve;
