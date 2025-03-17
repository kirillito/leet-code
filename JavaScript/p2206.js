/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let map = [];
    for (let i=0; i<nums.length; i++)  {
        map[nums[i]] = (map[nums[i]] ?? 0) + 1;
    }
    // condition met if all numbers in array have even number of occurrences
    for (let i=0; i<map.length; i++) {
        if (map[i] && map[i]%2 !== 0) {
            return false;
        }
    }
    return true;
};