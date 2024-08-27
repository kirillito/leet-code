/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let tested = 0;
    let diff = 0;

    for (let i=0; i<batteryPercentages.length; i++) {
        if (batteryPercentages[i]>diff) {
            tested++;
            diff++;
        }
    }
    return tested;
};