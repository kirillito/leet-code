/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [[]];

    for (let i=0; i<nums.length; i++) {
        let newArr = [];
        for (let j=0; j<res.length; j++) {
            newArr.push(res[j].concat(nums[i]));
        }
        res = res.concat(newArr);
    }

    return res;
};