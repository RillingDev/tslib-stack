const enum knownSpecies {
    cell = "Cell",
    frog = "Frog",
    fish = "Fish",
    human = "Human"
}

interface ILifeform {
    species: knownSpecies;
    age: number;
}

export { knownSpecies, ILifeform };
