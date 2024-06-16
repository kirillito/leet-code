/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let dict = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let transformations = {};
    let ans = 0;

    for (let w of words) {
        let t = '';
        for (let i=0; i<w.length; i++) {
            t += dict[w.charCodeAt(i)-97];
        }
        if (!transformations[t]) {
            transformations[t] = true;
            ans++;
        }
    }

    return ans;
};