/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function(limit, queries) {
    let res = [];
    let coloredBalls = new Map();
    let colorMap = new Map();

    for (let i=0; i<queries.length; i++) {
        
        if (coloredBalls.has(queries[i][0])) {
            // remove old color of the ball
            let oldColor = coloredBalls.get(queries[i][0]);
            let numberOfBallsOldColor = colorMap.get(oldColor);
            numberOfBallsOldColor--;
            if (numberOfBallsOldColor === 0) {
                colorMap.delete(oldColor)
            } else {
                colorMap.set(oldColor, numberOfBallsOldColor)
            }
        }
        // add new color of the ball
        let newColor = queries[i][1];
        let numberOfBallsNewColor = colorMap.has(newColor) ? colorMap.get(newColor) : 0;
        numberOfBallsNewColor++;
        colorMap.set(newColor, numberOfBallsNewColor)

        coloredBalls.set(queries[i][0], queries[i][1]);

        res.push(colorMap.size);
    }

    return res;
};