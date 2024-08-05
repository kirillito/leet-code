/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let resWord = "";
    let i = 0;

    while (i<word1.length && i<word2.length) {
        resWord += word1[i] + word2[i];
        i++;
    }
    resWord += word1.substring(i) + word2.substring(i);

    return resWord;
};