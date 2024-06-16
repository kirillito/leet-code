/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    s = s.split('').sort((a,b)=>b-a);
    return s.slice(1).join('') + s.slice(0,1).join('');
};