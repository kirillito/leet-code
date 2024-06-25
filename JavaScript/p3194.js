/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a,b) => a-b);
    let n = nums.length;
    let min = 51;

    for (let i=0; i<n/2; i++) {
        let avrg = (nums[i]+nums[n-i-1])/2.0
        if (avrg < min) {
            min = avrg;
        }
    }

    return min;
};