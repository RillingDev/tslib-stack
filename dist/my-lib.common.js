/**
 * myLib v1.0.0
 * Author: Felix Rilling
 * Homepage: https://github.com/FelixRilling/eslib-stack#readme
 * License: MIT
 */

'use strict';

function foo(foo) {
    return foo.repeat(3);
}

function bar(msg) {
    return console.log(msg);
}

var myString = "fooBar";

var myLib = {
    myString: myString,
    foo: foo,
    bar: bar
};

module.exports = myLib;