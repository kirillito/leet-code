/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let start = 0;
    let end = nums.length-1;
    
    while (start<end) {
        if (nums[start] % 2 === 0) {
            // skip even numbers in the beginning
            start++;
        } else if (nums[end] % 2 > 0) {
            // skip odd numbers in the end
            end--;
        } else {
            // otherwise swap odd number in the beginning and even in the end
            let tmp = nums[start];
            nums[start] = nums[end];
            nums[end] = tmp; 
        }
    }
    return nums;
};