/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let l=0;
    let r=0;
    let any=0;

    for (let i=0; i<moves.length; i++) {
        if (moves[i] === 'L') {
            l++;
        } else if (moves[i] === 'R') {
            r++;
        } else if (moves[i] === '_') {
            any++;
        }
    }

    return Math.abs(l-r) + any;
};