'use strict';

var myString = "fooBar";

function console$1(msg) {
    return console.log(msg);
}

function foo3(foo) {
    return foo.repeat(3);
}

var myLib = {
    myString: myString,
    console: console$1,
    foo3: foo3
};

module.exports = myLib;