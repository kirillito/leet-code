/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    if (num<=11) return num;

    let digits = String(num).split('');
    lastIndexMap = {};
    for (let i=0; i<digits.length; i++) {
        lastIndexMap[digits[i]] = i;
    }

    for (let i=0; i<digits.length; i++) {
        for (let digit=9; digit>digits[i]; digit--) {
            if (lastIndexMap[digit] > i) {
                let swap = digits[i];
                digits[i] = digits[lastIndexMap[digit]];
                digits[lastIndexMap[digit]] = swap;
                return Number.parseInt(digits.join(''));
            }
        }
    }

    return num;
};