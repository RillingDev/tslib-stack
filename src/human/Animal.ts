/**
 * Available {@link Animal} species.
 */
export enum AnimalSpecies {
	HUMAN = "Human",
	BUG = "Bug",
	/**
	 * @internal
	 */
	RUBBER_DUCK = "Rubber Duck",
	CAT = "Cat",
}

/**
 * Base interface for animal implementations.
 *
 */
export interface Animal {
	readonly species: AnimalSpecies;
	readonly age: number;
}
