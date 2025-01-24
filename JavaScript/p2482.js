/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
    let diff = [];
    let m = grid.length;
    let n = grid[0].length;
    let rows = [];
    let cols = [];

    // calculate numbers in rows/columns
    for (let i=0; i<m; i++) {
        let ones = grid[i].reduce((a,b) => a+b, 0);
        rows.push([n-ones,ones]);
    }
    for (let j=0; j<n; j++) {
        let ones = 0;
        for (let i=0; i<m; i++) {
            if (grid[i][j] > 0) {
                ones++;
            }
        }
        
        cols.push([m-ones,ones]);
    }

    // fill the diff matrix
    for (let i=0; i<m; i++) {
        let newRow = [];
        for (let j=0; j<n; j++) {
            newRow.push(rows[i][1] + cols[j][1] - rows[i][0] - cols[j][0]);
        }
        diff.push(newRow);
    }

    return diff;
};