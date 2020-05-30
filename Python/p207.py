from typing import List

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = [[] for _ in range(numCourses)]
        for i,j in prerequisites:
            graph[j].append(i)
        print(graph)
        
        visited = [False]*numCourses
        stack = [False]*numCourses
        
        def checkCourse(i):
            visited[i] = True
            stack[i] = True

            for neighbor in graph[i]:
                if not visited[neighbor]:
                    if not checkCourse(neighbor):
                        return False
                elif stack[neighbor]:
                    return False
            
            stack[i] = False
            return True

        
        for i in range(numCourses):
            if not visited[i]:
                if not checkCourse(i):
                    return False
        
        return True
        
s = Solution()        
res = s.canFinish(2, [[1,0]])
print(res)

res = s.canFinish(2, [[0,1]])
print(res)

res = s.canFinish(2, [[1,0],[0,1]])
print(res)