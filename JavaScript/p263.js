/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    // result is a positive number
    if (n < 1) {
        return false;
    } 

    while (n > 1) {
        if (n%2 === 0) {
            n /= 2;
        } else if (n%3 === 0) {
            n /= 3;
        } else if (n%5 === 0) {
            n /= 5;
        } else {
            return false;
        }
    }
    return true;
};