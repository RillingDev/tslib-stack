import { IAnimal, knownAnimalSpecies } from "./animal";

/**
 * IPerson say method type
 */
type sayFn = (msg?: string) => string;

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
class Person implements IPerson {
    public species: knownAnimalSpecies.human;
    public age: number;
    private name: string;
    constructor(name: string, age: number = 0) {
        this.species = knownAnimalSpecies.human;
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

export { Person, IPerson, sayFn };
