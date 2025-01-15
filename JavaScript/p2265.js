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
 * @return {number}
 */
var averageOfSubtree = function(root) {
    let [n, sum, totalCounter] = checkSubtree(root);
    
    return totalCounter;
};

var checkSubtree = function(root) {
    let n = 1;
    let sum = root.val;
    let ln = 0, rn = 0, lsum = 0, rsum = 0, lcounter = 0, rcounter = 0;

    if (root.left) {
        [ln, lsum, lcounter] = checkSubtree(root.left);
    }
    if (root.right) {
        [rn, rsum, rcounter] = checkSubtree(root.right);
    }

    n += ln + rn;
    sum += lsum + rsum;

    let counter = (Math.floor(sum/n) === root.val) ? 1 : 0;
    return [n, sum, lcounter + rcounter + counter];
}