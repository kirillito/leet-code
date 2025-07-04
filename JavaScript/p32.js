/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    let max = 0;
    let stack = [-1]; // -1 is the starting border of valid string in the beginning

    for (let i=0; i<s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        } else {
            stack.pop();
            // current cumulative string is not valid anymore
            if (stack.length === 0) {
                // set new starting border to current element
                stack.push(i);
            } else {
                // length is difference between starting border and current element index
                max = Math.max(i - stack[stack.length-1], max);
            }
        }
    }
    
    return max;
};