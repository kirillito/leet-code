class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        if len(num) == k:
            return "0"
    
        res = []
        for digit in num:
            while k > 0 and len(res)>0 and res[-1]>digit:
                res.pop()
                k -= 1
            res.append(digit)
            
        while k > 0:
            res.pop()
            k -= 1
            
        num = ''.join(res).lstrip('0')
        
        if num == '':
            return '0'
        else:
            return num
'''
#Old
    def removeKdigits(self, num: str, k: int) -> str:
        if len(num) == k:
            return "0"

        for i in range(1,k+1):
            for j in range(0,len(num)):
                if j+1 >= len(num):
                    num = num[:j]
                    break
                if num[j] > num[j+1]:
                    num = num[:j]+num[j+1:]
                    break
        
        num = num.lstrip('0')
        
        if num == '':
            return '0'
        else:
            return num
'''
        
s = Solution()        
res = s.removeKdigits("1432219", 3)
print(res)

res = s.removeKdigits("10200", 1)
print(res)

res = s.removeKdigits("10", 2)
print(res)

res = s.removeKdigits("112", 1)
print(res)