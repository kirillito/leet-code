/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let pointer = 97;
    let steps = 0;

    for (let i=0; i<word.length; i++) {
        let left = 26 - Math.abs(pointer - word.charCodeAt(i));
        let right = Math.abs(word.charCodeAt(i) - pointer);
        if (left < right) {
            steps += left + 1;
        } else {
            steps += right + 1;
        }
        pointer = word.charCodeAt(i);
    }

    return steps;
};