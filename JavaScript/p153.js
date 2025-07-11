/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let min = 5001;
    let left = 0;
    let right = nums.length;
    let i = 0;

    while (left <= right) {
        i = Math.floor(left + (right - left)/2);
        
        if (nums[left] <= nums[i]) {
            // left to i is sorted
            if (min > nums[left]) {
                min = nums[left];
            }
            left = i+1;
        } else {
            // i to right is sorted
            if (min > nums[i]) {
                min = nums[i];
            }
            right = i-1;
        }
    }

    return min;
};