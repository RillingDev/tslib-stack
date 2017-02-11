var myLib = function () {
    'use strict';

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

    return myLib;
}();