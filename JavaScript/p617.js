/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    const mergeNode = function(node1, node2) {
        if (node1 === null && node2 === null) {
            return null;
        } else if (node1 === null && node2 !== null) {
            return new TreeNode(
                node2.val, 
                mergeNode(null, node2.left), 
                mergeNode(null, node2.right)
            );
        } else if (node1 !== null && node2 === null) {
            return new TreeNode(
                node1.val, 
                mergeNode(node1.left, null), 
                mergeNode(node1.right, null)
            );
        } else {
            return new TreeNode(
                node1.val + node2.val, 
                mergeNode(node1.left, node2.left), 
                mergeNode(node1.right, node2.right)
            );
        }
    }

    return mergeNode(root1, root2);
};