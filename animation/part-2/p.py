grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]] 
k = 1
minimum = len(grid)*len(grid[0]) + 1
def solve(grid,r,c,k,count):
    if r >= len(grid) or c >= len(grid[0]) or r < 0 or c < 0:
        return 
    if r == len(grid)-1 and c == len(grid[0])-1:
        global minimum
        minimum = min(minimum,count)
        return
    if grid[r][c] == 1 and k <= 0:
        return
    if grid[r][c] == 1 and k > 0:
        k -= 1
        solve(grid,r+1,c,k,count+1)
        solve(grid,r-1,c,k,count+1)
        solve(grid,r,c+1,k,count+1)
        solve(grid,r,c-1,k,count+1)
        return
    grid[r][c] = 1
    solve(grid,r+1,c,k,count+1)
    solve(grid,r-1,c,k,count+1)
    solve(grid,r,c+1,k,count+1)
    solve(grid,r,c-1,k,count+1)
    grid[r][c] = 0
    return
solve(grid,0,0,k,0)
if minimum == len(grid)*len(grid[0]) + 1:
    print(-1)
else:
    print(minimum)
    