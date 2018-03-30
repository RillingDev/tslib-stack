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
declare class Person implements IPerson {
    species: string;
    name: any;
    age: any;
    constructor(name: any, age?: number);
    /**
     * Returns formatted person string
     *
     * @param {string} [msg=MSG_DEFAULT]
     * @returns {string}
     */
    say(msg?: string): string;
}
export { Person };
