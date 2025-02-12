/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    let map = {};

    // generate map that matches digit sums to numbers
    for (let i=0; i<nums.length; i++) {
        let sum = 0;
        let num = nums[i];
        while (num > 0) {
            sum += num%10;
            num = Math.floor(num/10);
        }
        if (!map[sum]) {
            map[sum] = [];
        }
        // the speed can be further improved if we use min heap instead of array
        map[sum].push(nums[i]);
    }

    let max = -1;
    for (let sum in map) {
        if (map[sum].length > 1) {
            map[sum].sort((a,b) => b-a);
            if (max < map[sum][0]+map[sum][1]) {
                max = map[sum][0]+map[sum][1];
            }
        }
    }
    return max;
};