/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let commonMap = {};
    for (let i=0; i<words[0].length; i++) { 
        if (!commonMap[words[0][i]]) {
            commonMap[words[0][i]] = 0;
        }
        commonMap[words[0][i]]++;
    }

    for (let i=1; i<words.length; i++) {
        let wordMap = {};
        for (let j=0; j<words[i].length; j++) { 
            if (!commonMap[words[i][j]]) continue;

            if (!wordMap[words[i][j]]) {
                wordMap[words[i][j]] = 0;
            }
            wordMap[words[i][j]]++;
        }

        for (let c in commonMap) {
            commonMap[c] = Math.min(commonMap[c], wordMap[c]);
        }
    }

    let arr = [];
    for (let c in commonMap) {
        for (let i=1; i<=commonMap[c]; i++) {
            arr.push(c);
        }
    }
    return arr;
};