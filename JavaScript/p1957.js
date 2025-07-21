/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    if (s.length < 3) {
        return s;
    }

    let res = s.substr(0,2);

    for (let i=2; i<s.length; i++) {
        if (s[i] !== s[i-1] || s[i] !== s[i-2]) {
            res += s[i];
        }
    }

    return res;
};