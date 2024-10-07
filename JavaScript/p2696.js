/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    // easy bruteforce solution - beats ~24% of other submissions
    // while (s.indexOf('AB')>-1 || s.indexOf('CD')>-1) {
    //     s = s.replace('AB', '');
    //     s = s.replace('CD', '');
    // }
    // return s.length;

    // a much faster stack solution - beats ~85%
    let stack = [];

    for (let i=0; i<s.length; i++) {
        if (s[i] === 'B' && stack[stack.length-1] === 'A') {
            stack.pop();
        } else if (s[i] === 'D' && stack[stack.length-1] === 'C') {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length;
};