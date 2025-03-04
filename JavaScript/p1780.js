/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    // precalculate all powers of 3 less than n
    let pow3 = [];
    let x = 1;
    while (x <= n) {
        pow3.push(x);
        x *= 3;
    }
    
    // use greedy algorithm to check condition
    for (let i=pow3.length-1; i>=0; i--) {
        if (n >= pow3[i]) {
            n -= pow3[i];
        }
        if (n === 0) {
            return true;
        }
    }

    return false;
};