/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};

    for (let i=0; i<arr.length; i++)  {
        map[arr[i]] = (map[arr[i]] ?? 0) + 1;
    }
    // Faster
    let vals = Object.values(map);
    return vals.length === (new Set(vals)).size;
    // A bit slow
    // let keyMap = [];
    // let keys = Object.values(map);
    // for (let i=0; i<keys.length; i++) {
    //     if (keyMap[keys[i]]) {
    //         return false;
    //     }
    //     keyMap[keys[i]] = true;
    // }
    // return true;
};