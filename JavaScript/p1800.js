/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let maxSum = 0;
    let currentSum = nums[0];

    for (let i=1; i<nums.length; i++) {
        if (nums[i] > nums[i-1]) {
            currentSum += nums[i];
        } else {
            maxSum = (maxSum < currentSum) ? currentSum : maxSum;
            currentSum = nums[i];
        }
    }

    return (maxSum < currentSum) ? currentSum : maxSum;;
};