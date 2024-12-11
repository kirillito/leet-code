/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = {};
    let res = 0;
    for (let i=0; i<nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]] = false;
        } else if (map[nums[i]] === undefined) {
            map[nums[i]] = true;
        }
    }
    for (let x in map) {
        if (map[x]) {
            res += Number.parseInt(x);
        }
    }
    return res;
};