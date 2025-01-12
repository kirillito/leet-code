/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let res = [];
    let map = {};

    // make a frequency counter object from array
    for (let i=0; i<nums.length; i++) {
        map[nums[i]] = (map[nums[i]] ?? 0) + 1;
    }

    let isAdded = true;
    while (isAdded) {
        isAdded = false;
        let tmp = [];
        for (let i in map) {
            if (map[i] > 0) {
                tmp.push(Number.parseInt(i));
                map[i]--;
            }
        }
        if (tmp.length > 0) {
            res.push(tmp);
            isAdded = true;
        }
    }


    return res;
};