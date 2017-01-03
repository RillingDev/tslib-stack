/**
 * myLib v2.8.0
 * Author: Felix Rilling
 * Repository: git+https://github.com/FelixRilling/eslib-stack.git
 */

const str = "foo";

const foo = function (msg) {
    return str + msg;
};

const bar = function (n) {
    return n * n;
};

const myLib = {
    foo,
    bar
};

export default myLib;
