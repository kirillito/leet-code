/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res = new Array(s.length);
    
    indices.forEach((c,i) => {res[c] = s[i]; })
    
    return res.join('');
};

let answer = restoreString("codeleet", [4,5,6,7,0,2,1,3])
console.log(answer)

answer = restoreString("abc", [0,1,2])
console.log(answer)

answer = restoreString("aiohn", [3,1,4,2,0])
console.log(answer)

answer = restoreString("aaiougrt", [4,0,2,6,7,3,1,5])
console.log(answer)

answer = restoreString("art", [1,0,2])
console.log(answer)