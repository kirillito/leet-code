/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    let result = "";
    let l = s.length/k;

    for (let i=0; i<l; i++) {
        let hashedCharCode = 0;

        for (let j=i*k; j<(i+1)*k; j++) {
            hashedCharCode += s.charCodeAt(j) - 97;
        }

        result += String.fromCharCode(hashedCharCode % 26 + 97);
    }

    return result;
};