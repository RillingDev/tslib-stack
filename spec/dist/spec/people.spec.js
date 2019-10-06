"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../src/main");
describe("People", () => {
    it("Betty", () => {
        expect(main_1.betty.say("Hi!")).toBe("Betty(20): Hi!");
    });
    it("Steve", () => {
        expect(main_1.steve.say()).toBe("Steve(19): Hello!");
    });
});
