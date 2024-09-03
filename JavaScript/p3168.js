/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let max = 0;
    let people = 0;

    for (let i=0; i<s.length; i++) {
        if (s[i] === 'E') {
            people++;
            if (people > max) max = people;
        } else {
            people--;
        }
    }

    return max;
};