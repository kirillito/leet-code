/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let res = [];
    let positiveQueue = [];
    let negativeQueue = [];
    let n = nums.length;

    for (let i=0; i<n; i++) {
        if (nums[i] > 0) {
            positiveQueue.push(nums[i]);
        } else if (nums[i] < 0) {
            negativeQueue.push(nums[i]);
        }
    }
    for (let i=0; i<n/2; i++) {
        res.push(positiveQueue[i]);
        res.push(negativeQueue[i]);
    }

    return res;
};