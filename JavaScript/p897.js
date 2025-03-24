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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    this.newRoot = null;
    this.currentNode = null;

    const inOrderTraversal = function(node) {
        if (node.left) {
             inOrderTraversal(node.left);
        }
        // check if we're at the root of the new tree
        if (!this.newRoot) {
            this.newRoot = new TreeNode(node.val, null, null);
            this.currentNode = this.newRoot;
        } else {
            this.currentNode.right = new TreeNode(node.val, null, null);
            this.currentNode = this.currentNode.right;
        }
        if (node.right) {
            inOrderTraversal(node.right);
        }
        return;
    }
    inOrderTraversal(root);

    return this.newRoot;
};