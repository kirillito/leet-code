/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let maxNumber = num.toString();
    let minNumber = num.toString();

    let i=0;
    // get to the first non-9 digit from the beginning
    while (i<maxNumber.length && maxNumber[i] === '9') {
        i++;
    }
    if (i < maxNumber.length) {
        maxNumber = maxNumber.replaceAll(maxNumber[i],'9')
    }

    i=0;
    // get to the first non-0 digit from the beginning
    while (i<minNumber.length && minNumber[i] === '0') {
        i++;
    }
    if (i < minNumber.length) {
        minNumber = minNumber.replaceAll(minNumber[i],'0');
    }

    return Number.parseInt(maxNumber) - Number.parseInt(minNumber);
};