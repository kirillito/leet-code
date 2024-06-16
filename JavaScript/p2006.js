/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let map = [];
    let res = 0;
    for (let num of nums) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num]=1;
        }
        if (map[num-k]) res+=map[num-k];
        if (map[num+k]) res+=map[num+k];
    }
    return res;
};