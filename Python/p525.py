from typing import List

class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        maxLength = 0
        currentSum = 0
        sumMap = {}
        sumMap[0] = -1
  
        for i in range(0,len(nums)):
            if nums[i] == 0:
                currentSum -= 1
            else:
                currentSum += 1
                
            if currentSum in sumMap:
                maxLength = max(maxLength, i-sumMap[currentSum])
            else:
                sumMap[currentSum] = i
            
        return maxLength
        
s = Solution()        
res = s.findMaxLength([0])
print(res)

res = s.findMaxLength([0,1])
print(res)

res = s.findMaxLength([1,0,1])
print(res)

res = s.findMaxLength([0,1,1,1,0])
print(res)

res = s.findMaxLength([1,0,1,1,0,1,1])
print(res)