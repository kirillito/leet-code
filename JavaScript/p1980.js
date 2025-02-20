/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let n = nums.length;
    let nPow = 2**n;
    let numNums = [];

    for (let i=0; i<n; i++) {
        numNums[Number.parseInt(nums[i],2)] = true;
    }
    for (let i=0; i<nPow; i++) {
        if (i >= numNums.length || !numNums[i]) {
            return i.toString(2).padStart(n,0);
        }
    }
    return null;
};