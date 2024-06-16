/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let res = 0;

    let step = 1;
    while (step <= arr.length) {
        for (let i=0; i+step<=arr.length; i++) {
            res += arr.slice(i,i+step).reduce((a,b) => a+b, 0);
        }
        step+=2;
    }

    return res;
};