import { KnownAnimalSpecies } from "./KnownAnimalSpecies";
import { IPerson } from "./IPerson";
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
    readonly species: KnownAnimalSpecies.HUMAN;
    readonly age: number;
    private readonly name;
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
export { Person };
