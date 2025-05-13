/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    const vowels = ['a','e','i','o','u'];
    let vowelMap = {'a':0};
    let consonantMap = {'b':0};

    for (let i=0; i<s.length; i++) {
        if (vowels.indexOf(s[i]) > -1) {
            vowelMap[s[i]] = (vowelMap[s[i]] ?? 0) + 1;
        } else {
            consonantMap[s[i]] = (consonantMap[s[i]] ?? 0) + 1;
        }
    }
    return Math.max(...Object.values(vowelMap)) 
        + Math.max(...Object.values(consonantMap));
};