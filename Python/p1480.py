from typing import List

class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        for i in range(1,len(nums)):
            nums[i] = nums[i-1]+nums[i]
            
        return nums

s = Solution()        
print(s.runningSum([1,2,3,4]))
print(s.runningSum([1,1,1,1,1]))