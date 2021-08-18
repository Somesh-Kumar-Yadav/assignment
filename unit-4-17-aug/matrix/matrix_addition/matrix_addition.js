function test(description, callback) {
	console.log(description);
	callback();
}

function expect(received) {
	function __utility(rec) {
		let n = rec.length;
		let m = rec[0].length;
		for (let i = 1; i < n; i++) {
			if (rec[i].length !== m) {
				return "Invalid Matrix";
			}
		}
		sum = 0;
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < m; j++) {
				if (typeof rec[i][j] !== "number") {
					return "Type Error";
				}
				sum += rec[i][j];
			}
		}
		return sum;
	}
	function toBe(expected) {
		const rec = __utility(received);
		if (rec === expected) {
			console.log("Test is passed");
		} else {
			console.log("Test is failed");
			console.log(rec, expected);
		}
	}
	function notToBe(expected) {
		const rec = __utility(received);
		if (rec !== expected) {
			console.log("Test is passed");
		} else {
			console.log("Test is failed");
			console.log(rec, expected);
		}
	}
	return { toBe, notToBe };
}

test("Check sum", function () {
	expect([[1, 2]]).notToBe(4);
	expect([[1, "5"]]).toBe("Type Error");
	expect([
		[1, 2],
		[3, 4],
	]).toBe(10);
	expect([
		[1, 2],
		[3, 4, 5],
	]).toBe("Invalid Matrix");
	expect([
		[1, 2, 3],
		[1, 2, 3],
	]).toBe(12);
	expect([
		[1, 2, "hello"],
		[2, 3],
	]).toBe("Invalid Matrix");
	expect([
		[1, 2, 3],
		[2, 3, 4],
		[3, 4, 5],
	]).toBe(27);
	expect([[0]]).notToBe(1);
});
