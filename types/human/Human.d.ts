import { AnimalSpecies } from "./AnimalSpecies";
import { IAnimal } from "./IAnimal";
/**
 * Human implementation of {@link IAnimal}.
 */
declare class Human implements IAnimal {
    readonly species: AnimalSpecies.HUMAN;
    readonly age: number;
    private readonly name;
    /**
     * Creates a new {@link Human}
     *
     * @param name Name of the human
     * @param age Age of the human.
     */
    constructor(name: string, age?: number);
    /**
     * Creates a string for this human saying something.
     *
     * @param msg Message to say, defaults to "Hello!".
     * @returns String this human is saying.
     */
    say(msg?: string): string;
}
export { Human };
