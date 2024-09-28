/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    // too slow
    // let map = {};
    // let res = 0;
    // for (let i=0; i<s.length; i++) {
    //     if (!map[s[i]]) {
    //         map[s[i]] = true;
    //         res++;
    //     }
    // }
    // return res;

    // faster - but still at 50%
    // return s.split('').filter((x,i) => i === s.indexOf(x)).length;

    // thanks ES6
    return (new Set(s.split(''))).size;
};