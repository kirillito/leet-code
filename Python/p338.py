class Solution:
    def countBits(self, num: int) -> List[int]:
        res = [0]
        if num <= 0:
            return res
        
        i = 1
        while i*2 <= num:
            res.extend(x+1 for x in res[-i:])
            i*=2
        res.extend(x+1 for x in res[-i:num-i+1])       
            
        return res
        
            
s = Solution()        
res = s.countBits(2)
print(res)

res = s.countBits(5)
print(res)

res = s.countBits(432)
print(res)