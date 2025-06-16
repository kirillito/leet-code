/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let max = nums[nums.length-1];
    let diffMax = 0;

    for (let i=nums.length-1; i>0 ; i--) {
        if (max < nums[i]) {
            max = nums[i];
        }
        if (nums[i-1] < max) {
            diffMax = (diffMax > (max-nums[i-1])) ? diffMax : max-nums[i-1];
        }
    }

    return diffMax > 0 ? diffMax : -1;
};