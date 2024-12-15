/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    // single line solution, albeit a bit slow - beats ~31% solutions
    // return Math.max(...n.split('').map(x => Number.parseInt(x)));

    // early stop, more efficient solution - beats ~95% solutions
    let max = 0;
    for (let i=0; i<n.length; i++) {
        let x = Number.parseInt(n[i]);
        max = x > max ? x : max;

        if (max === 9) {
            break;
        }
    }
    return max;
};