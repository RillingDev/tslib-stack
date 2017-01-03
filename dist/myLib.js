/**
 * myLib v2.8.0
 * Author: Felix Rilling
 * Repository: git+https://github.com/FelixRilling/eslib-stack.git
 */

var myLib = (function () {
'use strict';

var str = "foo";

var foo = function foo(msg) {
    return str + msg;
};

var bar = function bar(n) {
    return n * n;
};

var myLib = {
    foo: foo,
    bar: bar
};

return myLib;

}());

//# sourceMappingURL=myLib.js.map
