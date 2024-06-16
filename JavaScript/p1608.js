/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    // array where each index corresponds to number of occurrences of index in original array nums
    let xnums = [];

    for (let i=0; i<nums.length; i++) {
        if (xnums[nums[i]]) {
            xnums[nums[i]] += 1;
        } else {
            xnums[nums[i]] = 1;
        }
    }

    // from the largest number go to lowest and calculate sum of occurrences of each non-empty index
    // as soon as index equals that sum - return it
    let sum = 0;
    for (let i=xnums.length-1; i>=0; i--) {
        if (xnums[i]) {
            sum += xnums[i];
        }
        if (i === sum) return i;
    }

    // otherwise - return -1
    return -1;
};