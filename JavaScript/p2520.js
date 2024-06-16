/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    var res = 0;
    var reducedNum = num;

    while (reducedNum > 0) {
        var digit = reducedNum % 10;
        reducedNum = (reducedNum - digit) / 10;

        if (num%digit === 0)
            res++;
    }

    return res;
};