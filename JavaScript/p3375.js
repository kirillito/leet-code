/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    nums = nums.sort((a,b) => a-b);
    let res = 0;

    if (nums[0] < k) {
        return -1;
    } else if (nums[0] > k) {
        res = 1;
    }

    for (let i=1; i<nums.length; i++) {
        if (nums[i] === k || nums[i-1] === nums[i]) {
            continue;
        }
        res++;
    }

    return res;
};