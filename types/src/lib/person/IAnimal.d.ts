import { AnimalSpecies } from "./AnimalSpecies";

/**
 * Animal Interface
 */
interface IAnimal {
    readonly species: AnimalSpecies;
    readonly age: number;
}
export { IAnimal };
