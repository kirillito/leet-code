from typing import List

class Solution:
    def twoCitySchedCost(self, costs: List[List[int]]) -> int:
        N = int(len(costs)/2)
        
        # calculate th price difference between sending to B and to A and sort the resulting array
        diff = []
        for i in range(len(costs)):
            diff.append(costs[i][1]-costs[i][0])
            
        diff.sort()
        
        # cost of sending everyone to A
        res = sum([c[0] for c in costs])
        
        # based on price difference array, send N people to B instead of A (adding the price difference) with lowest price difference
        for i in range(N):
            res += diff[i]
        
        return res
        
s = Solution()        
res = s.twoCitySchedCost([[10,20],[30,200],[400,50],[30,20]])
print(res)

#1859
res = s.twoCitySchedCost([[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]])
print(res)

#3671
res = s.twoCitySchedCost([[518,518],[71,971],[121,862],[967,607],[138,754],[513,337],[499,873],[337,387],[647,917],[76,417]])
print(res)
