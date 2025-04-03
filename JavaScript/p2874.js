/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    const n = nums.length;
    let maxNum = 0;
    let maxDiff = 0;
    let maxMul = 0;

    for (let i = 0; i<n; i++) {
        maxMul = Math.max(maxMul, maxDiff * nums[i]);
        maxDiff = Math.max(maxDiff, maxNum - nums[i]);
        maxNum = Math.max(maxNum, nums[i]);
    }

    return maxMul;
};