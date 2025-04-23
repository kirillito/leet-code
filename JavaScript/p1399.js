/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    let hashTable = {};
    let maxSize = 0;
    let res = 0;
    for (let i=1; i<=n; i++) {
        let sum = i.toString().split('').reduce((x, y)=>Number.parseInt(x)+Number.parseInt(y));
        if (!hashTable[sum]) {
            hashTable[sum] = [];
        }
        hashTable[sum].push(i);
        if (maxSize < hashTable[sum].length) {
            maxSize = hashTable[sum].length;
            res = 1;
        } else if (maxSize === hashTable[sum].length) {
            res++;
        }
    }
    
    //slow
    //Object.values(hashTable).filter(x => x.length === maxSize).length;
    return res;
};