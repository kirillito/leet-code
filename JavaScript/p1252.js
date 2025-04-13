/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let counter = 0;
    let matrix = Array.from(Array(m), _ => Array(n).fill(0));

    let rows = Array(m).fill(0);
    let cols = Array(n).fill(0);
    for (let i=0; i<indices.length; i++) {
        rows[indices[i][0]]++;
        cols[indices[i][1]]++;
    }
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if ((rows[i] + cols[j])%2 === 1) {
                counter++;
            }
        }
    }

    return counter;
};