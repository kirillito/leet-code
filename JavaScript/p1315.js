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
var sumEvenGrandparent = function(root) {
    let sum = 0;
    let traversalQueue = [];
    traversalQueue.push(root);
    let currentIndex = 0;

    // can be further memory=optimize by using DFS instead of BFS
    while (traversalQueue.length > currentIndex) {
        if (traversalQueue[currentIndex].val % 2 === 0) {
            if (traversalQueue[currentIndex].left) {
                let parent = traversalQueue[currentIndex].left;
                sum += parent.left ? parent.left.val : 0;
                sum += parent.right ? parent.right.val : 0;
            }
            if (traversalQueue[currentIndex].right) {
                let parent = traversalQueue[currentIndex].right;
                sum += parent.left ? parent.left.val : 0;
                sum += parent.right ? parent.right.val : 0;
            }
        }

        if (traversalQueue[currentIndex].left) {
            traversalQueue.push(traversalQueue[currentIndex].left)
        }
        if (traversalQueue[currentIndex].right) {
            traversalQueue.push(traversalQueue[currentIndex].right)
        }
        currentIndex++;
    }

    return sum;
};