/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    let n = word.length;
    let comp = "";
    
    let k = 0;
    let c = '';
    for (let i=0; i<n; i++) {
        c = word[i];
        k = 1;
        while (i+1<n && c===word[i+1] && k<9) {
            k++;
            i++;
        }
        comp += k + c;
    }
    
    return comp;
};