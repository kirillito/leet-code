/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = [];

    for (let i=left; i<=right; i++) {
        if (i.toString().indexOf('0') >= 0) continue;

        if (isSelfDividing(i)) {
            res.push(i);
        }
    }

    return res;
};

var isSelfDividing = function(num) {
    let digits = num.toString().split('').map(x => Number.parseInt(x));

    for (let i=0; i<digits.length; i++) {
        if (num % digits[i] !== 0) {
            return false;
        }
    }
    return true;
}