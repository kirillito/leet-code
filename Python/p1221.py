class Solution:
    def balancedStringSplit(self, s: str) -> int:
         num = 0
         r = 0
         l = 0
         
         for i in range(len(s)):
             if s[i] == "R":
                 r = r + 1
             elif s[i] == "L":
                 l = l + 1
                 
             if l == r:
                 num = num+1
                 l = 0
                 r = 0
         
         return num
        


s = Solution()        
res = s.balancedStringSplit("RLRRLLRLRL")
print(res)

res = s.balancedStringSplit("RLLLLRRRLR")
print(res)

res = s.balancedStringSplit("LLLLRRRR")
print(res)

res = s.balancedStringSplit("")
print(res)

res = s.balancedStringSplit("RRL")
print(res)
