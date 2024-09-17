/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    let min = 2000;
    // map of minute values present in input
    let map = Array(1440).fill(false);;

    // calculate minutes for every value
    // and fill out the map
    for (let i=0; i<timePoints.length; i++) {
        timePoint = timePoints[i].split(':');
        let point = Number.parseInt(timePoint[0])*60 
            + Number.parseInt(timePoint[1]);

        // if map already has the number
        // then item is duplicate and the answer is 0
        if (map[point]) return 0;

        map[point] = true;
    }

    // go over the map (already sorted due to its nature)
    // to find lowest difference value
    let prev = null;
    let first = null;
    for (let i=0; i<1440; i++) {
        // value is present in the map
        if (!map[i]) continue;
        // if we don't have previous value yet, set it
        if (prev === null) {
            prev = i;
            first = i;
            continue;
        }
        // we do have previous value - 
        // calculate the difference with current 
        // and set min value if necessary
        if (min > i-prev) {
            min = i-prev;
        }
        // set previous value as current and move next 
        prev = i;
    }
    // edge case - check diff for last previous value and first
    if (min > (1440 + first - prev)) {
        min = 1440 + first - prev;
    }

    return min;
};