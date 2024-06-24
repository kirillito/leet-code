/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let n = nums.length;
    let res = 0;

    for (let i=0; i<n; i++) {
        if (nums[i]%3 !== 0) res++;
    }

    return res;
};