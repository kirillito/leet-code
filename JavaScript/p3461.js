/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    s = s.split('').map(x => Number.parseInt(x));
    while (s.length > 2) {
        let sNew = [];
        for (let i=0; i<s.length-1; i++) {
            sNew.push((s[i] + s[i+1]) % 10);
        }
        s = sNew;
    }
    return s[0] === s[1];
};