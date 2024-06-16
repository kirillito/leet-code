/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let map = [];
    let res = 0;
    for (let i=0; i<s.length; i++) {
        map[s.charCodeAt(i)] = i;
    }
    for (let i=0; i<t.length; i++) {
        res += Math.abs(map[t.charCodeAt(i)] - i);
    }
    return res;
};