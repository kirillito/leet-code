/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    // too slow
    // return s.split('').filter((x,i) => i === s.indexOf(x)).length;
    let set = new Set(s.split(''));
    return set.size;
};