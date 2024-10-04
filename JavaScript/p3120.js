/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    // apparently only beats ~42% of solutions :(
    // let map = [];
    // // map out char codes
    // for (let i=0; i<word.length; i++) {
    //     map[word.charCodeAt(i)] = true;
    // }
    // // difference between lower and upper case characters is 32
    // let res = 0;
    // for (let i=65; i<=90; i++) {
    //     if (map[i] && map[i+32]) {
    //         res++;
    //     }
    // }

    // Set solution is much faster and takes much less memory
    let map = new Set(word.split(''));
    let res = 0;
    for (let i=65; i<=90; i++) {
        if (map.has(String.fromCharCode(i))
            &&map.has(String.fromCharCode(i+32))) {
                res++;
            }
    }

    return res;
};