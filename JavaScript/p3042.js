/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let res = 0;

    for (let i=0; i<words.length; i++) {
        for (let j=i+1; j<words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) {
                res++;
            }
        }
    }

    return res;
};

var isPrefixAndSuffix = function(str1, str2) {
    return str2.startsWith(str1) && str2.endsWith(str1);
}