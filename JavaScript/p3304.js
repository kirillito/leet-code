/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = "ab";

    let lastWord = "b";
    while (word.length < k) {
        lastWord += shiftWord(lastWord);
        word += lastWord;
    }

    return word[k-1];
};

var shiftWord = function(s) {
    let res = "";
    for (let i=0; i<s.length; i++) {
        let newCode = s.charCodeAt(i)+1;
        res += String.fromCharCode(newCode > 122 ? 97 : newCode);
    }
    return res;
}