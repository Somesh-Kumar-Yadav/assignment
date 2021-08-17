function test(description, callback) {
	console.log(description);
	callback();
}

function expect(received) {
	function toBe(expected) {
		if (received === expected) {
			console.log("test has passeed");
			return true;
		} else {
			console.log("test has failed !");
			console.log(`received ${received} expected ${expected}`);
			return false;
		}
	}

	function toBeLessThanEqual(expected) {
		if (received === expected) {
			console.log("test has passeed");
			return true;
		} else {
			console.log("test has failed !");
			console.log(`received ${received} expected ${expected}`);
			return false;
		}
	}

	function __toEqual(exp, rec) {
		let flag = true;
		let expectedLength = Object.keys(exp).length;
		let receivedLength = Object.keys(rec).length;
		if (expectedLength !== receivedLength) {
			return false;
		}
		if (Array.isArray(exp) !== Array.isArray(rec)) {
			return false;
		}
		for (key in exp) {
			if (typeof exp[key] === "object" && typeof rec[key] === "object") {
				flag = __toEqual(exp[key], rec[key]);
				if (!flag) {
					break;
				} else if (exp[key] !== rec[key]) {
					return false;
				}
			}
		}
		return flag;
	}

	function toEqual(expected) {
		const isEqual = __toEqual(expected, received);
		if (isEqual) {
			console.log("Test is passed");
		} else {
			console.log("Test is failed");
		}
	}
	return { toBe, toBeLessThanEqual, toEqual };
}

test("Check object", function () {
	expect({ a: [] }).toEqual({ a: [] });
});
