/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    let vowels = new Set([
        'a','e','i','o','u','A','E','I','O','U'
    ]);

    if (word.length < 3) {
        return false;
    }

    let hasVowel = false;
    let hasConsonant = false;

    for (let i=0; i<word.length; i++) {
        if ((word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90)
                || (word.charCodeAt(i) >= 97 && word.charCodeAt(i) <= 122)) {
            if (vowels.has(word[i])) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        } else if (word.charCodeAt(i) < 48 || word.charCodeAt(i) > 57) {
            return false;
        }
    }
    
    return hasVowel && hasConsonant;

};