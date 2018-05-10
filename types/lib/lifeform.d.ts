declare const enum knownSpecies {
    cell = "Cell",
    frog = "Frog",
    fish = "Fish",
    human = "Human",
}
interface ILifeform {
    readonly species: knownSpecies;
    readonly age: number;
}
export { knownSpecies, ILifeform };
