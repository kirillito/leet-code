/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = s.length-1;
    for (let i=0; i<=n/2; i++) {
        let tmp = s[n-i];
        s[n-i] = s[i];
        s[i] = tmp;
    }
    
    return s;
};