/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let i = 0;

    while (left <= right) {
        i = Math.floor(left + (right - left)/2);
        
        if (nums[i] === target) {
            return i;
        } else if (nums[left] <= nums[i]) {
            // left to i is sorted
            if (target < nums[i] && target >= nums[left]) {
                right = i-1;
            } else {
                left = i+1;
            }
        } else {
            // i to right is sorted
            if (target > nums[i] && target <= nums[right]) {
                left = i+1;
            } else {
                right = i-1;
            }
        }
    }

    return -1;
};