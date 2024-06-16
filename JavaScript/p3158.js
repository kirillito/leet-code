/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let map = [];
    let res = 0;

    for (let i=0; i<nums.length; i++) {
        if (map[nums[i]]) {
            res ^= nums[i];
        } else {
            map[nums[i]] = true;
        }
    }

    return res;
};