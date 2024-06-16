/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let sortedHeights = [...heights].sort((a,b) => a-b);
    let res = 0;

    for (let i=0; i<heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            res++;
        }
    }

    return res;
};