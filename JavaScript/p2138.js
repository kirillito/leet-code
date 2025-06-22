/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let res = [];

    for (let i=0; i<s.length; i+=k) {
        res.push(s.slice(i,i+k));
    }
    if (res.length>0 && res[res.length-1].length<k) {
        res[res.length-1] = res[res.length-1].padEnd(k, fill);
    }

    return res;
};