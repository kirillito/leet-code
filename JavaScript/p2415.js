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
var reverseOddLevels = function(root) {
    let nodeNumber = 0;
    let queueTraversal = [];
    let reversalCache = [];

    queueTraversal.push(root);
    while (nodeNumber < queueTraversal.length) {
        let currentNode = queueTraversal[nodeNumber];
        nodeNumber++;
        if (currentNode.left) {
            queueTraversal.push(currentNode.left);
        }
        if (currentNode.right) {
            queueTraversal.push(currentNode.right);
        }
        // since the tree is perfect, we can do this without additional checks
        // if log2 of node number is odd number - mark it for reversal 
        if (Math.floor(Math.log2(nodeNumber))%2 === 1) {
            reversalCache.push(currentNode)
        } 
        
        if (Math.floor(Math.log2(nodeNumber))%2 === 0 || nodeNumber === queueTraversal.length) {
            // if log2 of node number is even number, 
            // then execute reversal of values and empty reversal cache
            let n = reversalCache.length;
            for (let i=0; i<n/2; i++) {
                let tmp = reversalCache[i].val;
                reversalCache[i].val = reversalCache[n-i-1].val;
                reversalCache[n-i-1].val = tmp;
            }
            
            reversalCache = [];
        }
    }
    
    return root;
};