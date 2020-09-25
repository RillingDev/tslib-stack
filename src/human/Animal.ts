import type { AnimalSpecies } from "./AnimalSpecies";

/**
 * Base interface for animal implementations.
 *
 * @internal
 */
interface Animal {
    readonly species: AnimalSpecies;
    readonly age: number;
}

export { Animal };
