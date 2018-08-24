import { betty, steve } from "../src/main";

const personTest = () => {
    describe("Person test", () => {
        it("Betty", () => {
            expect(betty.say("Hi!")).toBe("Betty(20): Hi!");
        });

        it("Steve", () => {
            expect(steve.say()).toBe("Steve(19): Hello!");
        });
    });
};

export { personTest };
