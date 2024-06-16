/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    let answer1 = 0, answer2 = 0;

    for (let i=0; i<nums1.length; i++) {
        frequencyCounter1[nums1[i]] = (frequencyCounter1[nums1[i]] || 0) + 1;
    }
    for (let i=0; i<nums2.length; i++) {
        frequencyCounter2[nums2[i]] = (frequencyCounter2[nums2[i]] || 0) + 1;
        if (frequencyCounter1[nums2[i]]) {
            answer2++;
        }
    }
    for (let i=0; i<nums1.length; i++) {
        if (frequencyCounter2[nums1[i]]) {
            answer1++;
        }
    }

    return [answer1, answer2];
};