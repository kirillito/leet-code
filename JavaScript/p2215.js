/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    return [
        // second condition ensures that we include only unique elements
        nums1.filter((x, i) => nums2.indexOf(x) < 0 && nums1.indexOf(x) === i), 
        nums2.filter((x, i) => nums1.indexOf(x) < 0 && nums2.indexOf(x) === i)
    ];
};