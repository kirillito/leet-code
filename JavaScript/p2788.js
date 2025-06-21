/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let res = [];

    for (let i=0; i<words.length; i++) {
        res.push(...words[i].split(separator).filter(x => x !== ''));
    }

    return res;
};