/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let arr = ["0","1"];

    for (let i=2; i<=n; i++) {
        let tmp = [];
        for (let j=0; j<arr.length; j++) {
            if (arr[j].endsWith("1")) {
                tmp.push(arr[j]+"0");
            } 
            tmp.push(arr[j]+"1");
        }
        arr = tmp;
    }

    return arr;
};