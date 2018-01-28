import {
    PI
} from "../constants";
import add from "./add";

/**
 * Add Pi to a number
 *
 * @param {number} a
 * @returns {number}
 */
const addPi = (a: number): number => add(a, PI);

export default addPi;
