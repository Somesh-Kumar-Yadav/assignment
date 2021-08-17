function test(description, callback) {
	console.log(description);
	callback();
}

function expect(received) {
	function __utility(rec) {
		if (rec.length !== 2) {
			console.log("invalid no of arguments");
			return "invalid no of arguments";
		}
		if (typeof rec[1] !== "number" || typeof rec[0] !== "number") {
			console.log("invalid");
			return "invalid";
		}
		return Math.round(Math.abs(rec[1] - rec[0]));
	}

	function toBe(expected) {
		const value = __utility(received);
		if (value == expected) {
			console.log("passed");
		} else {
			console.log("failed");
		}
	}
	function notToBe(expected) {
		const value = __utility(received);
		if (value != expected) {
			console.log("passed");
		} else {
			console.log("failed");
		}
	}
	return { toBe, notToBe };
}

test("Checking difference", function () {
	expect([3, 4]).toBe(1);
	expect([4, 3]).toBe(1);
	expect([4, 2]).notToBe(1);
	expect([4, 3]).notToBe(8);
	expect([3, 4, 7]).toBe("invalid no of arguments");
	expect([3, 4]).toBe(1);
	expect([3]).toBe("invalid no of arguments");
});
