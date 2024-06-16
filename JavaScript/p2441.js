/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let flags = {};
    let k = -1;

    for (let num of nums) {
        flags[num] = true;
        if (flags[-1*num] && Math.abs(num) >= k) {
            k = Math.abs(num);
        }
    }
    
    return k;
};