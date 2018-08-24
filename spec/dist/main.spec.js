"use strict";

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

const mainTest = () => {
    describe("Main test", () => {
        it("Person export", () => {
            expect(Person).toBeDefined();
        });
    });
};

const personTest = () => {
    describe("Person test", () => {
        it("Betty", () => {
            expect(betty.say("Hi!")).toBe("Betty(20): Hi!");
        });
        it("Steve", () => {
            expect(steve.say()).toBe("Steve(19): Hello!");
        });
    });
};

mainTest();
personTest();
