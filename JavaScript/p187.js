/**
 * @param {string} s
 * @return {string[]}
 */
// Set is faster than dictionary
var findRepeatedDnaSequences = function(s) {
    let res = new Set();
    let map = new Set();

    for (let i=0; i<=s.length-10; i++) {
        let seq = s.slice(i,i+10);
        if (map.has(seq) && !res.has(seq)) {
            res.add(seq);
        } 
        map.add(seq);
    }

    return Array.from(res);
};