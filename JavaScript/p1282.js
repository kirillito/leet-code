/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let map = new Set();
    let res = [];
    for (let i=0; i<groupSizes.length; i++) {
        if (!map[groupSizes[i]]) {
            map[groupSizes[i]] = [];
        }
        map[groupSizes[i]].push(i);
        if (map[groupSizes[i]].length === groupSizes[i]) {
            res.push(map[groupSizes[i]]);
            map[groupSizes[i]] = [];
        }
    }
    return res;
};