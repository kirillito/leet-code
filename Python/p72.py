class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        rows = len(word1)+1
        cols = len(word2)+1
        
        dist = [[0 for x in range(cols)] for x in range(rows)]

        for i in range(1, rows):
            dist[i][0] = i

        for j in range(1, cols):
            dist[0][j] = j
        
        #print(dist)
        
        for j in range(1, cols):
            for i in range(1, rows):
                if word1[i-1] == word2[j-1]:
                    substitutionCost = 0
                else:
                    substitutionCost = 1
                
                dist[i][j] = min(dist[i-1][j] + 1, 
                                 dist[i][j-1] + 1,
                                 dist[i-1][j-1] + substitutionCost)
        
        return dist[rows-1][cols-1]
        
s = Solution()        
res = s.minDistance("horse", "ros")
print(res)
res = s.minDistance("intention", "execution")
print(res)