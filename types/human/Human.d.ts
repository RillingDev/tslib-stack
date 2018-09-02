import { AnimalSpecies } from "./AnimalSpecies";
import { IAnimal } from "./IAnimal";
/**
 * Human class
 *
 * @public
 * @class
 * @name Human
 * @param {string} name
 * @param {number} age
 */
declare class Human implements IAnimal {
    readonly species: AnimalSpecies.HUMAN;
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
export { Human };
