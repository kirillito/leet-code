/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    let productFQ = [];
    let res = 0;

    for (let i=0; i<nums.length-1; i++) {
        for (let j=i+1; j<nums.length; j++) {
            let product = nums[i]*nums[j];
            productFQ[product] = (productFQ[product] ?? 0) + 1;
            res += (productFQ[product] - 1) * 8;
        }
    }

    return res;
};