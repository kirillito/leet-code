/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    // apparently, bruteforce solution is faster than priority queue
    for (let i=1; i<=k; i++) {
        // find min
        let minJ = 0;
        for (let j=1; j<nums.length; j++) {
            if (nums[j] < nums[minJ]) {
                minJ = j;
            }
        }
        // multiply
        nums[minJ] *= multiplier;
    }
    return nums;
};