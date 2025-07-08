/**
 * @param {number} n
 * @return {string}
 */
// easy JS built-in capabilities approach
var concatHex36 = function(n) {
    return ((n*n).toString(16) + (n*n*n).toString(36)).toUpperCase();
}
/*
// Slow algorithmic approach 
var concatHex36 = function(n) {
    const toBaseDigit = function(d, b) {
        if (d>b || d>35) throw Error(`Incorrect digit: ${d} for base: ${b}`);

        if (d < 10) {
            return d;
        } else {
            return String.fromCharCode(55+d);
        }
    }
    const toBase = function(x ,b) {
        let res = "";
        while (x > 0) {
            res = toBaseDigit(x%b, b) + res;
            x = Math.trunc(x/b);
        }
        return res;
    }
    
    return toBase(n*n, 16) + toBase(n*n*n, 36)
};
*/