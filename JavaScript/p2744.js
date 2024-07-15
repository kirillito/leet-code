/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let res = 0;
    let map = {};

    for (let i=0; i<words.length; i++) {
        let revWord = words[i][1] + words[i][0];
        if (map[revWord]) {
            res++;
            map[words[i]] = false;
        } else {
            map[words[i]] = true;
        }
    }

    return res;
};