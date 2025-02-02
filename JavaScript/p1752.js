/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let n = nums.length;
    
    let i=0;
    while (i < n-1 && nums[i] <= nums[i+1]) {
        i++;
    }
    // non-rotated array
    if (i === n-1) {
        return true;
    }
    // might be a rotated array - check the rest of elements
    i++;
    while (i < n-1 && nums[i] <= nums[i+1]) {
        i++;
    }

    if (i === n-1 && nums[n-1] <= nums[0]) {
        return true;
    } else {
        return false;
    }
};