/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let res = "";

    for (let i=0; i<s.length; i+=2) {
        res += s[i];
        if (i+1<s.length) {
            res += String.fromCharCode(s.charCodeAt(i) + Number.parseInt(s[i+1]));
        }
    }

    return res;
};