from typing import List

class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        res = []
        for i in range(n):
            res.append(nums[i])
            res.append(nums[i+n])
        return res

s = Solution()        
print(s.shuffle([2,5,1,3,4,7],3))
print(s.shuffle([1,2,3,4,4,3,2,1],4))