const sum = require("./sum.js");

describe("testing all testcases", () => {
	test("add 1 + 2", () => {
		expect(sum(1, 2)).toBe(3);
	});
});
