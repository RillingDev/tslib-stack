import { betty, steve } from "../src/main";

describe("People", () => {
    describe("Betty", () => {
        it("says hi", () => {
            expect(betty.say("Hi!")).toBe("Betty [Human, Age 20]: Hi!");
        });
    });

    describe("Steve", () => {
        it("says hi", () => {
            expect(steve.say("Hi!")).toBe("Steve [Human, Age 19]: Hi!");
        });
    });
});
