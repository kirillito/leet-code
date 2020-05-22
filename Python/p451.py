class Solution:
    def frequencySort(self, s: str) -> str:
        # take second element for sort
        def takeSecond(elem):
            return elem[1]

        # generate hash map
        frequencyCounter = {}        
        for c in s:
            if c not in frequencyCounter:
                frequencyCounter[c] = 0
            frequencyCounter[c] += 1
            
        #convert to list
        arr = []
        for k in frequencyCounter:
            arr.append((k,frequencyCounter[k]))
            
        # sort list by frequency
        arr.sort(key=takeSecond,reverse=True)
            
        #join into string
        return ''.join([str(elem[0])*elem[1] for elem in arr]) 
        
        
s = Solution()        
res = s.frequencySort("tree")
print(res)

res = s.frequencySort("cccaaa")
print(res)

res = s.frequencySort("Aabb")
print(res)