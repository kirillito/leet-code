/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let i = 0;
    while (nums[left] <= target && nums[right] >= target) {
        i = Math.floor((right+left)/2);
        if (nums[i] === target) {
            return i;
        }
        else if (nums[i] < target && i !== left) {
            left = i;
        } else if (nums[i] > target && i !== right) {
            right = i;
        } else {
            left = right;
        }
    }

    return -1;
};