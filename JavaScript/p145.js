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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    this.path = [];

    const traverse = function(node) {
        // base condition
        if (node === null) {
            return;
        }

        if (node.left) {
            traverse(node.left);
        } 
        if (node.right) {
            traverse(node.right);
        }
        this.path.push(node.val);
        return;
    }
    traverse(root);

    return this.path;
};