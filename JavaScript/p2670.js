/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    let res = [];

    for (let i=1; i<=nums.length; i++) {
        res.push(
            (new Set(nums.slice(0,i))).size
            - (new Set(nums.slice(i))).size);
    }

    return res;
};