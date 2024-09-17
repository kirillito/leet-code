/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let s1map = {};
    let s2map = {};
    let res = [];
    s1 = s1.split(' ');
    s2 = s2.split(' ');

    for (let i=0; i<s1.length; i++) {
        s1map[s1[i]] = (s1map[s1[i]] ?? 0) + 1;
    }    
    for (let i=0; i<s2.length; i++) {
        s2map[s2[i]] = (s2map[s2[i]] ?? 0) + 1;
    }
    s1 = Object.keys(s1map);
    s2 = Object.keys(s2map);
    for (let i=0; i<s1.length; i++) {
        if (s1map[s1[i]] === 1 && !s2map[s1[i]]) {
            res.push(s1[i]);
        }
    }
    for (let i=0; i<s2.length; i++) {
        if (s2map[s2[i]] === 1 && !s1map[s2[i]]) {
            res.push(s2[i]);
        }
    }

    return res;
};