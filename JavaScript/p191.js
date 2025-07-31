/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let counter = 0;

    while (n > 0) {
        if (n % 2 === 1) {
            counter++;
        }
        n = Math.trunc(n/2);
    }

    return counter;
};