/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let hashMap = {};
    for (let i=0; i<arr2.length; i++) {
        hashMap[arr2[i]] = i;
    }
    arr1.sort((a,b) => {
        if (hashMap[a] !== undefined && hashMap[b] !== undefined) return hashMap[a]-hashMap[b];
        else if (hashMap[a] !== undefined) return -1;
        else if (hashMap[b] !== undefined) return 1;
        else return a-b;
    });
    return arr1;
};