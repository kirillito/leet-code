/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singleSum = nums.filter(x => x<10).reduce((a,b) => a+b, 0);
    let doubleSum = nums.filter(x => x>=10).reduce((a,b) => a+b, 0);
    return singleSum !== doubleSum;
};