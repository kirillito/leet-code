/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let map = {};
 
    for (let i=0; i<s.length; i++) {
        map[s[i]] = (map[s[i]] ?? 0) + 1;
    }
    map = Object.values(map);
    let occ = map[0];
    for (let i=1; i<map.length; i++) {
        if (map[i] !== occ) {
            return false;
        }
    }
    return true;
};