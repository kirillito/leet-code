# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:
    def deepestLeavesSum(self, root: TreeNode) -> int:
        res = 0
        
        queue = []
        levels = []
        queue.append(root)
        levels.append(0)
        deepestLevel = 0
        
        while queue:
            node = queue.pop(0)
            level = levels.pop(0)

            # on deepest level - add to current sum
            if deepestLevel == level:
                res += node.val
            # found deeper level - reset sum and remember deepest level
            elif deepestLevel < level:
                res = node.val
                deepestLevel = level

            
            if node.left != None:
                queue.append(node.left)
                levels.append(level+1)
            if node.right != None:
                queue.append(node.right)
                levels.append(level+1)
            
        return res
        
        
s = Solution()        
#[1,2,3,4,5,null,6,7,null,null,null,null,8]
t = TreeNode(1,
        TreeNode(2,
            TreeNode(4,
                TreeNode(7,None,None),
                None),
            TreeNode(5,None,None)
            ),
        TreeNode(3,
            None,
            TreeNode(6,
                None,
                TreeNode(8,None,None)
                )
            )
        )
res = s.deepestLeavesSum(t)
print(res)
