from typing import List

class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        nums.sort(reverse=True);
        return (nums[0]-1)*(nums[1]-1)


s = Solution()        
res = s.maxProduct([3,4,5,2])
print(res)