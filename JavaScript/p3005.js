/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let frequencyCounts = {};
    let max = 0;
    let res = 0;
    for (let i=0; i<nums.length; i++) {
        frequencyCounts[nums[i]] = (frequencyCounts[nums[i]] ?? 0) + 1;
        if (max < frequencyCounts[nums[i]]) {
            max = frequencyCounts[nums[i]];
        }
    }
    for (let number in frequencyCounts) {
        if (frequencyCounts[number] === max) {
            res += max;
        }
    }
    return res;
};