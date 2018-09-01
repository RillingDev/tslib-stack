'use strict';

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

describe("Main test", () => {
    it("Human export", () => {
        expect(Human).toBeDefined();
    });
});

describe("Human test", () => {
    it("Betty", () => {
        expect(betty.say("Hi!")).toBe("Betty(20): Hi!");
    });
    it("Steve", () => {
        expect(steve.say()).toBe("Steve(19): Hello!");
    });
});
