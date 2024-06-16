/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let res = [];
    let words = s.split(' ');
    for (word of words) {
        let index = word.slice(word.length-1);
        res[index-1] = word.slice(0, word.length-1);
    }
    return res.join(' ');
};