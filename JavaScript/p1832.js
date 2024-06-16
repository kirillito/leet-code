/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alphabet = {};
    let counter = 0;
    for (let c of sentence) {
        if (!alphabet[c]) {
            alphabet[c] = true;
            counter++;
            if (counter === 26) {
                return true;
            }
        }
    }
    return false;
};