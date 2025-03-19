/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    const n = nums.length;
    let res = 0;

    const flip = function(nums, index) {
        for (let i=index; i<index+3; i++) {
            nums[i] = nums[i] ^ 1;
        }
        return nums; 
    };

    for (let i=0; i<=n-3; i++) {
        if (nums[i] === 0) {
            nums = flip(nums, i);
            res++;
        }
    }
    if (nums[n-2] === 1 && nums[n-1] === 1) {
        return res;
    } else {
        return -1;
    }
};