# Definition for a binary tree node.
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right


class Solution:
    def construct(self, preorder, start, end) -> TreeNode:
        if start > end:
            return None
        
        node = TreeNode(preorder[start])
        
        i = start
        while i <= end:
            if preorder[i] > node.val:
                break
            i += 1
        
        node.left = self.construct(preorder, start + 1, i - 1)
        node.right = self.construct(preorder, i, end)
    
        return node
    
    def bstFromPreorder(self, preorder: List[int]) -> TreeNode:
        return self.construct(preorder, 0, len(preorder)-1)


        
s = Solution()        
res = s.bstFromPreorder([8,5,1,7,10,12])
print(res)