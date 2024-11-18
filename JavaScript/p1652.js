/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let n = code.length;

    let decrypted = [];
    for (let i=0; i<n; i++) {
        if (k >= 0) {
            let sum = 0;
            for (let j=1; j<=k; j++) {
                let index = (i+j)%n;
                sum += code[index];
            }
            decrypted.push(sum);
        } else {
            let sum = 0;
            for (let j=-1; j>=k; j--) {
                let index = (i+j)>=0 ? (i+j) : (n+i+j);
                sum += code[index];
            }
            decrypted.push(sum);
        }
    }
    
    return decrypted;
};