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
var inorderTraversal = function(root) {
    this.path = [];

    let traverse = function(node) {
        if (!node) {
            return;
        }

        if (node.left) {
            traverse(node.left);
        }
        this.path.push(node.val);
        if (node.right) {
            traverse(node.right);
        }
    };

    traverse(root);

    return this.path;
};