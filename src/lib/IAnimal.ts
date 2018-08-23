import { KnownAnimalSpecies } from "./KnownAnimalSpecies";

/**
 * Animal Interface
 */
interface IAnimal {
    readonly species: KnownAnimalSpecies;
    readonly age: number;
}

export { IAnimal };
