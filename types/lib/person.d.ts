import { ILifeform, knownSpecies } from "./lifeform";
declare type sayFn = (msg?: string) => string;
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
declare class Person implements IPerson {
    species: knownSpecies.human;
    name: string;
    age: number;
    constructor(name: string, age?: number);
    /**
     * Returns formatted person string
     *
     * @param {string} [msg=MSG_DEFAULT]
     * @returns {string}
     */
    say(msg?: string): string;
}
export { Person, IPerson, sayFn };
