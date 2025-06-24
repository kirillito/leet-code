/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function(nums, key, k) {
    let res = [];
    let map = [];

    for (let i=0; i<nums.length; i++) {
        if (nums[i] === key) {
            let j = i-k;
            if (j < 0) {
                j = 0;
            }
            while (j<=i+k && j<nums.length) {
                map[j] = true;
                j++;
            }
        }
    }
    for (let i=0; i<map.length; i++) {
        if (map[i]) {
            res.push(i);
        }
    }

    return res;
};