/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let map = [];
    for (let i=0; i<nums.length; i++) {
        if (map[nums[i]]) {
            return nums[i];
        }
        map[nums[i]] = true;
    }
    return null;
};