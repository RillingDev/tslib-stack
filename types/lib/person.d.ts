import { IAnimal, knownAnimalSpecies } from "./animal";
/**
 * IPerson say method type
 */
declare type sayFn = (msg?: string) => string;
/**
 * IPerson Interface
 */
interface IPerson extends IAnimal {
    readonly species: knownAnimalSpecies.human;
    readonly say: sayFn;
}
/**
 * Person class
 *
 * @public
 * @class
 * @name Person
 * @param {string} name
 * @param {number} age
 */
declare class Person implements IPerson {
    species: knownAnimalSpecies.human;
    age: number;
    private name;
    constructor(name: string, age?: number);
    /**
     * Returns formatted person string
     *
     * @public
     * @param {string} [msg="Hello!"]
     * @returns {string}
     */
    say(msg?: string): string;
}
export { Person, IPerson, sayFn };
