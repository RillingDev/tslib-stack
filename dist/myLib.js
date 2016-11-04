/**
 * myLib v2.4.0
 * Author: Felix Rilling
 * Repository: git+https://github.com/FelixRilling/eslib-stack.git
 */

var myLib = (function () {
'use strict';

var foo = function (foo) {
    return foo.repeat(3);
};

var bar = function (msg) {
    return console.log(msg);
};

var myString = "fooBar";

var myLib = {
    myString: myString,
    foo: foo,
    bar: bar
};

return myLib;

}());

//# sourceMappingURL=myLib.js.map
