/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    for (let i=2; i<=n-2; i++) {
        if (!isPalindromic(n, i)) {
            return false;
        }
    }
    
    return true;
};

var isPalindromic = function(x, base) {
    let xb = [];
    while (x > 0) {
        xb.push(x%base);
        x = Math.floor(x/base);
    }
    return xb.join('') === xb.reverse().join('');
};