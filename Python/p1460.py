from typing import List

class Solution:
    def canBeEqual(self, target: List[int], arr: List[int]) -> bool:
        if (len(target) != len(arr)):
            return False
        
        hashMapTarget = {}
        hashMapArr = {}
        
        for x in target:
            if x not in hashMapTarget:
                hashMapTarget[x] = 0
            hashMapTarget[x] +=1;
        for x in arr:
            if x not in hashMapTarget or hashMapTarget[x] == 0:
                return False
            hashMapTarget[x] -=1;
            
        # for x in hashMapTarget:
        #     if hashMapTarget[x] > 0:
        #         return False
            
        return True


s = Solution()        
res = s.canBeEqual([1,2,3,4], [2,4,1,3])
print(res)

res = s.canBeEqual([7], [7])
print(res)

res = s.canBeEqual([3,7,9], [3,7,11])
print(res)

res = s.canBeEqual([1,1,1,1], [1,1,1,1])
print(res)

res = s.canBeEqual([1,1,2,3], [1,2,3])
print(res)