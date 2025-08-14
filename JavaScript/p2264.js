/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let res = "";
    let max = -1;
    
    for (let i=0; i<num.length-2; i++) {
        if (num[i] === num[i+1] && num[i] === num[i+2]) {
            let current = Number.parseInt(num[i]);
            // break early if max possible is found
            if (current === 9) {
                return "999";
            }
            else if (current > max) {
                res = num.slice(i, i+3);
                max = current;
            }
        }
    }

    return res;
};