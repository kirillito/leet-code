class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        if (n == 0):
            return 0;
        
        sums = 0;
        muls = 1;
        
        while (n>=1):
            d = n % 10
            n = n // 10
            sums = sums + d
            muls = muls * d
            
        #print(sums, muls)
            
        return muls - sums

s = Solution()        
res = s.subtractProductAndSum(1231231421)
print(res)