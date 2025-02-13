/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
    let sum = nums.reduce((a,b)=>a+b,0);
    // we need to calculate number of subarrays
    // where (sum-leftsum-leftsum) is even
    // since 2*leftsum is always even, 
    // it means that if sum is even, 
    // then all subarray diffs are even, and none if otherwise 

    return sum % 2 === 0 ? nums.length-1 : 0;
};