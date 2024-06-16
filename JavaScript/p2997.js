/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    // Do XOR on all elements plus the target number, 
    // then calculate number of bits that need to be flipped to get total of 0
    return bitCount(nums.reduce((a,b)=>a^b, k));
};

// Counts number of 1 bits in number
function bitCount (n) {
  n = n - ((n >> 1) & 0x55555555)
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
  return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}