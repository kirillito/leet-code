/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    return s === words.reduce((a,b) => a+b[0], '');
};