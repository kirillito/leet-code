/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function(s, k) {
    let res = 0;
    let n = s.length;
    let start=0, end=-1;
    let zeros=0, ones=0;

    while (end<n-1) {
        end++;
        if (s[end] === '0') zeros++;
        if (s[end] === '1') ones++;

        if (zeros>k && ones>k) {
            while (zeros>k && ones>k) {
                if (s[start] === '0') zeros--;
                if (s[start] === '1') ones--;
                start++;
            }
        }
        res += end-start+1;
    }

    return res;
};