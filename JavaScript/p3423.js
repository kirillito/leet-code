/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let max = 0;
    let diff = 0;
    for (let i=0; i<nums.length; i++) {
        if (i<nums.length-1) {
            diff = Math.abs(nums[i] - nums[i+1]);
        } else {
            diff = Math.abs(nums[i] - nums[0]);
        }
        max = (max < diff) ? diff : max;
    }
    return max;
};