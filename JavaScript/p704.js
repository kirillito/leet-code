/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length;
    let i = 0;
    while (left < right) {
        i = Math.floor(left + (right - left)/2);
        if (nums[i] === target) {
            return i;
        }
        else if (nums[i] < target) {
            left = i+1;
        } else {
            right = i;
        } 
    }

    return -1;
};