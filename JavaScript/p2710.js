/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let cutIndex = num.length-1;
    while (cutIndex >= 0) {
        if (num[cutIndex] === '0') {
            cutIndex--;
        } else break;
    }
    return num.substr(0, cutIndex+1);
};