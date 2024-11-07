/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    num = num.split('');
    let evenSum = 0;
    let oddSum = 0;

    for (let i=0; i<num.length; i++) {
        if (i%2 === 0) {
            evenSum += Number.parseInt(num[i]);
        } else {
            oddSum += Number.parseInt(num[i]);
        }
    }
    return evenSum === oddSum;
};