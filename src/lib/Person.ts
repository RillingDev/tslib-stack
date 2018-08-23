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
class Person implements IPerson {
    public readonly species: KnownAnimalSpecies.HUMAN;
    public readonly age: number;
    private readonly name: string;
    constructor(name: string, age: number = 0) {
        this.species = KnownAnimalSpecies.HUMAN;
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

export { Person };
