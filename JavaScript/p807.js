/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let res = 0;
    let n = grid.length;
    let maxCols = [];
    let maxRows = [];

    // no out of the box easy way to calculate max across column like in Python, 
    // so need to do it manually and cache found values
    for (let j=0; j<n; j++) {
        let maxVal = grid[0][j];
        for (let i=1; i<n; i++) {
            if (maxVal < grid[i][j]) {
                maxVal = grid[i][j];
            }
        }
        maxCols.push(maxVal);
    }
    for (let i=0; i<n; i++) {
        maxRows.push(Math.max(...grid[i]));
    }

    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            res += Math.min(maxRows[i], maxCols[j]) - grid[i][j];
        }
    }

    return res;
};