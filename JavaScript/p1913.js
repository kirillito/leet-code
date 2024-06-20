/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    // too slow, O(n*log(n))
    // nums.sort((a,b)=>a-b);
    // return (nums[nums.length-1] * nums[nums.length-2]) - (nums[0] * nums[1]);

    // faster, O(n)-ish
    let a=nums[0], b=nums[1], c=nums[2], d=nums[3];
    [d, c, b, a] = [a, b, c, d].sort((a,b)=>a-b);

    for (let i=4; i<nums.length; i++) {
        if (nums[i] > a && a <= b) {
            a = nums[i];
        } else if (nums[i] > b && b <= a) {
            b = nums[i];
        } else if (nums[i] < c && c >= d) {
            c = nums[i];
        } else if (nums[i] < d && d >= c) {
            d = nums[i];
        } 
    }
    return (a*b)-(c*d);
};