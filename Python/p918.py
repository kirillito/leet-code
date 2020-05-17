from typing import List

class Solution:
    def maxSubarraySumCircular(self, A: List[int]) -> int:
        result1 = self.kadane(A)
        
        result2 = 0
        for i in range(0,len(A)):
            result2 += A[i]
            A[i] = -A[i]
            
        result2 = result2 + self.kadane(A)

        if result2 == 0:
            return result1
        else:
            return max(result1, result2)


    def kadane(self, A: List[int]) -> int:
        currentMax = -30001
        totalMax = -30001
        
        for x in A:
            currentMax = max(currentMax, 0) + x
            totalMax = max(totalMax, currentMax)
            
        return totalMax

        
s = Solution()        
res = s.maxSubarraySumCircular([1,-2,3,-2])
print(res)

res = s.maxSubarraySumCircular([5,-3,5])
print(res)

res = s.maxSubarraySumCircular([3,-1,2,-1])
print(res)

res = s.maxSubarraySumCircular([3,-2,2,-3])
print(res)

res = s.maxSubarraySumCircular([-5,-2,-3])
print(res)

