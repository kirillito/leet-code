/**
 * @param {string} boxes
 * @return {number[]}
 */
 /* Easy-medium solution O(n), beats ~90% */
var minOperations = function(boxes) {
    let left = 0;
    let right = 0;
    let score = 0;
    let answer = [];

    // initial value to move all balls to first box
    for (let i=1; i<boxes.length; i++) {
        if (boxes[i] === '1') {
            score += i;
            right++;
        }
    }
    // generate answer iterating boxes array once
    answer.push(score);
    for (let i=1; i<boxes.length; i++) {
        if (boxes[i-1] === '1') {
            left++;
        }
        if (boxes[i] === '1') {
            right--;
            score--;
        }
        score = score-right+left;
        answer.push(score);
    }

    return answer;
};
/*
Easy solution, O(n^2) - beats ~33%
var minOperations = function(boxes) {
    let answer = [];

    for (let i=0; i<boxes.length; i++) {
        let sum = 0;
        for (let j=0; j<boxes.length; j++) {
            // skip the same box number
            if (i === j) {
                continue;
            }
            if (boxes[j] === '1') {
                sum += Math.abs(i-j);
            }
        }
        answer.push(sum);
    }

    return answer;
};
*/