/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    let res = "";
    let p = part.length;
    let r = 0;

    for (let i=0; i<s.length; i++) {
        res += s[i];
        r++;
        let j = 1;
        while (r>=j && p>=j
                && res[r-j] === part[p-j]) {
            if (j === p && res[r-j] === part[p-j]) {
                res = res.slice(0,r-p);
                r -= p;
                break;
            }
            j++;
        }
    }

    return res;
};