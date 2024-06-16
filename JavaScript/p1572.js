/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let n = mat.length;
    let sum = 0;

    for (let i=0; i<n; i++) {
        sum += mat[i][i] + mat[n-i-1][i];
    }

    if (n%2===1) {
        let i = Math.floor(n/2);
        sum -= mat[i][i];
    }

    return sum;
};