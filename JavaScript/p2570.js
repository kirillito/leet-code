/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let map={};

    for (let i=0; i<nums1.length; i++) {
        map[nums1[i][0]] = (map[nums1[i][0]] ?? 0) + nums1[i][1];
    }
    for (let i=0; i<nums2.length; i++) {
        map[nums2[i][0]] = (map[nums2[i][0]] ?? 0) + nums2[i][1];
    }

    return Object
        .entries(map)
        .map(x => [
            Number.parseInt(x[0]), 
            x[1]]
        );
};