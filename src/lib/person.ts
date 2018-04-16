import { ILifeform, knownSpecies } from "./lifeform";

type sayFn = (msg?: string) => string;

interface IPerson extends ILifeform {
    species: knownSpecies.human;
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
    public species: knownSpecies.human;
    public name: string;
    public age: number;
    constructor(name: string, age: number = 0) {
        this.species = knownSpecies.human;
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
