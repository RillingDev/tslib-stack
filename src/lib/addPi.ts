import { PI } from "../constants";
import add from "./add";

/**
 * Adds pi to a number
 *
 * @function addPi
 * @memberof Add
 * @since 1.0.0
 * @param {number} a
 * @returns {number}
 */
const addPi = (a: number): number => add(a, PI);

export default addPi;
