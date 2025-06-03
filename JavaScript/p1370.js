/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let n = s.length;

    // build frequency counter for strings chars
    // use array instead of hash map since it is faster
    let map = [];
    for (let i=0; i<s.length; i++) {
        let code = s.charCodeAt(i);
        map[code] = (map[code] ?? 0) + 1;
    }

    let res = "";
    let currentCharCode = 97;
    let increasing = true;
    
    while (res.length < n) {
        let currentChar = String.fromCharCode(currentCharCode);
        if (map[currentCharCode]) {
            res += currentChar;
            map[currentCharCode]--;
        }
        // move to next char in alphabet
        if (increasing) {
            currentCharCode++;
        } else {
            currentCharCode--;
        }
        // change direction
        if (currentCharCode === 123) {
            increasing  = false;
            currentCharCode = 122;
        } else if (currentCharCode === 96) {
            increasing  = true;
            currentCharCode = 97;
        }
    }

    return res;
};