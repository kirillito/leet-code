/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroPos = 0;

    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
            let tmp = nums[nonZeroPos];
            nums[nonZeroPos] = nums[i];
            nums[i] = tmp;
            nonZeroPos++;
        }
    }

    return;
};