/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let res = "";
    let n = s.length;
    let index = 0;
    let step = 0;

    while (index<n) {
        if (index<n-2) {
            if (s[index+2]==='#') {
                step = 2;
            } else {
                step = 1;
            }
        } else {
            step = 1;
        }
        res += String.fromCharCode(96+Number.parseInt(s.substring(index,index+step)));
        index += (step>1 ? 3 : 1);
    }

    return res;
};
