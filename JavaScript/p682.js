/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let scores = [];
    for (let i=0; i<operations.length; i++) {
        if (operations[i] === "+") {
            // task definition says all cases are valid - no need to check index
            scores.push(scores[scores.length-1] + scores[scores.length-2]);
        } else if (operations[i] === "D") {
            scores.push(scores[scores.length-1]*2);
        } else if (operations[i] === "C") {
            scores.pop();
        } else {
            scores.push(Number.parseInt(operations[i]));
        }
    }
    return scores.reduce((x,y)=>x+y,0);
};