/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let res = Array(pref.length).fill(0);
    res[0] = pref[0];

    for (let i=1; i<pref.length; i++) {
        res[i] = pref[i-1] ^ pref[i];
    }

    return res;
};