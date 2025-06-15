/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
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
    while (i<minNumber.length && (minNumber[i] === '1' || minNumber[i] === '0')) {
        i++;
    }
    if (i === 0 || (i < minNumber.length && minNumber.split('').every(x => x===minNumber[i]))) {
        minNumber = minNumber.replaceAll(minNumber[i],'1');
    } else if (i < minNumber.length) {
        minNumber = minNumber.replaceAll(minNumber[i],'0');
    }

    return Number.parseInt(maxNumber) - Number.parseInt(minNumber);
};