/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let visited = [];
    
    function traverse(node) {
        if (!node) {
            return;
        }

        for (let child of node.children) {
            traverse(child);
        }
        visited.push(node.val);
    }
    traverse(root);

    return visited;
};
