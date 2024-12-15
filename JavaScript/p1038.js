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
var bstToGst = function(root) {
    // traverse the tree in-order, keeping track of current total sum
    this.currentSum = 0;    
    return traverseBst(root);
};

var traverseBst = function(node) {
    if (node.right) {
        traverseBst(node.right);
    }
    // change the node, and update current total sum
    node.val += this.currentSum;
    this.currentSum = node.val;

    if (node.left) {
        traverseBst(node.left);
    }

    return node;
}