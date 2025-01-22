/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
var garbageCollection = function(garbage, travel) {
    let totalTime = garbage[0].length;
    let travelG = 0;
    let travelP = 0;
    let travelM = 0;

    for (let i=1; i<garbage.length; i++) {
        totalTime += garbage[i].length;

        travelG += travel[i-1];
        if (garbage[i].includes('G')) {
            totalTime += travelG;
            travelG = 0;
        }

        travelP += travel[i-1];
        if (garbage[i].includes('P')) {
            totalTime += travelP;
            travelP = 0;
        }

        travelM += travel[i-1];
        if (garbage[i].includes('M')) {
            totalTime += travelM;
            travelM = 0;
        }
    }

    return totalTime;
};