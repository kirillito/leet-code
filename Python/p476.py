class Solution:
    def findComplement(self, num: int) -> int:
        mul = 1
        res = 0

        while num>1:
            if (num % 2 == 0):
                res = res + mul
            mul = mul * 2
            num >>= 1
        return res


s = Solution()        
res = s.findComplement(5)
print(res)

res = s.findComplement(1)
print(res)

res = s.findComplement(2)
print(res)
