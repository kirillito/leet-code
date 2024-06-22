/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    num = num.toString();
    let res = "";

    for (let i=0; i<num.length; i++) {
        res += '9';
        if (num[i] === '6') {
            res += num.substr(i+1);
            break;
        }
    }

    return Number.parseInt(res);
};