/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let res = [];
    let m = l.length;

    for (let i=0; i<m; i++) {
        res.push(checkSingleSubarray(nums.slice(l[i], r[i]+1)));
    }

    return res;
};

var checkSingleSubarray = function(subarray) {
    subarray.sort((a,b) => b-a);

    let diff = subarray[1] - subarray[0];
    for (let j=2; j<subarray.length; j++) {
        if (subarray[j] - subarray[j-1] !== diff) {
            return false;
        }
    }

    return true;
}