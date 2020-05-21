# Definition for a binary tree node.
class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right


class Solution:
    def kthSmallest(self, root: TreeNode, k: int) -> int:
        stack = []

        while True:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            k -= 1
            if not k:
                return root.val
            root = root.right

        return None

    # recursive DFS in order
    # def kthSmallest(self, root: TreeNode, k: int) -> int:
    #     ordered = []

    #     def traverse(node):
    #         if node.left:
    #             traverse(node.left)
    #         ordered.append(node)
    #         if node.right:
    #             traverse(node.right)
            
    #     traverse(root)

    #     return ordered[k-1].val


        
s = Solution()        
t = TreeNode(3,TreeNode(1,None,TreeNode(2,None,None)),TreeNode(4,None,None))
res = s.kthSmallest(t,1)
print(res)

t = TreeNode(5,TreeNode(3,TreeNode(2,TreeNode(1,None,None),None),TreeNode(4,None,None)),TreeNode(6,None,None))
res = s.kthSmallest(t,3)
print(res)
