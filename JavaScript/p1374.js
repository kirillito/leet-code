/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    // slow
    // return (n%2 === 0) ? 
    //     Array(n-1).fill('a').join('') + 'b'
    //     : Array(n).fill('a').join('');
    
    // fast, but less compact
    let k = (n%2 === 0) ? n-1 : n;
    let res = "";
    for (let i=0; i<k; i++) {
        res += "a";
    }
    return (n%2 === 0) ? res + "b" : res;
};