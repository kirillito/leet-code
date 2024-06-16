/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var evaluateTree = function(root) {
    function traverse(node) {
        if (node.val === 2) {
            return traverse(node.left) || traverse(node.right);
        } else if (node.val === 3) {
            return traverse(node.left) && traverse(node.right);
        } else {
            return node.val === 1;
        }
    }
    return traverse(root);
};