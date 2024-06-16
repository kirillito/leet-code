/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    var pos = word.indexOf(ch);
    if (pos <= 0) return word;

    var sub1 = word.substr(0, pos+1);
    var sub2 = word.substr(pos+1, word.length-pos-1);
    return sub1.split('').reverse().join('') + sub2;
};