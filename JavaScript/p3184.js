/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
    let res = 0;
    for (let i=0; i<hours.length-1; i++) {
        for (let j=i+1; j<hours.length; j++) {
            if ((hours[i] + hours[j])%24 === 0) {
                res++;
            }
        }
    }

    return res;
};