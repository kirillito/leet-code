from typing import List

class Solution:
    def maxUncrossedLines(self, A: List[int], B: List[int]) -> int:

        lines = {}
        la = len(A)
        lb = len(B)
        
        def getLinesStartingAt(i, j):
            if i>=la or j>=lb:
                return 0
            if (i, j) in lines:
                return lines[i,j]
            if A[i] == B[j]:
                res = 1 + getLinesStartingAt(i+1, j+1)
            else:
                res = max(getLinesStartingAt(i+1,j), getLinesStartingAt(i,j+1))
            lines[i,j] = res
            return res
        
        return getLinesStartingAt(0, 0)
        
        
s = Solution()        
res = s.maxUncrossedLines([1,4,2], [1,2,4])
print(res)

res = s.maxUncrossedLines([2,5,1,2,5], [10,5,2,1,5,2])
print(res)

res = s.maxUncrossedLines([1,3,7,1,7,5], [1,9,2,5,1])
print(res)