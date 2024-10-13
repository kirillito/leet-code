/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let min = Number.MAX_VALUE;

    for (let i=0; i<nums.length; i++) {
        let sum = nums[i].toString().split('').reduce((a,b) => a+Number.parseInt(b), 0);
        min = Math.min(sum, min);
    }

    return min;
};