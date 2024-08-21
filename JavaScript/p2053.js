/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = {};

    for (let i=0; i<arr.length; i++) {
        map[arr[i]] = map[arr[i]] ? map[arr[i]]+1 : 1;
    }

    let current = 0;
    for (let i=0; i<arr.length; i++) {
        if (map[arr[i]] === 1) current++;

        if (current === k) return arr[i];
    }

    return "";
};