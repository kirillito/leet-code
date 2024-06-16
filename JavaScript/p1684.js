/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    // make a map of allowed characters (array is faster than hash table)
    let allowedMap = [];
    for (let i=0; i<allowed.length; i++) {
        allowedMap[allowed.charCodeAt(i)] = true;
    }

    let counter = 0;
    for (let w of words) {
        if (isWordAllowed(allowedMap, w)) {
            counter++;
        }
    }

    return counter;
};

var isWordAllowed = function (allowedMap, word) {
    for (let i=0; i<word.length; i++) {
        if (!allowedMap[word.charCodeAt(i)]) return false;
    }
    return true;
}