/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let counter = 0;

    let isNotInPair = true;
    let bars = 0;
    for (let i=0; i<s.length; i++) {
        if (s[i] === '|') {
            bars = (++bars)%2;
            isNotInPair = (bars === 0) && (!isNotInPair);
        } else if (s[i] === '*' && isNotInPair) {
            counter++;
        }
    }

    return counter;
};