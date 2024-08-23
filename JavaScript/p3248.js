/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let currentPos = 0;
    for (let i=0; i<commands.length; i++) {
        if (commands[i] === "RIGHT") {
            currentPos++;
        } else if (commands[i] === "LEFT") {
            currentPos--;
        } else if (commands[i] === "UP") {
            currentPos-=n;
        } else if (commands[i] === "DOWN") {
            currentPos+=n;
        }
    }

    return currentPos;
};