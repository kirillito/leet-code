from typing import List

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # easy
#        return bisect.bisect_left(nums, target)
  
        # linear, more coding
#         for i in range(len(nums)):
#             if nums[i] >= target:
#                 return i
            
#         return i+1

        # faster
        left = 0
        right = len(nums)
        while left < right:
            middle = (left + right)//2
            if nums[middle] > target:
                right = middle
            elif nums[middle] < target:
                left = middle + 1
            else:
                return middle

        return left
        
s = Solution()        
res = s.searchInsert([1,3,5,6], 5)
print(res)

res = s.searchInsert([1,3,5,6], 2)
print(res)

res = s.searchInsert([1,3,5,6], 7)
print(res)

res = s.searchInsert([1,3,5,6], 0)
print(res)


