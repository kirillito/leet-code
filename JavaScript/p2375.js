/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let n = pattern.length;
    let buffer = [];
    let res = [];

    let currentDigit = 1;
    for (let i=0; i<n; i++) {
        buffer.unshift(currentDigit.toString());
        if (pattern[i] === "I") {
            res = res.concat(buffer);
            buffer = [];
        }
        currentDigit++;
    }
    buffer.unshift(currentDigit.toString());
    res = res.concat(buffer);

    return res.join('');
};