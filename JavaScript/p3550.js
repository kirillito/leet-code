/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    for (let i=0; i<nums.length; i++) {
        let sum = 0;
        while (nums[i] > 0) {
            sum += nums[i] % 10;
            nums[i] = Math.floor(nums[i] / 10);
        }
        if (sum === i) {
            return i;
        }
    }

    return -1;
};