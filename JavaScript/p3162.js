/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let n1 = nums1.length;
    let n2 = nums2.length;
    let res = 0;
    for (let i=0; i<n1; i++) {
        if (nums1[i]%k === 0) {
            for (let j=0; j<n2; j++) {
                if (nums1[i] % (k*nums2[j])===0) res++;
            }
        }
    }
    
    return res;
};