/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let res = [];
    let map = [];

    for (let i=0; i<nums.length; i++) {
        if (map[nums[i]]) {
            res.push(nums[i]);
        } else {
            map[nums[i]] = true;
        }
    }
    return res;
};