/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    if (word.length < 2) {
        return 1;
    }

    let count = 1;

    for (let i=1; i<word.length; i++) {
        if (word[i] === word[i-1]) {
            count++;
        }
    }

    return count;
};