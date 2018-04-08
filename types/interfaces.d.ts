import { sayFn } from "./types";
interface ILifeform {
    species: string;
    age: number;
}
interface IPerson extends ILifeform {
    name: string;
    say: sayFn;
}
export { IPerson, ILifeform };
