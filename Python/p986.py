from typing import List

class Solution:
    def intervalIntersection(self, A: List[List[int]], B: List[List[int]]) -> List[List[int]]:
        res = []
                
        ai = 0
        bi = 0
        
        while ai < len(A) and bi < len(B):
            while ai < len(A) and A[ai][1] < B[bi][0]:
                ai += 1
            
            if ai >= len(A):
                break
            
            while bi < len(B) and B[bi][1] < A[ai][0]:
                bi += 1
            
            if bi >= len(B):
                break
            
            
            if A[ai][0] <= B[bi][0] and A[ai][1] >= B[bi][0]:
                if A[ai][1] >= B[bi][1]:
                    res.append(B[bi])
                    bi += 1
                else:
                    res.append([B[bi][0],A[ai][1]])
                    ai += 1
            elif A[ai][0] >= B[bi][0] and A[ai][1] >= B[bi][0]:
                if A[ai][1] <= B[bi][1]:
                    res.append(A[ai])
                    ai += 1
                else:
                    res.append([A[ai][0],B[bi][1]])
                    bi += 1
        
        
        return res
        
        
s = Solution()        
res = s.intervalIntersection([[0,2],[5,10],[13,23],[24,25]], 
                             [[1,5],[8,12],[15,24],[25,26]])
print(res)

res = s.intervalIntersection([], 
                             [])
print(res)