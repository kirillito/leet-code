/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let res = [];
    let n = grid.length;
    let row = [];

    for (let i=1; i<=n-2; i++) {
        row = [];
        for (let j=1; j<=n-2; j++) {
            row.push(Math.max(
                grid[i-1][j-1],
                grid[i-1][j],
                grid[i-1][j+1],
                grid[i][j-1],
                grid[i][j],
                grid[i][j+1],
                grid[i+1][j-1],
                grid[i+1][j],
                grid[i+1][j+1]
            ));
        }
        res.push(row);
    }

    return res;
};