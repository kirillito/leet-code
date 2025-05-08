/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    let m = grid.length;
    let n = grid[0].length;

    let i = m-1;
    let j = 0;

    while (i >= 0) {
        while (j < n) {
            if (grid[i][j] < 0) {
                count += n-j;
                break;
            } else {
                j++;
            }
        }
        
        i--;
    }

    return count;
};