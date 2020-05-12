from typing import List

class Solution:
    def findJudge(self, N: int, trust: List[List[int]]) -> int:
        candidates = [0]*N
        
        for t in trust:
            candidates[t[1]-1] += 1
            candidates[t[0]-1] -= 1
        
        for i in range(0, N):
            if candidates[i] == (N-1):
                return i+1
            
        return -1


s = Solution()        
print(s.findJudge(2, [[1,2]]))
print(s.findJudge(3, [[1,3],[2,3]]))
print(s.findJudge(3, [[1,3],[2,3],[3,1]]))
print(s.findJudge(3, [[1,2],[2,3]]))
print(s.findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]))

