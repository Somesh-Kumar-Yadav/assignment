const diff = require("./diff.js");

describe("testing all diff testcases", () => {
	test("diff 3- 4", () => {
		expect(diff(3, 4)).toBe(1);
	});
	test("diff 4 - 3", () => {
		expect(diff(4, 3)).toBe(1);
	});
	test("diff 5 - 0", () => {
		expect(diff(5, 0)).toBe(5);
	});
	test("diff 1.0 - 2.0", () => {
		expect(diff(1.0, 2.0)).toBe(1);
	});
	test("diff 1.0 - true", () => {
		expect(diff(1.0, true)).toBe("invalid");
	});
	test("diff 1.0 - 2.0", () => {
		expect(diff(1.0, 2.0, 7.0)).toBe("invalid no of arguments");
	});
});
