/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) return 1;

    let dp0 = 1;
    let dp1 = 1;
    let dp2 = 0;
    for (let i=2; i<=n; i++) {
        dp2 = dp0 + dp1;
        dp0 = dp1;
        dp1 = dp2;
    }
    return dp2;
};