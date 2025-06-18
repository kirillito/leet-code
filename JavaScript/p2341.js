/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let map = [];

    for (let i=0; i<nums.length; i++) {
        map[nums[i]] = (map[nums[i]] ?? 0) + 1;
    }

    let res = [0,0];
    for (let i=0; i<map.length; i++) {
        if (map[i]) {
            res[0] += Math.floor(map[i]/2);
            res[1] += map[i]%2;
        }
    }
    return res;
};