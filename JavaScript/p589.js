/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    this.path = [];

    const traverse = function(node) {
        if (!node) {
            return;
        }

        this.path.push(node.val);
        for (let i=0; i<node.children.length; i++) {
            traverse(node.children[i]);
        }
    }
    traverse(root);

    return this.path;
};