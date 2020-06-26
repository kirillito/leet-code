from typing import List

class Solution:
    def xorOperation(self, n: int, start: int) -> int:
        # technically, we don't need an array at all
        res = 0
        
        for i in range(n):
            res = res ^ (start + 2 * i)
            
        return res

s = Solution()        
print(s.xorOperation(5,0))
print(s.xorOperation(4,3))