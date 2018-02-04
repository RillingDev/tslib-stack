const myLib = require("../dist/myLib.common");

describe("Main test", () => {
    it("Normal case", () => {
        expect(myLib.add(1, 1)).toBe(2);
    });
});
