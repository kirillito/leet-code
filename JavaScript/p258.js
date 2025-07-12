/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    while (num > 9) {
        let tmp = 0;
        while (num > 0) {
            tmp += num % 10;
            num = Math.trunc(num/10);
        }
        num = tmp;
    }
    return num;
};