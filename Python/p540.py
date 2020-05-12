import math
from typing import List

class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        
        start = 0
        end = len(nums)-1
        middle = math.ceil(end/2)
        #print(start, middle, end)
        
        while not (middle == end or middle == start):
            if nums[middle] != nums[middle+1] and nums[middle] != nums[middle-1]:
                return nums[middle]

            if middle%2 == 0:
                if nums[middle] == nums[middle+1]:
                    start = middle
                    middle = middle + math.ceil((end-middle)/2)
                else:
                    end = middle
                    middle = middle - math.ceil((middle-start)/2)
            else:
                if nums[middle] == nums[middle-1]:
                    start = middle
                    middle = middle + math.ceil((end-middle)/2)
                else:
                    end = middle
                    middle = middle - math.ceil((middle-start)/2)
                    
            #print(start, middle, end)
            
        return nums[middle]
        
        
s = Solution()        
res = s.singleNonDuplicate([1,1,2,3,3,4,4,8,8])
print(res)
res = s.singleNonDuplicate([3,3,7,7,10,11,11])
print(res)
res = s.singleNonDuplicate([1,1,2])
print(res)
res = s.singleNonDuplicate([1,2,2])
print(res)
