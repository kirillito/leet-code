/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
    let n = nums.length;
    let indices = Array.from(Array(n).keys()).sort((i,j) => (nums[i]-nums[j]));
    let maxWidth = 0;
    let minI = indices[0];

    for (let i=1; i<n; i++) {
        minI = Math.min(minI, indices[i]);
        maxWidth = Math.max(maxWidth, indices[i] - minI);
    }

    return maxWidth;
};