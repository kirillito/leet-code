/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let rem = max % min;

    while (rem !== 0) {
        max = min;
        min = rem;
        rem = max % min;
    }

    return min;
};