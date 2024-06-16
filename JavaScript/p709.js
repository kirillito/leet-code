/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    var res = "";

    for (var i=0; i<s.length; i++) {
        var code = s.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            res += String.fromCharCode(code + 32);
        } else {
            res += s[i];
        }
    }
    return res;
};