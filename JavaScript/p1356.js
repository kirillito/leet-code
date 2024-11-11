/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a,b) => {
        let aBits = countOneBits(a);
        let bBits = countOneBits(b);

        return (aBits === bBits) ? a-b : aBits-bBits;
    });
};

const countOneBits = (x) => {
    let res = 0;
    while (x != 0) {
        res++;
        x = x & (x-1);
    }
    // too slow
    // return x.toString(2).replaceAll('0','').length;
    return res;
}