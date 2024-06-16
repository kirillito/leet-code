/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let scoreFlags = [];
    let ranks = [];
    // flag all score values that are present
    for (let i=0; i<score.length; i++) {
        scoreFlags[score[i]] = true;
    }
    // replace true flags with rank strings
    let currentRank = 1;
    for (let i=scoreFlags.length-1; i>=0; i--) {
        if (scoreFlags[i]) {
            scoreFlags[i] = getRankString(currentRank);
            currentRank++;
        }
    }
    // replace values in original array with rank strings from the map and return it
    for (let i=0; i<score.length; i++) {
        score[i] = scoreFlags[score[i]];
    }
    return score;
};

var getRankString = function(num) {
    switch (num) {
        case 1:
            return "Gold Medal";
        case 2:
            return "Silver Medal";
        case 3:
            return "Bronze Medal";
        default:
            return num.toString();
    }
}