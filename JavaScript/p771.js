/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let res = 0;
    let o = {};

    for (let c of J) {
        o[c] = (o[c] || 0) + 1;
    }

    for (let c of S) {
        if (o[c]) {
            res++;
        }            
    }

    return res;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'))