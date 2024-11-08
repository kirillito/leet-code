/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let map = {};
    let max = 0;
    for (let i=0; i<rectangles.length; i++) {
        let min = Math.min(...rectangles[i]);
        map[min] = (map[min] ?? 0) + 1;
        max = Math.max(max, min);
    }
    return map[max];
};