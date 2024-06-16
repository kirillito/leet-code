/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
    let pos = 0;
    
    for (let i=0; i<s.length; i++) {
        if (s[i] === t[pos]) {
            pos++;
            if (pos >= t.length) break;
        }
    }
    return t.length - pos;
};