/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function(matrix) {
    let luckyNumbers = [];
    let mins = [];
    let m = matrix.length;
    let n = matrix[0].length;

    for (let i=0; i<m; i++) {
        let min = matrix[i][0]; // too slow - Math.min(...matrix[i]);
        for (let j=1; j<n; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
            }
        }
        mins.push(min);
    }

    for (let i=0; i<n; i++) {
        let max = 0;
        for (let j=0; j<m; j++) {
            if (matrix[j][i] > max) {
                max = matrix[j][i];
            }
        }

        if (mins.indexOf(max) >= 0) {
            luckyNumbers.push(max);
        }
    }

    return luckyNumbers; 
};