/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let map = new Map();

    for (let i=0; i<arr.length; i++) {
        map.set(
            arr[i], 
            (map.get(arr[i]) ?? 0) + 1
        );
    }
    let max = -1;
    for (let [k,v] of map) {
        if (k === v) {
            max = Math.max(k, max);
        }
    }

    return max;
};