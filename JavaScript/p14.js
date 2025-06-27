/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let i=1; i<strs.length; i++) {
        prefix = getPrefixMatch(prefix, strs[i]);
        if (prefix === '') {
            break;
        }
    }

    return prefix;
};

var getPrefixMatch = function (word1, word2) {
    if (word1.length > word2.length) {
        let tmp = word1;
        word1 = word2;
        word2 = tmp;
    }

    let prefix = '';
    let len=word1.length;
    while (len > 0) {
        prefix = word1.slice(0, len);
        if (word2.indexOf(prefix) === 0) {
            return prefix;
        }
        len--;
    }
    return '';
}