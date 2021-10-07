var grid = [
	[0, 1, 0, 1],
	[0, 1, 0, 0],
	[0, 0, 1, 0],
	[1, 0, 0, 1],
	[0, 1, 0, 0],
];
var k = 18;
var minimum = grid.length * grid[0].length + 1;
function solve(grid, r, c, k, count) {
	if (r >= grid.length || c >= grid[0].length || r < 0 || c < 0) {
		return;
	}
	if (r == grid.length - 1 && c == grid[0].length - 1) {
		minimum = Math.min(minimum, count);
		return;
	}
	if (grid[r][c] == 1 && k <= 0) {
		return;
	}
	if (grid[r][c] == 1 && k > 0) {
		k -= 1;
		solve(grid, r + 1, c, k, count + 1);
		solve(grid, r - 1, c, k, count + 1);
		solve(grid, r, c + 1, k, count + 1);
		solve(grid, r, c - 1, k, count + 1);
		return;
	}
	grid[r][c] = 1;
	solve(grid, r + 1, c, k, count + 1);
	solve(grid, r - 1, c, k, count + 1);
	solve(grid, r, c + 1, k, count + 1);
	solve(grid, r, c - 1, k, count + 1);
	grid[r][c] = 0;
	return;
}
solve(grid, 0, 0, k, 0);
if (minimum == grid.length * grid[0].length + 1) {
	console.log(-1);
} else {
	console.log(minimum);
}
