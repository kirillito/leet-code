/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    // input restrictions allow strings shorter than 3
    if (s.length < 3) {
        return 0;
    }

    let res = 0;
    let start = 0;

    while (start < s.length-2) {
        if (s[start] !== s[start+1] 
                && s[start] !== s[start+2]
                && s[start+1] !== s[start+2]) {
            res++;
        }
        start++;
    }

    return res;
};