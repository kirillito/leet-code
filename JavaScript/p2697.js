/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let n = s.length;
    let res = "";
    let revRes = ""; // to avoid reversing string

    for (let i=0; i<(n-1)/2; i++) {
        if (s[i] !== s[n-1-i]) {
            if (s.charCodeAt(i) > s.charCodeAt(n-1-i)) {
                res += s[n-1-i];
                revRes = s[n-1-i] + revRes;
            } else {
                res += s[i];
                revRes = s[i] + revRes;
            }
        } else {
            res += s[i];
            revRes = s[i] + revRes;
        }
    } 
    if (n%2 === 1) {
        res += s[Math.ceil((n-1)/2)];
    }
    return res + revRes;
};