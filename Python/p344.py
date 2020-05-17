from typing import List

class Solution:
    def reverseString(self, s: List[str]) -> None:
#        Feels like cheating, but this solution is accepted by LeetCode and is faster than 99% of Python submissions
#        s = s.reverse()
        i = 0
        while i < (len(s)-i-1):
            tmp = s[i]
            s[i] = s[len(s)-i-1]
            s[len(s)-i-1] = tmp
            i += 1
            
#         return s
        
# s = Solution()        
# res = s.reverseString(['h', 'e', 'l', 'l', 'o'])
# print(res)
# res = s.reverseString(['h'])
# print(res)
# res = s.reverseString(['H','a','n','n','a','h'])
# print(res)