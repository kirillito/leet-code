/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = [];
    let halfN = Math.floor(n/2);
    if (n%2 > 0) {
        res.push(0);
    }
    for (let i=1; i<=halfN; i++) {
        res.push(i);
        res.push(-1*i);
    }
    return res;
};