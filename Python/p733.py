from typing import List

class Solution:

    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        replaceColor = image[sr][sc]
        
        if (replaceColor == newColor):
            return image
            
        image[sr][sc] = newColor
        
        if sr-1 >= 0 and image[sr-1][sc] == replaceColor:
            image = self.floodFill(image, sr-1, sc, newColor)
        
        if sr+1 < len(image) and image[sr+1][sc] == replaceColor:
            image = self.floodFill(image, sr+1, sc, newColor)

        if sc-1 >= 0 and image[sr][sc-1] == replaceColor:
            image = self.floodFill(image, sr, sc-1, newColor)

        if sc+1 < len(image[0]) and image[sr][sc+1] == replaceColor:
            image = self.floodFill(image, sr, sc+1, newColor)

        return image
        

s = Solution()        
print(s.floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
