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
class Human implements IAnimal {
    readonly species: AnimalSpecies.HUMAN;
    readonly age: number;
    private readonly name: string;

    constructor(name: string, age: number = 0) {
        this.species = AnimalSpecies.HUMAN;
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
    public say(msg: string = "Hello!"): string {
        return `${this.name}(${this.age}): ${msg}`;
    }
}

export { Human };
