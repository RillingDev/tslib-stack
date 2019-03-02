import { AnimalSpecies } from "./AnimalSpecies";

/**
 * Base interface for animal implementations.
 */
interface IAnimal {
    readonly species: AnimalSpecies;
    readonly age: number;
}

export { IAnimal };
