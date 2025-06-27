/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = 1;
    let sign = Math.sign(n);
    n = Math.abs(n);

    if (n > 0) {
        while (n > 1) {
            if (n % 2 === 0) {
                x *= x;
                n /= 2;
            } else {
                res *= x;
                n--;
            }
        }
        res *= x;
    } else {
        return 1;
    }

    return (sign > 0) ? res : 1/res;
};