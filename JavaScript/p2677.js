/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let res = [];
    let start = 0;
    let end = size;

    while (start < arr.length) {
        res.push(arr.slice(start, end));
        start = end;
        end += size;
    }

    return res;
};
