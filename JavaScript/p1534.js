/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let n = arr.length;
    let i = 0;
    let res = 0;

    while (i < n-2) {
        let j = i+1;

        while (j < n-1) {
            let k = j+1;

            while(k < n) {
                if (Math.abs(arr[i] - arr[j]) <= a
                        && Math.abs(arr[j] - arr[k]) <= b
                        && Math.abs(arr[i] - arr[k]) <= c) {
                    res++;
                }
                k++;
            }

            j++;
        }

        i++;
    }

    return res;
};