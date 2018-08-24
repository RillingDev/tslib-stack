import { Person } from "../src/main";

const mainTest = () => {
    describe("Main test", () => {
        it("Person export", () => {
            expect(Person).toBeDefined();
        });
    });
};

export { mainTest };
