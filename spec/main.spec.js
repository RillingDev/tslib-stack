"use strict";

const myLib = require("../dist/myLib.common.js");

describe("Main test", function () {
    it("Normal case", function () {
        expect(myLib.add(1, 1)).toBe(2);
    });
});
