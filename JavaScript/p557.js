/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let res = s.split(' ');

    for (let i=0; i<res.length; i++) {
        res[i] = res[i].split('').reverse().join('');
    }

    return res.join(' ');
};