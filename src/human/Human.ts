import type { Animal } from "./Animal.js";
import { AnimalSpecies } from "./Animal.js";

/**
 * Human implementation of {@link Animal}.
 */
export class Human implements Animal {
	readonly species: AnimalSpecies.HUMAN;
	readonly age: number;
	readonly #name: string;

	/**
	 * Creates a new {@link Human}.
	 *
	 * @param name Name of the human
	 * @param age Age of the human.
	 */
	constructor(name: string, age = 0) {
		this.species = AnimalSpecies.HUMAN;
		this.age = age;
		this.#name = name;
	}

	/**
	 * Creates a string for this human saying something.
	 *
	 * @param msg Message to say, defaults to "Hello!".
	 * @returns String this human is saying.
	 */
	say(msg = "Hello!"): string {
		return `${this.#name} ${this.#getMetaData()}: ${msg}`;
	}

	#getMetaData(): string {
		return `[${this.species}, Age ${this.age}]`;
	}
}
