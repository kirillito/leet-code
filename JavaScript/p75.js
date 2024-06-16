/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // DNF algorithm
    let redEnd = 0, blueStart = nums.length-1;
    let current = 0;

    while (current <= blueStart) {
        if (nums[current] === 0) {
            nums[current] = nums[redEnd];
            nums[redEnd] = 0;
            current++;
            redEnd++;
        } else if (nums[current] === 2) {
            nums[current] = nums[blueStart];
            nums[blueStart] = 2;
            blueStart--;
        } else {
            current++;
        }
    }
};