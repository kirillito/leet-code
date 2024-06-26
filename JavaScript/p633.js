/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    let a = 0;
    let b = Math.floor(Math.sqrt(c));
    let sum = 0;

    while (a <= b) {
        sum = a*a + b*b;
        if (sum === c) {
            return true;
        } else if (sum > c) {
            b--;
        } else {
            a++;
        }
    }

    return false;
};