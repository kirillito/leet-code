/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let res = [];
    let left = 0;
    let right = s.length;

    for (let i=0; i<s.length;i++) {
        if (s[i] === 'I') {
            res.push(left);
            left++;
            if (i === (s.length-1)) {
                res.push(left);
            }
        } else {
            res.push(right);
            right--;
            if (i === (s.length-1)) {
                res.push(right);
            }
        }
    }
    return res;
};