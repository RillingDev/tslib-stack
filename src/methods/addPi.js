"use strict";

import {
    PI
} from "../constants";
import add from "./add";

/**
 * Add Pi to a number
 * @param {Number} a
 * @returns {Number}
 */
const addPi = a => add(a, PI);

export default addPi;
