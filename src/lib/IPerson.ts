import { IAnimal } from "./IAnimal";
import { KnownAnimalSpecies } from "./KnownAnimalSpecies";

/**
 * IPerson Interface
 */
interface IPerson extends IAnimal {
    readonly species: KnownAnimalSpecies.HUMAN;
    readonly say: (msg?: string) => string;
}

export { IPerson };
