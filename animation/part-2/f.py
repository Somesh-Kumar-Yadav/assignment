height = [0,1,0,2,1,0,1,3,2,1,2,1]
maximum = max(height) + 1
count = 0
def solve(h,height):
    l = 0
    r = 0
    val = True
    c  = 0
    for i in range(len(height)):
        if height[i] >= h:
            if val :
                l = i
                val = False
            r = i 
    for i in range(l,r):
        if height[i] < h:
            c += 1
    return c

for i in range(maximum):
    count += solve(i,height)
print(count)