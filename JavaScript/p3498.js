/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let revDegree = 0;

    for (let i=0; i<s.length; i++) {
        revDegree += (123-s.charCodeAt(i))*(i+1);
    }

    return revDegree;
};