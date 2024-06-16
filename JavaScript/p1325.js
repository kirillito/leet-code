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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    // DFS post order traversal
    function traverse(node, target) {
        let isDelete = false;

        if (node.left) {
            isDelete = traverse(node.left, target);
            if (isDelete) node.left = null;
        }
        if (node.right) {
            isDelete = traverse(node.right, target);
            if (isDelete) node.right = null;
        }

        if (node.left === null && node.right === null && node.val === target) {
            return true;
        } else {
            return false;
        }
    }
    traverse(root, target);

    if (!root.left && !root.right && root.val === target) {
        return null;
    } else {
        return root;
    }
};