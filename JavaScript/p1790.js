/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let n = s1.length;
    let swapChar1 = '';
    let swapChar2 = '';
    let isSwapped = true;

    for (let i=0; i<n; i++) {
        if (s1[i] === s2[i]) {
            continue;
        }

        if (swapChar1 === '') {
            swapChar1 = s1[i];
            swapChar2 = s2[i];
            isSwapped = false;
        } else {
            if (swapChar1 === s2[i] && swapChar2 === s1[i] && !isSwapped) {
                isSwapped = true;
            } else {
                return false;
            }
        }
    }

    return isSwapped;
};