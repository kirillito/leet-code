/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = nums.reduce((x,y) => x+y);

    return sum % k;
};