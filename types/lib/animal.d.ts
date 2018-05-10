/**
 * Allowed IAnimal species
 */
declare const enum knownAnimalSpecies {
    frog = "Frog",
    fish = "Fish",
    cat = "Cat",
    human = "Human",
}
/**
 * Animal Interface
 */
interface IAnimal {
    readonly species: knownAnimalSpecies;
    readonly age: number;
}
export { knownAnimalSpecies, IAnimal };
