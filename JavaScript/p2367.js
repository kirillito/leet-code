/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let ans = 0;
    let map = [];

    for (let i=nums.length-1; i>=0; i--) {
        map[nums[i]] = true;
        if (map[nums[i]+diff] && map[nums[i]+2*diff]) {
            ans++;
        }
    }

    return ans;
};