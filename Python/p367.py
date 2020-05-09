class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        if num <= 1:
            return True
        
        for i in range(2,int(num/2)+1):
            if i * i == num:
                return True
            elif i * i > num:
                return False
            
        return False

s = Solution()        
res = s.isPerfectSquare(16)
print(res)

res = s.isPerfectSquare(14)
print(res)

res = s.isPerfectSquare(4)
print(res)