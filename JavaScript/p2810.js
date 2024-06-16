/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let res = "";
    let resRev = "";

    for (let c of s) {
        if (c === 'i') {
            let tmp = res;
            res = resRev;
            resRev = tmp;
        } else {
            res += c;
            resRev = c + resRev;
        }
    }

    return res;
};