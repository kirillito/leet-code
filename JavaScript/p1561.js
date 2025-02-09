/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let sum = 0;
    let maxI = 2*piles.length / 3;
    piles.sort((a,b) => b-a);
    for (let i=1; i<=maxI; i+=2) {
        sum += piles[i];
    }

    return sum;
};