/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let row = [1];
    let res = [row];

    for (let i=1; i<numRows; i++) {
        let prev = res[i-1];
        row = [1];
        for (let j=0; j<prev.length-1; j++) {
            row.push(prev[j]+prev[j+1]);
        }
        row.push(1);
        res.push(row);
    }

    return res;
};