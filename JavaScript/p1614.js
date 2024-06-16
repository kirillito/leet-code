/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let max = 0;
    let current = 0;
    for (let c of s) {
        if (c === '(') {
            current++;
            if (current > max) {
                max = current;
            }
        } else if (c === ')') {
            current--;
        }
    }
    return max;
};