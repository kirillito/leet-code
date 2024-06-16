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
var distributeCoins = function(root) {
    this.answer = 0;

    function traverse(node) {
        if (!node) return 0;

        let res = 0;
        let left = traverse(node.left);
        let right = traverse(node.right);
        this.answer += Math.abs(left) + Math.abs(right);

        return node.val + left + right - 1;
    }
    traverse(root);
    
    return this.answer;
};