/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let res = [];
    let n = A.length;
    let frequencyA = {};
    let frequencyB = {};
    let sum = 0;

    for (let i=0; i<n; i++) {
        if (A[i] === B[i]) {
            sum++;
            res.push(sum);
            continue;
        }

        frequencyA[A[i]] = (frequencyA[A[i]] ?? 0) + 1;
        frequencyB[B[i]] = (frequencyB[B[i]] ?? 0) + 1;
        if (frequencyA[B[i]] > 0) {
            sum++;
            frequencyA[B[i]]--;
        }
        if (frequencyB[A[i]] > 0) {
            sum++;
            frequencyB[A[i]]--;
        }
        res.push(sum);
    }

    return res;
};