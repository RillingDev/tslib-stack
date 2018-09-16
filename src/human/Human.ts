import { AnimalSpecies } from "./AnimalSpecies";
import { IAnimal } from "./IAnimal";

/**
 * Human class
 */
class Human implements IAnimal {
    readonly species: AnimalSpecies.HUMAN;
    readonly age: number;
    private readonly name: string;

    /**
     * Creates a {@link Human}
     *
     * @param name Name of the human
     * @param age age of the Human.
     */
    constructor(name: string, age: number = 0) {
        this.species = AnimalSpecies.HUMAN;
        this.age = age;
        this.name = name;
    }

    /**
     * Says something.
     *
     * @param msg Message to say.
     */
    public say(msg: string = "Hello!"): string {
        return `${this.name}(${this.age}): ${msg}`;
    }
}

export { Human };
