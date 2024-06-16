/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let xorAll = 0;

    for (let i=0; i<nums.length; i++) {
        xorAll ^= nums[i];
    }

    let firstDistinctBit = dec2bin(xorAll).length;

    let answer1 = 0, answer2 = 0;
    let currentLength = 0;
    let numBin = "";

    for (let i=0; i<nums.length; i++) {
        numBin = dec2bin(nums[i]);
        currentLength = numBin.length;
        if (currentLength < firstDistinctBit || numBin[currentLength - firstDistinctBit] === '0') {
            answer2 ^= nums[i];
        } else {
            answer1 ^= nums[i];
        }
    }

    return [answer1, answer2];
};

var dec2bin = function(dec) {
    return (dec >>> 0).toString(2);
}