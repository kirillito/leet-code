/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let res = 0;
    let m = grid.length;
    let n = grid[0].length;
    
    // traverse matrix n times (number of columns)
    for (let k = 0; k<n; k++) {
        let maxGlobal = 0;
        
        for (let i=0; i<m; i++) {
            let maxLocal = 0;
            let locIndex = 0;

            // find max value in a row
            for (let j=0; j<n; j++) {
                if (grid[i][j] > maxLocal) {
                    maxLocal = grid[i][j];
                    locIndex = j;
                }
            }
            // "remove" max value from the row
            grid[i][locIndex] = 0;

            // check for global max condition
            if (maxGlobal < maxLocal) {
                maxGlobal = maxLocal;
            }
        }
        res += maxGlobal;
    }

    return res;
};