/**
 * @param {number[]} nums
 * @return {number}
 */
var subarraySum = function(nums) {
    let totalSum = 0;

    for (let i=0; i<nums.length; i++) {
        let currentSum = 0;
        let start = Math.max(0, i-nums[i]);
        for (let j=start; j<=i; j++) {
            currentSum += nums[j];
        }        

        totalSum += currentSum;
    }

    return totalSum;
};