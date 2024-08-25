/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let sum = 0;
    let n=nums.length;
    
    for (let i=0; i<n; i++) {
        let map = new Set([nums[i]]);
        for (let j=i; j<n; j++) {
            map.add(nums[j]);
            sum += (map.size ** 2);
        }
    }

    return sum;
};