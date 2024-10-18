/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let map1 = getMap(nums1);
    let map2 = getMap(nums2);
    let map3 = getMap(nums3);
    
    let res=[];
    for (let i=1; i<=100; i++) {
        let sum = (map1[i] ? 1 : 0) + (map2[i] ?? 0) + (map3[i] ?? 0);
        if (sum >= 2) {
            res.push(i);
        }
    }
    return res;
};

const getMap = (arr) => {
    let map = [];
    for (let i=0; i<arr.length; i++) {
        map[arr[i]] = 1;
    }
    return map;
}