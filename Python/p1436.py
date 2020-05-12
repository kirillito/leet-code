from typing import List

class Solution:
    def destCity(self, paths: List[List[str]]) -> str:
        cities = {}
        ends = {}
        
        for p in paths:
            cities[p[0]] = p[1]
            if p[0] in ends and ends[p[0]]:
                ends[p[0]] = False
            if not p[1] in cities:
                ends[p[1]] = True
            else:
                ends[p[1]] = False

        for e in ends:
            if ends[e]:
                return e

        return None


s = Solution()        
print(s.destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]))
print(s.destCity([["B","C"],["D","B"],["C","A"]]))
print(s.destCity([["A","Z"]]))
print(s.destCity([["jMgaf WaWA","iinynVdmBz"],[" QCrEFBcAw","wRPRHznLWS"],["iinynVdmBz","OoLjlLFzjz"],["OoLjlLFzjz"," QCrEFBcAw"],["IhxjNbDeXk","jMgaf WaWA"],["jmuAYy vgz","IhxjNbDeXk"]]))