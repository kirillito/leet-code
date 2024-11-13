/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let sum = 0;

    let base = 1;
    let i = 1;
    while (i <= n) {
        sum += base + (i-1)%7;
        // increase Monday payment
        if (i%7 === 0) {
            base++;
        }
        i++;
    }

    return sum;
};