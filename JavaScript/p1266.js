/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let time = 0;

    for (let i=1; i<points.length; i++) {
        time += moveToPoint(points[i-1], points[i]);
    }

    return time;
};

var moveToPoint = function(current, end) {
    let xDiff = Math.abs(current[0]-end[0]);
    let yDiff = Math.abs(current[1]-end[1]);

    return Math.min(xDiff, yDiff) + Math.abs(xDiff-yDiff);
}