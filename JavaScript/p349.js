/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // arrays are faster than hashtables here
    let map1 = [];
    let map2 = [];

    let res = [];

    for (let i=0; i<nums1.length; i++) {
        map1[nums1[i]] = true;
    }
    for (let i=0; i<nums2.length; i++) {
        if (!map2[nums2[i]]) {
            map2[nums2[i]] = true;

            if (map1[nums2[i]]) {
                res.push(nums2[i]);
            }
        }
    }

    return res;    
};