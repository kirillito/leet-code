/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let n = nums.length;

    // precalculate max values to the left and to the right from each index
    let leftMax = new Array(n).fill(0);
    leftMax[0] = nums[0];
    for (let i = 1; i<n; i++) {
        leftMax[i] = Math.max(nums[i], leftMax[i-1])
    }

    let rightMax = new Array(n).fill(0);
    rightMax[n-1] = nums[n-1];
    for (let i = n-2; i>=0; i--) {
        rightMax[i] = Math.max(nums[i], rightMax[i+1])
    }

    // iterate once through array and find max value according to formula
    let maxVal = 0;
    for (let j=1; j<n-1; j++) {
        let maxNumI = leftMax[j-1];
        let maxNumK = rightMax[j+1];
        maxVal = Math.max(maxVal, (maxNumI - nums[j])*maxNumK);
    }

    return maxVal;
};