/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sum1 = n*(n+1)/2;
    let sum2 = nums.reduce((x, y) => x+y, 0);

    return sum1-sum2;
};