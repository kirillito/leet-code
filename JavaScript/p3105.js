/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let isInc = null;
    let maxLength = 1;
    let curLength = 1;

    for (let i=1; i<nums.length; i++) {
        // initial vector direction
        if (isInc === null && nums[i] !== nums[i-1]) {
            isInc = (nums[i] > nums[i-1]);
        }
        if (nums[i] > nums[i-1]) {
            if (isInc) {
                curLength++;
            } else {
                isInc = true;
                curLength = 2;
            }
        } else if (nums[i] < nums[i-1]) {
            if (!isInc) {
                curLength++;
            } else {
                isInc = false;
                curLength = 2;
            }
        } else {
            curLength = 1;
        }
        
        if (curLength > maxLength) {
            maxLength = curLength;
        }
    }

    return maxLength;
};