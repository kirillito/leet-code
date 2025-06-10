/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let fq = {};
    for (let i=0; i<s.length; i++) {
        fq[s[i]] = (fq[s[i]] ?? 0) + 1;
    }
    let maxOdd = 0;
    let minEven = 101;
    let vals = Object.values(fq);
    for (let i=0; i<vals.length; i++) {
        if (vals[i] % 2 > 0 && vals[i] > maxOdd) {
            maxOdd = vals[i];
        } else if (vals[i] % 2 === 0 && vals[i] < minEven) {
            minEven = vals[i];
        }
    }

    return maxOdd - minEven;
};