# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if root == None:
            return None
        
        queue = []
        queue.append(root)
        
        while queue:
            current = queue.pop(0)
            if current.left:
                queue.append(current.left)
            if current.right:
                queue.append(current.right)
            tmp = current.left
            current.left = current.right
            current.right = tmp
        
        return root
        
def printTree(node: TreeNode, levelShift: str=''):
    print(levelShift, node.val, ":")
    if node.left:
        printTree(node.left, levelShift + "  ")
    if node.right:
        printTree(node.right, levelShift + "  ")
       
    return
        
s = Solution()        
t = TreeNode(4,TreeNode(2,TreeNode(1,None,None),TreeNode(3,None,None)),TreeNode(7,TreeNode(6,None,None),TreeNode(9,None,None)))
res = s.invertTree(t)
printTree(res)