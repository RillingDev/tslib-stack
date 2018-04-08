import { MSG_DEFAULT } from "../constants";
import { IPerson } from "../interfaces";

/**
 * Person class
 *
 * @class
 * @name Person
 * @memberof People
 * @param {string} name
 * @param {number} age
 */
class Person implements IPerson {
    public species = "Human";
    public name;
    public age;
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
    }
    /**
     * Returns formatted person string
     *
     * @param {string} [msg=MSG_DEFAULT]
     * @returns {string}
     */
    public say(msg = MSG_DEFAULT) {
        return `${this.name}(${this.age}): ${msg}`;
    }
}

export { Person };
