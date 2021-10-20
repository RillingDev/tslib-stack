import { betty } from "../src/people/betty";
import { steve } from "../src/people/steve";

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
