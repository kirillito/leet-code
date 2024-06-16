/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    // flip all rows that start with 0 - highest numbers will have leading 1
    for (let i=0; i<m; i++) {
        if (grid[i][0] === 0) {
            for (let j=0; j<n; j++) {
                grid[i][j] = grid[i][j] === 0 ? 1 : 0;
            }
        }
    }

    // maximize sum of numbers by flipping any columns that have more 0s than 1s
    for (let j=0; j<n; j++) {
        let zeroes = 0;
        let ones = 0;
        for (let i=0; i<m; i++) {
            if (grid[i][j] === 0) zeroes++; else ones++;
        }
        if (zeroes > ones) {
            for (let i=0; i<m; i++) {
                grid[i][j] = grid[i][j] === 0 ? 1 : 0;
            }
        }
    }

    let sum = 0;
    for (let i=0; i<m; i++) {
        sum += parseInt(grid[i].join(''), 2);
    }

    return sum;
};