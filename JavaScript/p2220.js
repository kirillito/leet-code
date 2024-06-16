/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
    // do XOR on two numbers, then count number of 1s
    let flips = start ^ goal;
    
    return bitCount(flips);
    //return ((flips >>> 0).toString(2).match(new RegExp('1','g')) || []).length;
};

// Counts number of 1 bits in number
function bitCount (n) {
  n = n - ((n >> 1) & 0x55555555)
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
  return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}