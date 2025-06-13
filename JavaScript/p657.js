/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;

    for (let i=0; i<moves.length; i++) {
        if (moves[i] === 'U') {
            y--;
        } else if (moves[i] === 'D') {
            y++;
        } else if (moves[i] === 'L') {
            x--;
        } else if (moves[i] === 'R') {
            x++;
        }
    }

    return (x === 0 && y === 0);
};

// less efficient
// var judgeCircle = function(moves) {
//     let moveCounter = {
//         'U': 0,
//         'D': 0,
//         'L': 0,
//         'R': 0
//     };

//     for (let i=0; i<moves.length; i++) {
//         moveCounter[moves[i]]++;
//     }

//     return (moveCounter['U'] === moveCounter['D'] 
//         && moveCounter['L'] === moveCounter['R']);
// };