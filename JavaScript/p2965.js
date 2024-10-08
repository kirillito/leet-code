/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let n = grid.length;
    let sum = 0;
    let map = new Set();
    let res = [];

    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            // found duplicate
            if (map.has(grid[i][j])) {
                res.push(grid[i][j]);
            } else {
                map.add(grid[i][j]);
                sum += grid[i][j];
            }
        }
    }

    // missing element can be found by substracting 
    // sum of all unique elements from sum of arithmetic progrssion 1..n^2
    res.push(n*n*(n*n+1)/2 - sum);
    return res;
};