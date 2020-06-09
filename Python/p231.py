class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n <= 0:
            return False
        
        return (n & (n-1))==0
        
        
s = Solution()
res = s.isPowerOfTwo(0)
print(res)

res = s.isPowerOfTwo(1)
print(res)

res = s.isPowerOfTwo(16)
print(res)

res = s.isPowerOfTwo(218)
print(res)