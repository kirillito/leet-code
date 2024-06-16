/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = [];
    let counter = 0;
    let isMiddleLetterTaken = false;

    for (let i=0; i<s.length; i++) {
        if (!map[s.charCodeAt(i)]) {
            map[s.charCodeAt(i)] = 0;
        }
        map[s.charCodeAt(i)]++;
    }
    for (let i=0; i<map.length; i++) {
        if (!map[i]) continue;

        if (map[i] === 1 && !isMiddleLetterTaken) {
            isMiddleLetterTaken = true;
            counter++;
        }
        else if (map[i]%2 === 0) {
            counter += map[i];
        } else if (map[i]%2 === 1) {
            if (!isMiddleLetterTaken) {
                isMiddleLetterTaken = true;
                counter += map[i];
            } else {
                counter += map[i]-1;
            }
        }
    }

    return counter;
};