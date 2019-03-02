import { AnimalSpecies } from "./AnimalSpecies";
import { IAnimal } from "./IAnimal";

/**
 * Human implementation of {@link IAnimal}.
 */
class Human implements IAnimal {
    public readonly species: AnimalSpecies.HUMAN;
    public readonly age: number;
    private readonly name: string;

    /**
     * Creates a new {@link Human}
     *
     * @param name Name of the human
     * @param age Age of the human.
     */
    constructor(name: string, age: number = 0) {
        this.species = AnimalSpecies.HUMAN;
        this.age = age;
        this.name = name;
    }

    /**
     * Creates a string for this human saying something.
     *
     * @param msg Message to say, defaults to "Hello!".
     * @returns String this human is saying.
     */
    public say(msg: string = "Hello!"): string {
        return `${this.name}(${this.age}): ${msg}`;
    }
}

export { Human };
