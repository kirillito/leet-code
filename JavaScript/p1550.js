/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let counter = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] % 2 === 0) {
            counter = 0;
        } else {
            counter++;

            if (counter >= 3) {
                return true;
            }
        }
    }
    return false;
};