/**
 * @param {number[]} nums
 * @return {number}
 */
var findNonMinOrMax = function(nums) {
    if (nums.length < 3) return -1;

    // since all elements are distinct, 
    // we really only need to look at any 3 random elements
    return [nums[0],nums[1],nums[2]].sort((a,b) => a-b)[1];
};