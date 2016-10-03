/**
 * myLib v2.2.0
 * Author: Felix Rilling
 * Homepage: https://github.com/FelixRilling/eslib-stack#readme
 * License: MIT
 */

define('my-lib', function () { 'use strict';

var foo = function (foo) {
    return foo.repeat(3);
}

var bar = function (msg) {
    return console.log(msg);
}

const myString = "fooBar";

const myLib = {
    myString,
    foo,
    bar
};

return myLib;

});
