from typing import List

class Solution:
    # y = k*x + b
    def checkFunction(self, k, x, b, y):
        return y == (k*x+b)
    
    
    def checkStraightLine(self, coordinates: List[List[int]]) -> bool:
        
        if (len(coordinates) == 2):
            return True
            
        if (coordinates[1][0] == coordinates[0][0]):
            for i in range(2, len(coordinates)):
                if (not coordinates[i][0] == coordinates[i][1]):
                    return False
        else:
            slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])
            # y = slope * x - slope * x1 + y1
            b = coordinates[0][1] - slope * coordinates[0][0]

            for i in range(2, len(coordinates)):
                if (not self.checkFunction(slope, coordinates[i][0], b, coordinates[i][1])):
                    return False
                
        return True        
        


s = Solution()        
res = s.checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]])
print(res)

res = s.checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]])
print(res)

res = s.checkStraightLine([[1,1],[2,2]])
print(res)

res = s.checkStraightLine([[-7,-3],[-7,-1],[-2,-2],[0,-8],[2,-2],[5,-6],[5,-5],[1,7]])
print(res)
