/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.sort(
        (a,b) => 
        (Number.parseInt(b.toString() + a.toString()))
        -
        (Number.parseInt(a.toString() + b.toString()))
    );

    nums = nums.join('');

    return nums[0] === '0' ? '0' : nums;
};