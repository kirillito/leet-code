/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let xors = [];

    for (let i=0; i<nums.length; i++) {
        let newXors = [];
        newXors.push(nums[i]);
        for (let j=0; j<xors.length; j++) {
            newXors.push(nums[i] ^ xors[j]);
        }
        xors = xors.concat(newXors);
    }

    return xors.reduce((a,b) => a+b, 0);
};