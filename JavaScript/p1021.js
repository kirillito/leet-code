/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let res = "";
    let level = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            level++;
            if (level > 1) {
                res += s[i];
            }
        } else if (s[i] === ')') {
            level--;
            if (level > 0) {
                res += s[i];
            }
        }
        
    }
    return res;
};