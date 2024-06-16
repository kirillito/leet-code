/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    if (n === 1) return 1;

    // arithmetic progression sum
    var sum = n * (n + 1) / 2;
    var halfSum = 0;
    for (let i=n; i>=n/2; i--) {
        halfSum += i;
        if (sum + i - halfSum === halfSum) {
            return i;
        } 
    }

    return -1;
};