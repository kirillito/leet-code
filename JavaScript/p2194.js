/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    let res = [];
    let startRow = Number.parseInt(s.slice(1,2));
    let endRow = Number.parseInt(s.slice(4,5));

    for (let j=s.charCodeAt(0); j<=s.charCodeAt(3); j++) {
        for (let i=startRow; i<=endRow; i++) {
            res.push(`${String.fromCharCode(j)}${i}`);
        }
    }

    return res;
};