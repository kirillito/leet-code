/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    // build key map
    let keyMap = {};
    let currentChar = 'a'.charCodeAt(0);
    for (let c of key) {
        if (c != ' ' && !keyMap[c]) {
            keyMap[c] = String.fromCharCode(currentChar);
            currentChar++;
        }
    }

    let ans = "";
    for (let c of message) {
        ans += c === ' ' ? ' ' : keyMap[c];
    }
    return ans;
};