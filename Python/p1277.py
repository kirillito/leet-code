from typing import List

class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        def countSquaresAtIndex(i:int, j:int) -> int:
            # max square size at this index
            maxSize = min(len(matrix) - i, len(matrix[0]) - j)
            
            #print("i:", i,"j:", j,"maxSize:", maxSize)
            k = 1
            
            while k < maxSize:
                #print("k:", k)
                for a in range (0, k+1):
                    if matrix[i+a][j+k] == 0:
                        #print(i+a,j+k)
                        return k
                for a in range (0, k+1):
                    if matrix[i+k][j+a] == 0:
                        #print(i+a,j+k)
                        return k
                k+=1
            
            return k
        
        res = 0
        
        # iterate every element of the matrix and for every '1' calculate maximum size of square with all '1'
        for i in range(0,len(matrix)):
            for j in range(0,len(matrix[i])):
                if matrix[i][j] == 1:
                    res += countSquaresAtIndex(i,j)
                    #print("so far:", res)
                
        return res
        
s = Solution()        
res = s.countSquares([
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
])
print(res)

res = s.countSquares([
  [1,0,1],
  [1,1,0],
  [1,1,0]
])
print(res)

res = s.countSquares([
    [0,0,0],
    [0,1,0],
    [0,1,0],
    [1,1,1],
    [1,1,0]
])
print(res)

