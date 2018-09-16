import { AnimalSpecies } from "./AnimalSpecies";
import { IAnimal } from "./IAnimal";
/**
 * Human class
 */
declare class Human implements IAnimal {
    readonly species: AnimalSpecies.HUMAN;
    readonly age: number;
    private readonly name;
    /**
     * Creates a {@link Human}
     *
     * @param name Name of the human
     * @param age age of the Human.
     */
    constructor(name: string, age?: number);
    /**
     * Says something.
     *
     * @param msg Message to say.
     */
    say(msg?: string): string;
}
export { Human };
