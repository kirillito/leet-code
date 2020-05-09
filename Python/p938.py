# Definition for a binary tree node.
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right


class Solution:
    def traverse(self, node: TreeNode, L: int, R: int, summ: int):
        if L <= node.val and node.val <= R:
            summ = summ + node.val
            
        if node.val > L and node.left != None:
            summ = self.traverse(node.left, L, R, summ)
            
        if node.val < R and node.right != None:
            summ = self.traverse(node.right, L, R, summ)
        
        return summ    
    
    def rangeSumBST(self, root: TreeNode, L: int, R: int) -> int:
        return self.traverse(root, L, R, 0)
        
        
        
s = Solution()        
#[10,5,15,3,7,null,18]
t = TreeNode(10,TreeNode(5,TreeNode(3,None,None),TreeNode(7,None,None)),TreeNode(15,None,TreeNode(18,None,None)))
res = s.rangeSumBST(t,7,15)
print(res)

#[10,5,15,3,7,13,18,1,null,6]
t = TreeNode(10,TreeNode(5,TreeNode(3,TreeNode(1,None,None),None),TreeNode(7,TreeNode(6,None,None),None)),TreeNode(15,TreeNode(13,None,None),TreeNode(18,None,None)))
res = s.rangeSumBST(t,6,10)
print(res)


t = TreeNode(10,TreeNode(5,TreeNode(3,TreeNode(1,None,None),None),TreeNode(7,TreeNode(6,None,None),None)),TreeNode(15,TreeNode(13,None,None),TreeNode(18,None,None)))
res = s.rangeSumBST(t,26,30)
print(res)

t = TreeNode(10,None,None)
res = s.rangeSumBST(t,1,30)
print(res)