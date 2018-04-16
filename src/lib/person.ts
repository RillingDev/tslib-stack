import { ILifeform } from "./lifeform";

type sayFn = (msg?: string) => string;

interface IPerson extends ILifeform {
    name: string;
    say: sayFn;
}

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
    public species: string = "Human";
    public name: string;
    public age: number;
    constructor(name: string, age: number = 0) {
        this.name = name;
        this.age = age;
    }
    /**
     * Returns formatted person string
     *
     * @param {string} [msg=MSG_DEFAULT]
     * @returns {string}
     */
    public say(msg: string = "Hello!"): string {
        return `${this.name}(${this.age}): ${msg}`;
    }
}

export { Person, IPerson, sayFn };
