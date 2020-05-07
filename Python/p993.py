# Definition for a binary tree node.
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right


class Solution:
    def isCousins(self, root: TreeNode, x: int, y: int) -> bool:
        node = root
        check = []
        queue = []
        level1 = None
        level2 = None
        level = 0
        
        queue.append(node)
        check.append(level)

        while (len(queue) > 0):
            node = queue.pop(0)
            level = check.pop(0)

            if (node.left) and (node.right) and (node.left.val == x or node.right.val == x) and (node.left.val == y or node.right.val == y):
                return False

            if (node.left != None):
                queue.append(node.left)
                check.append(level+1)
            if (node.right != None):
                queue.append(node.right)
                check.append(level+1)
                
            if (node.val == x):
                level1 = level
            if (node.val == y):
                level2 = level
                
            if (level1 != None) and (level1 == level2):
                return True

        return False
        
        
        
s = Solution()        
t = TreeNode(1,TreeNode(3,TreeNode(2,None,None),None),TreeNode(6,None,None))
res = s.isCousins(t,2,3)
print(res)

t = TreeNode(1,TreeNode(2,TreeNode(4,None,None),None),TreeNode(3,None,None))
res = s.isCousins(t,3,4)
print(res)

t = TreeNode(1,TreeNode(2,None,TreeNode(4,None,None)),TreeNode(3,None,TreeNode(5,None,None)))
res = s.isCousins(t,5,4)
print(res)

t = TreeNode(1,TreeNode(2,None,TreeNode(4,None,None)),TreeNode(3,None,None))
res = s.isCousins(t,2,3)
print(res)