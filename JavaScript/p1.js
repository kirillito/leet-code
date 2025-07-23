/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let a = {};
    let res = [];

    for (let i=0; i<nums.length; i++) {
        if (a[nums[i]] === undefined) {
            a[nums[i]] = i;
        } else if (target === nums[i]*2) {
            res.push(a[nums[i]], i);
            return res;
        }
    }

    for (let c in a) {
        if (a[target-c])
        {
            res.push(a[c], a[target-c]);
            break;
        }
    }
    return res;
};