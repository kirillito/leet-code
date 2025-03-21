/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    let odds = []
    let evens = [];
    for (let i=0; i<nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens.push(0);
        } else {
            odds.push(1);
        }
    }
    return evens.concat(odds);
};