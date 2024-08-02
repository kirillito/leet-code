/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let sum = 0;
    let current = s[0].toLowerCase();

    for (let i=1; i<s.length; i++) {
        let lowered = s[i].toLowerCase();
        if (lowered !== current) {
            sum++;
            current = lowered;
        }
    }

    return sum;
};