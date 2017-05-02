var myLib = function () {
    'use strict';

    const add = (a, b) => a + b;

    const PI = Math.PI;

    const addPi = a => add(a, PI);

    const myLib = {
        add,
        addPi
    };

    return myLib;
}();