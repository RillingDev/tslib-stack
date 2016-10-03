/**
 * myLib v2.2.0
 * Author: Felix Rilling
 * Homepage: https://github.com/FelixRilling/eslib-stack#readme
 * License: MIT
 */

'use strict';

var foo = function (foo) {
    return foo.repeat(3);
}

var bar = function (msg) {
    return console.log(msg);
}

var myString = "fooBar";

var myLib = {
    myString: myString,
    foo: foo,
    bar: bar
};

module.exports = myLib;
